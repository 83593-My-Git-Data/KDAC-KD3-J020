package com.app.services;

import com.app.entities.Auction;
import com.app.entities.Bid;
import com.app.entities.Player;
import com.app.entities.Team;
import com.app.entities.User;
import com.app.repositories.AuctionRepository;
import com.app.repositories.BidRepository;
import com.app.repositories.PlayerRepository;
import com.app.repositories.TeamRepository;
import com.app.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ManageAuctionServiceImpl implements ManageAuctionService {

    @Autowired
    private PlayerRepository playerRepository;

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BidRepository bidRepository;

    @Autowired
    private AuctionRepository finalAuctionRepository;

    // Store auction start times (can be modified based on actual requirements)
    private LocalDateTime auctionStartTime = LocalDateTime.now(); 

    @Override
    public void placeBid(Long userId, Long playerId, Double bidAmount) {
        Optional<User> userOpt = userRepository.findById(userId);
        Optional<Player> playerOpt = playerRepository.findById(playerId);

        if (userOpt.isPresent() && playerOpt.isPresent()) {
            User user = userOpt.get();
            Player player = playerOpt.get();
            Team team = user.getTeam();

            if (team != null) {
                // Ensure bid is within the auction time limit
                if (LocalDateTime.now().isAfter(auctionStartTime.plusMinutes(10))) {
                    throw new RuntimeException("Auction has ended.");
                }

                // Ensure bid price is greater than the player's base price
                if (bidAmount <= player.getBasePrice()) {
                    throw new RuntimeException("Bid amount must be greater than the base price.");
                }

                Bid bid = new Bid();
                bid.setUser(user);
                bid.setTeam(team);
                bid.setPlayer(player);
                bid.setBidPrice(bidAmount);

                // Set these values to avoid nulls
                bid.setUserName(user.getName());
                bid.setTeamName(team.getTeamName());
                bid.setPlayerName(player.getName());

                bidRepository.save(bid);
            }
        }
    }

    @Override
    public Double getCurrentHighestBid(Long playerId) {
        List<Bid> bids = bidRepository.findBidsForPlayer(playerId);
        return bids.isEmpty() ? 0.0 : bids.get(0).getBidPrice(); // Assuming the list is ordered by bid price in descending order
    }

    @Override
    public Long getCurrentHighestBidder(Long playerId) {
        List<Bid> bids = bidRepository.findBidsForPlayer(playerId);
        return bids.isEmpty() ? null : bids.get(0).getUser().getId(); // Assuming the list is ordered by bid price in descending order
    }

    @Override
    public void finalizeAuction() {
        List<Bid> highestBids = bidRepository.findHighestBidsForAllPlayers();

        for (Bid bid : highestBids) {
            Player player = bid.getPlayer();
            Team team = bid.getTeam();
            User user = bid.getUser();

            Auction finalAuction = new Auction();
            finalAuction.setUserName(user.getName());
            finalAuction.setPlayers(player.getName());// Collect all players for the team
            finalAuction.setAbout(player.getAbout());
            finalAuction.setTeamName(team.getTeamName());
            finalAuction.setBidPrice(bid.getBidPrice()); // Add bid price to the final auction

            finalAuctionRepository.save(finalAuction);
        }
    }


    @Override
    public List<String> getPlayersByTeamName(String teamName) {
        return finalAuctionRepository.findPlayersByTeamName(teamName);
    }
    
//    @Override
//    public void finalizeAuction() {
//        List<Bid> highestBidsForAllPlayers = bidRepository.findHighestBidsForAllPlayers();
//
//        for (Bid bid : highestBidsForAllPlayers) {
//            Team team = bid.getTeam();
//            List<Bid> highestBidsForTeam = bidRepository.findHighestBidsForTeam(team.getId());
//
//            // Collect player names and their corresponding bid prices for the entire team
//            List<String> playerNames = highestBidsForTeam.stream()
//                    .map(b -> b.getPlayer().getName())
//                    .collect(Collectors.toList());
//
//            List<Double> bidPrices = highestBidsForTeam.stream()
//                    .map(Bid::getBidPrice)
//                    .collect(Collectors.toList());
//
//            Auction finalAuction = new Auction();
//            finalAuction.setUserName(bid.getUser().getName());
//            finalAuction.setPlayers(playerNames);  // Set all player names for the team
//            finalAuction.setBidPrices(bidPrices);  // Set corresponding bid prices for the team
//            finalAuction.setTeamName(team.getTeamName());
//
//            finalAuctionRepository.save(finalAuction);
//        }
//    }



    @Override
    public List<Player> getPlayersForTeam(Long teamId) {
        return bidRepository.findPlayersWithHighestBids(teamId);
    }
}

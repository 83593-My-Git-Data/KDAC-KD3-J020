package com.app.services;

import com.app.entities.Player;
import java.util.List;

public interface ManageAuctionService {

    void placeBid(Long userId, Long playerId, Double bidAmount);

 
    Double getCurrentHighestBid(Long playerId);
    Long getCurrentHighestBidder(Long playerId);
    void finalizeAuction();
    List<Player> getPlayersForTeam(Long teamId);
    List<String> getPlayersByTeamName(String teamName);

}

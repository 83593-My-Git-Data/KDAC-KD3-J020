package com.app.repositories;

import com.app.dtos.BidDTO;
import com.app.entities.Bid;
import com.app.entities.Player;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface BidRepository extends JpaRepository<Bid, Long> {

    @Query("SELECT b FROM Bid b WHERE b.player.id = :playerId ORDER BY b.bidPrice DESC")
    List<Bid> findBidsForPlayer(@Param("playerId") Long playerId);

    @Query("SELECT b FROM Bid b WHERE b.player.id = :playerId ORDER BY b.bidPrice DESC")
    Optional<Bid> findHighestBidForPlayer(@Param("playerId") Long playerId);

    @Query("SELECT DISTINCT b.player FROM Bid b WHERE b.bidPrice = (SELECT MAX(bid.bidPrice) FROM Bid bid WHERE bid.player.id = :playerId) AND b.player.id = :playerId")
    List<Player> findPlayersWithHighestBids(@Param("playerId") Long playerId);

    @Query("SELECT b FROM Bid b JOIN b.player p JOIN b.team t JOIN b.user u WHERE b.bidPrice = (SELECT MAX(bid.bidPrice) FROM Bid bid WHERE bid.player.id = b.player.id)")
    List<Bid> findHighestBidsForAllPlayers();

    // Fetch bids with player name, team name, and user name
    @Query("SELECT new com.app.dtos.BidDTO(b.id, p.name, t.teamName, u.name, b.bidPrice) " +
    	       "FROM Bid b JOIN b.player p JOIN b.team t JOIN b.user u WHERE b.player.id = :playerId")
    	List<BidDTO> findBidsForPlayerWithDetails(@Param("playerId") Long playerId);

    @Query("SELECT b FROM Bid b WHERE b.team.id = :teamId ORDER BY b.bidPrice DESC")
    List<Bid> findHighestBidsForTeam(@Param("teamId") Long teamId);
    
    

}

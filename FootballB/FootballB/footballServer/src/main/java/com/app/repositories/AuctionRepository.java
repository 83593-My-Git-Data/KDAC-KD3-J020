package com.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entities.Auction;

@Repository
public interface AuctionRepository extends JpaRepository<Auction, Long> {
	 @Query("SELECT a.players FROM Auction a WHERE a.teamName = :teamName")
	    List<String> findPlayersByTeamName(String teamName);
}

package com.app.controllers;

import com.app.entities.Player;
import com.app.services.ManageAuctionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auction")
public class ManageAuctionControlller {

    @Autowired
    private ManageAuctionService manageAuctionService;

    @PostMapping("/bid")
    public ResponseEntity<Void> placeBid(@RequestParam Long userId, @RequestParam Long playerId, @RequestParam Double bidAmount) {
        manageAuctionService.placeBid(userId, playerId, bidAmount);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/highestBid/{playerId}")
    public ResponseEntity<Double> getCurrentHighestBid(@PathVariable Long playerId) {
        Double highestBid = manageAuctionService.getCurrentHighestBid(playerId);
        return ResponseEntity.ok(highestBid);
    }

    @GetMapping("/highestBidder/{playerId}")
    public ResponseEntity<Long> getCurrentHighestBidder(@PathVariable Long playerId) {
        Long highestBidderId = manageAuctionService.getCurrentHighestBidder(playerId);
        return ResponseEntity.ok(highestBidderId);
    }

    @PostMapping("/finalize")
    public ResponseEntity<Void> finalizeAuction() {
        manageAuctionService.finalizeAuction();
        return ResponseEntity.ok().build();
    }

//    @GetMapping("/team/{teamId}/players")
//    public ResponseEntity<List<Player>> getPlayersForTeam(@PathVariable Long teamId) {
//        List<Player> players = manageAuctionService.getPlayersForTeam(teamId);
//        return ResponseEntity.ok(players);
//    }
    
 // Method to fetch players by team name from Auction table
    @GetMapping("/team/{teamName}/auction-players")
    public ResponseEntity<List<String>> getPlayersByTeamName(@PathVariable String teamName) {
        List<String> players = manageAuctionService.getPlayersByTeamName(teamName);
        return ResponseEntity.ok(players);
    }
    }

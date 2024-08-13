package com.app.controllers;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.entities.Player;
import com.app.services.ManagePlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RequestMapping("/player")
@CrossOrigin("*")
@Validated
@RestController
public class ManagePlayerController {

    @Autowired
    private ManagePlayerService playerService;

    @GetMapping
    public List<Player> getAllPlayers() {
        return playerService.getAllPlayers();
    }
    
    @GetMapping("/{id}")
    public Player getPlayerById(@PathVariable Long id) {
    	 return playerService.getPlayerById(id);
    }

    @PostMapping
    public Player addPlayer(@RequestBody Player player) {
        return playerService.savePlayer(player);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlayer(@PathVariable Long id) {
        try {
        	playerService.deletePlayer(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}


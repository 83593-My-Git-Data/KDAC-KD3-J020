package com.app.services;
import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.entities.Player;
import com.app.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ManagePlayerServiceImpl implements ManagePlayerService {

    @Autowired
    private PlayerRepository playerRepository;

    @Override
    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }
    
    public Player getPlayerById(Long playerId) {
        Optional<Player> player = playerRepository.findById(playerId);
        return player.get();
    }

    @Override
    public Player savePlayer(Player player) {
        return playerRepository.save(player);
    }

//    @Override
//    public Player updatePlayer(Long playerId, Player player) {
//        Optional<Player> existingPlayer = playerRepository.findById(playerId);
//        if (existingPlayer.isPresent()) {
//            player.setId(playerId);
//            return playerRepository.save(player);
//        } else {
//            throw new ResourceNotFoundException("Player not found with id: " + playerId);
//        }
//    }

    @Override
    public void deletePlayer(Long playerId) {
        Optional<Player> existingPlayer = playerRepository.findById(playerId);
        if (existingPlayer.isPresent()) {	
            playerRepository.delete(existingPlayer.get());
        } else {
            throw new ResourceNotFoundException("Player not found with id: " + playerId);
        }
    }
}
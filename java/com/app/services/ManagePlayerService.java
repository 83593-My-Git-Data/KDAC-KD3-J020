package com.app.services;

import com.app.entities.Player;
import java.util.List;

public interface ManagePlayerService {
    List<Player> getAllPlayers();
    Player getPlayerById(Integer playerId);
    Player createPlayer(Player player);
    Player updatePlayer(Integer playerId, Player player);
    void deletePlayer(Integer playerId);
}

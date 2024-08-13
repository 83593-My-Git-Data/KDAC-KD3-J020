package com.app.services;

import com.app.entities.Player;
import java.util.List;

public interface ManagePlayerService {
	 List<Player> getAllPlayers();
	   Player getPlayerById(Long playerId);
	    Player savePlayer(Player player);
    void deletePlayer(Long playerId);
}

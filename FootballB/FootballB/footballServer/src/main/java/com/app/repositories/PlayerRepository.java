package com.app.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Player;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Integer> {

	Optional<Player> findById(Long playerId);

//	List<Player> findByTeamId(Long teamId);

}
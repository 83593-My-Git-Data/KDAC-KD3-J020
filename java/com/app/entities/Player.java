package com.app.entities;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "manage_player")
public class  Player {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "player_id")
	private Integer playerId;
	
	@Column(name = "player_name", length = 25)
	private String playerName;
	
	@Column(name = "player_age")
	private Integer playerAge;
	
	@Column(name = "no_of_matches")
	private Integer noOfMatches;
	
	@Column(name = "bidding_price")
	private Double biddingPrice;
}
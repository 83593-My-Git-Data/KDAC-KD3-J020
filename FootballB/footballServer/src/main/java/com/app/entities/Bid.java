package com.app.entities;

import javax.persistence.*;
import lombok.*;


@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "bids")
public class Bid {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "team_id")
    private Team team;

    @ManyToOne
    @JoinColumn(name = "player_id")
    private Player player;

    private Double bidPrice;
    
    

    private String userName;
    private String teamName;
    private String playerName;

    @PrePersist
    public void prePersist() {
        if (user != null) {
            this.userName = user.getName();
        }
        if (team != null) {
            this.teamName = team.getTeamName();
        }
        if (player != null) {
            this.playerName = player.getName();
        }
    }

    // Getters and Setters
}
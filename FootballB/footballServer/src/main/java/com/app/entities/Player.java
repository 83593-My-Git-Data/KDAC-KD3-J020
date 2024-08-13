package com.app.entities;

import javax.persistence.*;
import lombok.*;

@Entity
@Table(name = "players")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Player extends BaseEntity {

    @Column(name = "name", length = 20, nullable = false)
    private String name;

    @Column(name = "base_price", nullable = false)
    private double basePrice;
    
    @Column(name = "about", length = 100, nullable = false)
	private String About;
    
	@Column(name = "player_age", length = 25,nullable = false)
	private Integer playerAge;
	
	@Column(name = "image", length = 25,nullable = false)
	private String Image;

//	@Column(name = "no_of_matches")
//	private Integer noOfMatches;
	
}

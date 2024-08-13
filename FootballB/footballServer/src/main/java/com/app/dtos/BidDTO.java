package com.app.dtos;

import com.app.entities.Role;

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
public class BidDTO {

    private Long bidId;
    private String playerName;
    private String teamName;
    private String userName;
    private Double bidPrice;

    // Constructors, Getters, and Setters
}

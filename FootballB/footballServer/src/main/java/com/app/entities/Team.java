package com.app.entities;

import javax.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "teams")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Team extends BaseEntity {

//    @Column(name = "teamName", length = 20, nullable = false)
    private String teamName;

    @Column(name = "email_id", length = 30, unique = true, nullable = false)
    private String emailId;
    

//    @OneToOne(mappedBy= "team", cascade = CascadeType.ALL, orphanRemoval = true)
//    private User user;

//    @OneToMany(mappedBy = "team", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    private List<Player> players;
}

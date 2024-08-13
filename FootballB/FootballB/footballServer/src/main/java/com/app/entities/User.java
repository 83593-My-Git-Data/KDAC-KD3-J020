package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class User extends BaseEntity {

    @Column(name = "name", length = 20, nullable = false)
    private String name;

    @Column(name = "phone_no", length = 15, unique = true, nullable = false)
    private String phoneNo;

    @Column(name = "email_id", length = 30, unique = true, nullable = false)
    private String emailId;

    @Column(length = 250, nullable = false)
    private String password;

    @Column(length = 250, nullable = false)
    private String confirmPassword;
    
    @Enumerated(EnumType.STRING)
    @Column(length = 15)
    private Role role;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "teamName")
    private Team team;

//    @OneToMany
//    @JoinColumn(name = "team_name", referencedColumnName = "team_name", insertable = false, updatable = false)
//    private List<Team> teams = new ArrayList<>();
}
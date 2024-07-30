package com.app.entities;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
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
@Table(name = "manage_schedule")
public class Schedule extends BaseEntity{ 
	
	@Column(name = "team_name1", length = 25)
	private String teamName1;
	@Column(name = "team_name2", length = 25)
	private String teamName2;
	@Column(length = 25)
	private String location;
	@Column(name = "date")
	private LocalDate date;
	@Column(name = "time")
	private LocalTime time;
}

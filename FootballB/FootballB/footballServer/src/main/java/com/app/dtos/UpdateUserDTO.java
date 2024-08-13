package com.app.dtos;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class UpdateUserDTO {

	@JsonProperty(access = Access.READ_ONLY)
	private long id;
	@NotBlank(message = "Client Name Can Not Be Blank")
	private String clientName;
	
	@NotBlank(message = "Team Name Can Not Be Blank")
	private String teamName;
	
	@NotBlank(message = "Email-id Can Not Be Blank")
	@Email(message = "Email-id is Not in Standard Format")
	private String emailId;
	
	@NotBlank(message = "Phone No. Can Not Be Blank")
	private String phoneNo;
}

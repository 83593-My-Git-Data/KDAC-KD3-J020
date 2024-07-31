package com.app.controllers;

import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Role;
import com.app.entities.User;
import com.app.services.AdminService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

	@Autowired
	private AdminService adminService;
	
	@GetMapping("/allusersbyrole")
	public ResponseEntity<?> getAllUsersByRole(@RequestParam @NotNull Role role){
		return ResponseEntity.ok(adminService.getAllUsersByRole(role));
	}
	
	
//	@PutMapping("/block/{id}")
//	public ResponseEntity<?> blockClient(@PathVariable @NotNull Long id) {
//		return ResponseEntity.ok(adminService.blockClient(id));
//	}
}

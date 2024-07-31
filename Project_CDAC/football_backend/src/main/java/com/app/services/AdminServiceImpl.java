package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dtos.ApiResponse;
import com.app.dtos.UpdateUserDTO;
import com.app.entities.Role;
import com.app.entities.User;
import com.app.respositories.AdminRepository;
@Service
@Transactional
public class AdminServiceImpl implements AdminService{

	@Autowired
	private AdminRepository adminRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<UpdateUserDTO> getAllUsersByRole(Role role) {
		
		return adminRepo.findAllByRole(role).stream().map(user -> mapper.map(user, UpdateUserDTO.class))
				.collect(Collectors.toList());
	}

	@Override
	public ApiResponse blockClient(Long id) {
		User user =adminRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid User ID"));
		user.setRole(null);
		adminRepo.save(user);
		return new ApiResponse("User Blocked!!!");
	}

}

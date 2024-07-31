package com.app.services;


import javax.transaction.Transactional;
import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dtos.ApiResponse;
import com.app.dtos.LoginDTO;
import com.app.dtos.UpdateUserDTO;
import com.app.dtos.UserDTO;
import com.app.entities.Role;
import com.app.entities.User;
import com.app.respositories.UserRepository;


@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private ModelMapper mapper;

//	@Autowired
//	private PasswordEncoder encoder;
	
	@Override
	public UserDTO registerUser(@Valid UserDTO dto) {
		User user = mapper.map(dto, User.class);
		user.setRole(Role.ROLE_CLIENT);
		//user.setPassword(encoder.encode(user.getPassword()));
		User newUser = userRepo.save(user);
		System.out.println(newUser);
		return mapper.map(newUser, UserDTO.class);
	}
	

	@Override
	public ApiResponse changePassword(LoginDTO dto) {
		User user = userRepo.findByEmailId(dto.getEmailId());
		if (user != null) {
			user.setPassword(dto.getPassword());
			userRepo.save(user);
			return new ApiResponse("Password Changed Successfully!!!");
		}
		throw new ResourceNotFoundException("Invalid Email Or Password");	}

	@Override
	public UserDTO updateUser(Long id, UpdateUserDTO dto) {
		if (userRepo.existsById(id)) {
			User existingUser = userRepo.findById(id).orElse(null);

			if (existingUser != null) {
				existingUser.setClientName(dto.getClientName());
				existingUser.setTeamName(dto.getTeamName());
				existingUser.setEmailId(dto.getEmailId());
				existingUser.setPhoneNo(dto.getPhoneNo());
				return mapper.map(userRepo.save(existingUser), UserDTO.class);
			}
		}
		throw new ResourceNotFoundException("Invalid Email Or Password");
	}


	@Override
	public UserDTO loginUser (LoginDTO dto) {
		User user = userRepo.findByEmailIdAndPassword(dto.getEmailId(),dto.getPassword());
		if (user != null) {
			System.out.println("LOGIN SUCCESSFULLY");
			return mapper.map(user, UserDTO.class);}
		throw new ResourceNotFoundException("Invalid Email Or Password");
	}
	
	 
}

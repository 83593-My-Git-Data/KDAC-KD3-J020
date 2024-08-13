package com.app.services;
import javax.transaction.Transactional;
import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dtos.ApiResponse;
import com.app.dtos.LoginDTO;
import com.app.dtos.UpdateUserDTO;
import com.app.dtos.UserDTO;
import com.app.entities.Role;
import com.app.entities.Team;
import com.app.entities.User;
import com.app.repositories.TeamRepository;
import com.app.repositories.UserRepository;


@SuppressWarnings("unused")
@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private TeamRepository teamRepository;


//	@Autowired
//	private PasswordEncoder encoder;
//	
//	@Override
//	public User registerUser(@Valid UserDTO dto) {
//		if (!dto.getPassword().equals(dto.getConfirmPassword())) {
//            throw new IllegalArgumentException("Password and Confirm Password do not match");
//        }
//		if (userRepo.findByEmailId(dto.getEmailId()) != null) {
//            throw new IllegalArgumentException("Email already registered");
//        }
//
//        try {
//        	
//            User user = new User();
//            user.setPassword(passwordEncoder.encode(dto.getPassword()));
//            user.setRole(Role.ROLE_CLIENT);
//            
//         // Create a new team entity
//            Team team = mapper.map(dto, Team.class);
//            // Save the team entity
//            Team savedTeam = teamRepository.save(team);
//
//            // Create a new user entity
//            User user = mapper.map(dto, User.class);
//            user.setTeam(savedTeam);
//
//            // Save the user entity
//            return userRepository.save(user);
//            
//
//            //Team team = new Team();
//            //team.setTeamName(dto.getTeamName());
//            team.setEmailId(dto.getEmailId());
//            team.setUser(user);
//
//           // user.setTeam(team);
//
//            User newUser = userRepo.save(user);
//            System.out.println("newuser"+newUser);
//
//            return mapper.map(newUser, UserDTO.class);
//        } catch (Exception e) {
//            throw new RuntimeException("Failed to register user: " + e.getMessage(), e);
//        }
//		User user = mapper.map(dto, User.class);
//		user.setRole(Role.ROLE_CLIENT);
//		
//		Team team = new Team();
//        team.setTeamName(dto.getTeamName());
//        team.setUser(user);
//        user.setTeam(team);
//		
//		User newUser = userRepo.save(user);
//		return mapper.map(newUser, UserDTO.class);
//	}
//	

	@Override
	public User registerUser(UserDTO userDTO) {
		if (!userDTO.getPassword().equals(userDTO.getConfirmPassword())) {
      throw new IllegalArgumentException("Password and Confirm Password do not match");
  }
	if (userRepository.findByEmailId(userDTO.getEmailId()) != null) {
      throw new IllegalArgumentException("Email already registered");
  }
//	 User user = new User();
// user.setPassword(passwordEncoder.encode(dto.getPassword()));
        // Create a new team entity
        Team team = mapper.map(userDTO, Team.class);
        // Save the team entity
        Team savedTeam = teamRepository.save(team);

        // Create a new user entity
        User user = mapper.map(userDTO, User.class);
        user.setRole(Role.ROLE_CLIENT);
        user.setTeam(savedTeam);
        // Save the user entity
        return userRepository.save(user);
	
    }
	
	@Override
	public ApiResponse changePassword(LoginDTO dto) {
		User user = userRepository.findByEmailId(dto.getEmailId());
		if (user != null) {
			user.setPassword(dto.getPassword());
			userRepository.save(user);
			return new ApiResponse("Password Changed Successfully!!!");
		}
		throw new ResourceNotFoundException("Invalid Email Or Password");	}

	@Override
	public UserDTO updateUser(Long id, UpdateUserDTO dto) {
		if (userRepository.existsById(id)) {
			User existingUser = userRepository.findById(id).orElse(null);

			if (existingUser != null) {
				existingUser.setName(dto.getClientName());
//				existingUser.setTeam(dto.getTeamName());
				existingUser.setEmailId(dto.getEmailId());
				existingUser.setPhoneNo(dto.getPhoneNo());
				return mapper.map(userRepository.save(existingUser), UserDTO.class);
			}
		}
		throw new ResourceNotFoundException("Invalid Email Or Password");
	}
	@Override
	public UserDTO loginUser (LoginDTO dto) {
		User user = userRepository.findByEmailIdAndPassword(dto.getEmailId(),dto.getPassword());
		System.out.println("Hii "+user);
		if (user != null) {
			System.out.println("Hii "+user);
			System.out.println("LOGIN SUCCESSFULLY");
			return mapper.map(user, UserDTO.class);}
		throw new ResourceNotFoundException("Invalid Email Or Password");
	}	 
}
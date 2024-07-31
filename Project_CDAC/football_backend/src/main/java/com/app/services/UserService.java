package com.app.services;

import javax.validation.Valid;

import com.app.dtos.ApiResponse;
import com.app.dtos.LoginDTO;
import com.app.dtos.UpdateUserDTO;
import com.app.dtos.UserDTO;

public interface UserService {

	UserDTO registerUser(UserDTO dto);

	ApiResponse changePassword(LoginDTO dto);

	UserDTO updateUser(Long id, UpdateUserDTO dto);

	UserDTO loginUser(@Valid LoginDTO dto);
}

package com.app.respositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Role;
import com.app.entities.User;

import java.util.List;

public interface AdminRepository extends JpaRepository<User, Long> {

	List<User> findAllByRole(Role role);
}

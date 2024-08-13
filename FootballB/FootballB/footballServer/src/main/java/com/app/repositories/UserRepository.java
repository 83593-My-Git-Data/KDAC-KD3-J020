package com.app.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	User findByEmailIdAndPassword(String emailId,String password);
	
	User findByEmailId(String emailId);
	
//    Optional<User> findByEmail(String emailId);

	
}


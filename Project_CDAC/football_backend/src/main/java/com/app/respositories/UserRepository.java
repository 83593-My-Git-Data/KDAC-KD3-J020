package com.app.respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	User findByEmailIdAndPassword(String emailId,String password);
	
	User findByEmailId(String emailId);
}


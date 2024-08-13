//
//package com.app.security;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import com.app.entities.User;
//import com.app.repositories.UserRepository;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Service
//public class CustomUserDetailService implements UserDetailsService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//    
//    @SuppressWarnings("unchecked")
//	@Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//    	List<User> users = (List<User>) userRepository.findByEmailId(username);
//    	User user = users.isEmpty()? null : users.get(0);
//
//        if (user == null) {
//            throw new UsernameNotFoundException("User not found");
//        }
//
//        List<GrantedAuthority> authorities = new ArrayList<>();
//        authorities.add(new SimpleGrantedAuthority(user.getRole().name()));
//
//        String encodedPassword = passwordEncoder.encode(user.getPassword());
//        
//        return new org.springframework.security.core.userdetails.User(
//                user.getName(),
//                encodedPassword,
//                authorities
//        );
//    }
//}
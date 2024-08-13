//package com.app.security;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationProvider;
//import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
//import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//@EnableWebSecurity
//@EnableMethodSecurity
//public class SecurityConfiguration {
//	
//	@Bean
//	public PasswordEncoder passwordEncoder() { 
//		return new BCryptPasswordEncoder();
//	}
//
//	@Bean
//	public UserDetailsService userDetailsService() {
//		return new CustomUserDetailService();	
//	}
//	
//	@Bean
//    public AuthenticationProvider authenticationProvider() {
//        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
//        provider.setUserDetailsService(userDetailsService());
//        provider.setPasswordEncoder(passwordEncoder());
//        return provider;
//    }
//	
//	@Bean
//	public SecurityFilterChain filterchain(HttpSecurity httpSecurity) throws Exception {
//		
//		httpSecurity.csrf().disable()
//		     .authorizeHttpRequests()
////		     .antMatchers("/admin/allusersbyrole")
////		     .hasRole("ADMIN")
//		     .antMatchers("/user/login", "/user/register")
//		     .permitAll()
//		     .anyRequest()
//		     .authenticated()
//		     .and()
//		     .formLogin()
//		     .loginPage("/user/login");
//		
//		return httpSecurity.build();
//		
//	}
//	
//}
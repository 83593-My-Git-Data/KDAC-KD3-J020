//package com.app.config;
//
//import org.modelmapper.ModelMapper;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//import com.app.dtos.UserDTO;
//import com.app.entities.User;
//
//@Configuration
//public class ModelMapperConfig {
//    
//    @Bean
//    public ModelMapper modelMapper() {
//        ModelMapper modelMapper = new ModelMapper();
//        
//        // Custom mappings if needed
//        modelMapper.typeMap(User.class, UserDTO.class).addMappings(mapper -> {
//            mapper.map(src -> src.getTeam().getTeamName(), UserDTO::setTeamId);
//            // If you don't want to map password and confirm password to DTO
//            mapper.skip(UserDTO::setPassword);
//            mapper.skip(UserDTO::setConfirmPassword);
//        });
//
//        return modelMapper;
//    }
//}

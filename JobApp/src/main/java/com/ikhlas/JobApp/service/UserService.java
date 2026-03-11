package com.ikhlas.JobApp.service;

import com.ikhlas.JobApp.model.Role;
import com.ikhlas.JobApp.model.User;
import com.ikhlas.JobApp.repository.UserRepo;
import org.apache.catalina.valves.rewrite.InternalRewriteMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;
    private final BCryptPasswordEncoder encoder=new BCryptPasswordEncoder(12);

    public boolean userExists(String username){
        User user=userRepo.findByUsername(username);
        return user != null;
    }

    public User getUser(){
        Authentication authentication= SecurityContextHolder
                .getContext().getAuthentication();

        String username=authentication.getName();

        User user = userRepo.findByUsername(username);

        return user;
    }

    public User addUser(User user){
        user.setRole(Role.valueOf(user.getRole().name().toUpperCase()));
        user.setPassword(encoder.encode(user.getPassword()));
        return userRepo.save(user);
    }

    public void deleteUser(String username) {
        User user=userRepo.findByUsername(username);
        userRepo.deleteById(user.getId());
    }
}

package com.ikhlas.JobApp.controller;

import com.ikhlas.JobApp.model.User;
import com.ikhlas.JobApp.service.JwtService;
import com.ikhlas.JobApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/auth")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtService jwtService;


    @PostMapping("/signup")
    public ResponseEntity<String> saveUser(@RequestBody User user){
        if(userService.userExists(user.getUsername())){
                return ResponseEntity
                        .status(HttpStatus.CONFLICT)
                        .body("Username already exists");
        }
        userService.addUser(user);
        return ResponseEntity.ok("User Added Successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
            try{
                Authentication authentication = authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
                );
                if(authentication.isAuthenticated()) {
                    UserDetails userDetails=(UserDetails) authentication.getPrincipal();
                    String token= jwtService.generateToken(userDetails);
                    return ResponseEntity.ok(token);
                }

            }catch(Exception e){
               return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                       .body("Invalid username or Password");
            }

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Authentication Failed");
    }

    @DeleteMapping("/signout/{username}")
    public ResponseEntity<?> deleteUser(@PathVariable String username){
        try{
            userService.deleteUser(username);
            return ResponseEntity.ok("User deleted successfully");
        }
        catch(Exception e){
            throw  new RuntimeException(e);
        }
    }
}

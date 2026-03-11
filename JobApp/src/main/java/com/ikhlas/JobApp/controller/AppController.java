package com.ikhlas.JobApp.controller;

import com.ikhlas.JobApp.model.Application;
import com.ikhlas.JobApp.service.AppService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/application")
public class AppController {

    @Autowired
    private AppService appService;

    @PostMapping("/apply")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> addApplication(@Valid @RequestBody Application app){
        System.out.println("Inside addApplication controller");
        try{
            appService.addApplication(app);
            return ResponseEntity.ok("Application submitted successfully");
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/userApplications")
    public List<Application> getApplications(){
        return appService.userApplications();
    }

    @GetMapping("/userApplications/{appId}")
    public Application getApplication(@PathVariable int appId){
        return appService.getApplication(appId);
    }

    @GetMapping("/{postId}")
    @PreAuthorize("hasRole('ADMIN')")
    public List<Application> getJobApplications(@PathVariable int postId){
        return appService.getJobApplication(postId);
    }

    @DeleteMapping("/delete/{appId}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> deleteApplication(@PathVariable int appId){
        try{
            appService.deleteApplication(appId);
            return ResponseEntity.ok("Deleted successfully");

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}

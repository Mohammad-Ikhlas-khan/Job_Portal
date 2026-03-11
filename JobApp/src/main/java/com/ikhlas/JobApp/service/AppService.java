package com.ikhlas.JobApp.service;

import com.ikhlas.JobApp.model.Application;
import com.ikhlas.JobApp.model.JobPost;
import com.ikhlas.JobApp.model.User;
import com.ikhlas.JobApp.repository.AppRepo;
import com.ikhlas.JobApp.repository.JobRepo;
import com.ikhlas.JobApp.repository.UserRepo;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class AppService {

    @Autowired
    private AppRepo appRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private JobRepo jobRepo;

    @Autowired
    private UserService userService;


    public void addApplication(@Valid Application app) {
        User user=userService.getUser();
        JobPost jobPost = jobRepo.findById(app.getJobPost().getPostId())
                .orElseThrow(() -> new RuntimeException("Job not found"));

        if (appRepo.existsByUserAndJobPost(user, jobPost)) {
            throw new RuntimeException("You have already applied for this job");
        }
        app.setJobPost(jobPost);
        app.setUser(user);
        appRepo.save(app);
    }

    public List<Application> userApplications() {
        User user=userService.getUser();
        return appRepo.findByUser_Id(user.getId());
    }

    public Application getApplication(int appId) {
        return  appRepo.findById(appId).orElse(new Application());

    }

    public void deleteApplication(int appId) {
        User user=userService.getUser();
        Application application= appRepo.findByAppIdAndUser_Id(appId,user.getId());
        if(application==null){
            throw new RuntimeException("Application Not found");
        }
        appRepo.delete(application);
    }

    public List<Application> getJobApplication(int postId) {
        return appRepo.findByJobPost_PostId(postId);
    }
}

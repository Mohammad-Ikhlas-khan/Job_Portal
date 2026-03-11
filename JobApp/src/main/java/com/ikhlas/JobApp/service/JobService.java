package com.ikhlas.JobApp.service;

import com.ikhlas.JobApp.model.JobPost;
import com.ikhlas.JobApp.model.Role;
import com.ikhlas.JobApp.model.User;
import com.ikhlas.JobApp.repository.JobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ikhlas.JobApp.service.UserService;

import java.util.ArrayList;
import java.util.List;

@Service
public class JobService {

    @Autowired
    private JobRepo jobRepo;

    @Autowired
    private UserService userService;
    public void jobExists(int postId){
        JobPost existingJob=jobRepo.findById(postId).orElseThrow(()->new RuntimeException("Job not found"));
    }

    public List<JobPost> getAllJobs(){
        User user=userService.getUser();
        return jobRepo.findAll();
    }

    public JobPost getJob(int postId) {
        jobExists(postId);
        return jobRepo.findById(postId).orElse(new JobPost());
    }

    public void addJobPost(JobPost jobPost) {
        jobRepo.save(jobPost);
    }

    public void updateJob(int postId,JobPost jobPost) {
        jobExists(postId);
        jobPost.setPostId(postId);
        jobRepo.save(jobPost);
    }

    public void deleteJob(int postId) {
        jobExists(postId);
        jobRepo.deleteById(postId);
    }


    public List<JobPost> search(String keyword) {
        return jobRepo.findByPostProfileContainingIgnoreCaseOrPostDescContainingIgnoreCase(keyword,keyword);
    }
}

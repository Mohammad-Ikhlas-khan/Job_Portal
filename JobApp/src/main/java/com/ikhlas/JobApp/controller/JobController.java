package com.ikhlas.JobApp.controller;

import com.ikhlas.JobApp.model.JobPost;
import com.ikhlas.JobApp.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class JobController {

     @Autowired
     private JobService jobService;

     @GetMapping("jobPosts")
     //@ResponseBody if not using @RestController annotation
     public List<JobPost> getAllJobs(){
         return jobService.getAllJobs();
     }

    @GetMapping("/jobPost/{postId}")
    public JobPost getJob(@PathVariable int postId) {
         try{
             return jobService.getJob(postId);
         } catch (Exception e) {
             return  null;
         }
    }

    @PostMapping("/jobPost")
    @PreAuthorize("hasRole('ADMIN')")
    public void addJobPost(@RequestBody JobPost jobPost){
         jobService.addJobPost(jobPost);
    }

    @GetMapping("/jobPosts/{keyword}")
    public List<JobPost> searchByKeyword(@PathVariable("keyword") String keyword){
         return jobService.search(keyword);
    }

    @PutMapping("/jobPost/{postId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> updateJob(@PathVariable int postId, @RequestBody JobPost jobPost){
         try{
             jobService.updateJob(postId,jobPost);
             return ResponseEntity.ok("Job updated Successfully.");
         } catch (Exception e) {
             return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No job post with this id exists.");
         }
    }

    @DeleteMapping("jobPost/{postId}")
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteJob(@PathVariable int postId){
         jobService.deleteJob(postId);
    }

}

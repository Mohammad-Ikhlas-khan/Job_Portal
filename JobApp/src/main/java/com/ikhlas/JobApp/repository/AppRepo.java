package com.ikhlas.JobApp.repository;

import com.ikhlas.JobApp.model.Application;
import com.ikhlas.JobApp.model.JobPost;
import com.ikhlas.JobApp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AppRepo extends JpaRepository<Application,Integer> {
    boolean existsByUserAndJobPost(User user, JobPost jobPost);
    List<Application> findByUser_Id(int user_id);
    List<Application> findByJobPost_PostId(int post_id);

    Application findByAppIdAndUser_Id(int appId, int user_id);
}

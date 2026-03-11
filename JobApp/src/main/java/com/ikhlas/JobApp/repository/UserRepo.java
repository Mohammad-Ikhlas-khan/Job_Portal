package com.ikhlas.JobApp.repository;


import com.ikhlas.JobApp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User,Integer> {
    User findByUsername(String username);
}

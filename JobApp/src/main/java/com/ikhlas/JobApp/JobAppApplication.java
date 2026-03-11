package com.ikhlas.JobApp;

import com.ikhlas.JobApp.model.Role;
import com.ikhlas.JobApp.model.User;
import com.ikhlas.JobApp.service.UserService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class JobAppApplication {

	public static void main(String[] args) {
        SpringApplication.run(JobAppApplication.class, args);
	}

}

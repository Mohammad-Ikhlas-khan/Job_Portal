package com.ikhlas.JobApp.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Component
@Entity
public class JobPost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer postId;
    private String postProfile;
    private String postLocation;
    @Column(columnDefinition = "TEXT")
    private String postDesc;
    private Integer reqExperience;
    private List<String> postTechStack;
    @OneToMany(mappedBy = "jobPost",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Application> applications;
}

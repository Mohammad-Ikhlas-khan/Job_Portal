package com.ikhlas.JobApp.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(
        uniqueConstraints = @UniqueConstraint(columnNames = {"user_id", "post_id"})
)
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer appId;
    @NotBlank
    @Column(nullable = false)
    private String name;
    @NotBlank
    @Column(nullable = false)
    @Email
    private String email;
    @NotBlank
    @Column(nullable = false)
    @Size(max = 10)
    private String phoneNo;
    @NotBlank
    @Column(nullable = false)
    private String currLoc;
    @ElementCollection
    @CollectionTable(name = "education", joinColumns = @JoinColumn(name = "application_id"))
    private List<Education> educationList;

    @ElementCollection
    @CollectionTable(name = "work_experience", joinColumns = @JoinColumn(name = "application_id"))
    private List<WorkExp> workExpList;

    @ManyToOne
    @JsonBackReference("user-app")
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne
    @JoinColumn(name = "post_id")
    private JobPost jobPost;

}

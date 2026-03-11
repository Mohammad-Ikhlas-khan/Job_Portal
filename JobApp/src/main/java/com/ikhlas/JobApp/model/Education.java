package com.ikhlas.JobApp.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class Education {
    @NotBlank
    @Column(nullable = false)
    private String university;
    @NotBlank
    @Column(nullable = false)
    private String degree;
    @NotBlank
    @Column(nullable = false)
    private String specialization;
    @NotNull
    private Double cgpa;
    @NotNull
    private  Integer yearOfPassing;
}

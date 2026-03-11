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
public class WorkExp {
    @NotBlank
    @Column(nullable = false)
    private String compName;
    @NotBlank
    @Column(nullable = false)
    private String jobTitle;
    @NotNull
    private Integer years;
    private boolean isCurrentlyWorking;
}

package com.itra.entity.repository;


import com.itra.entity.models.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

@Transactional
public interface ProjectRepository extends JpaRepository<Project,Long> {
    @Query("select p from Project p where p.name = :name")
    Project findByName(@Param("name") String name);
}

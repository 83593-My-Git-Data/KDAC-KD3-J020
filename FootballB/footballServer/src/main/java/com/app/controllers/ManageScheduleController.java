package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.entities.Schedule;
import com.app.services.ManageScheduleService;

@RestController
public class ManageScheduleController {

    @Autowired
    private ManageScheduleService manageScheduleService;

    @GetMapping("/schedules")
    public ResponseEntity<List<Schedule>> getAllSchedules() {
        List<Schedule> schedules = manageScheduleService.getAllSchedules();
        return new ResponseEntity<>(schedules, HttpStatus.OK);
    }

    @GetMapping("/schedules/{id}")
    public ResponseEntity<Schedule> getScheduleById(@PathVariable Long id) {
        try {
            Schedule schedule = manageScheduleService.getScheduleById(id);
            return new ResponseEntity<>(schedule, HttpStatus.OK);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/schedules")
    public ResponseEntity<Schedule> createSchedule(@RequestBody Schedule schedule) {
        Schedule newSchedule = manageScheduleService.createSchedule(schedule);
        return new ResponseEntity<>(newSchedule, HttpStatus.CREATED);
    }

    @PutMapping("/schedules/{id}")
    public ResponseEntity<Schedule> updateSchedule(@PathVariable Long id, @RequestBody Schedule schedule) {
        try {
            Schedule updatedSchedule = manageScheduleService.updateSchedule(id, schedule);
            return new ResponseEntity<>(updatedSchedule, HttpStatus.OK);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/schedules/{id}")
    public ResponseEntity<Void> deleteSchedule(@PathVariable Long id) {
        try {
            manageScheduleService.deleteSchedule(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}



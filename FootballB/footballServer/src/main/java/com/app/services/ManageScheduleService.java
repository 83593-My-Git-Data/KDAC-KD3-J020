package com.app.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.app.entities.Schedule;

@Service
public interface ManageScheduleService {

    // Methods for managing schedules.
    List<Schedule> getAllSchedules();
    Schedule getScheduleById(Long id);
    Schedule createSchedule(Schedule schedule);
    Schedule updateSchedule(Long id, Schedule schedule);
    void deleteSchedule(Long id);
}
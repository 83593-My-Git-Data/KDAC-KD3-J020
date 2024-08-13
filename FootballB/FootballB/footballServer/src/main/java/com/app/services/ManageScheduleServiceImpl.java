package com.app.services;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.*;
import com.app.entities.Schedule;
import com.app.repositories.ScheduleRepository;

@Service
public class ManageScheduleServiceImpl implements ManageScheduleService {

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Override
    public List<Schedule> getAllSchedules() {
        return scheduleRepository.findAll();
    }

    @Override
    public Schedule getScheduleById(Long id) {
        Optional<Schedule> schedule = scheduleRepository.findById(id);
        if (schedule.isPresent()) {
            return schedule.get();
        } else {
            throw new ResourceNotFoundException("Schedule not found with id: " + id);
        }
    }

    @Override
    public Schedule createSchedule(Schedule schedule) {
        return scheduleRepository.save(schedule);
    }

    @Override
    public Schedule updateSchedule(Long id, Schedule schedule) {
        Optional<Schedule> existingSchedule = scheduleRepository.findById(id);
        if (existingSchedule.isPresent()) {
            schedule.setId(id);
            return scheduleRepository.save(schedule);
        } else {
            throw new ResourceNotFoundException("Schedule not found with id: " + id);
        }
    }

    @Override
    public void deleteSchedule(Long id) {
        Optional<Schedule> existingSchedule = scheduleRepository.findById(id);
        if (existingSchedule.isPresent()) {
            scheduleRepository.delete(existingSchedule.get());
        } else {
            throw new ResourceNotFoundException("Schedule not found with id: " + id);
        }
    }
}
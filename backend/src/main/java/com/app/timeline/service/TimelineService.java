package com.app.timeline.service;


import com.app.timeline.model.TimelineEvent;
import org.springframework.stereotype.Service;
import java.util.List;  

@Service
public class TimelineService {

    public List<TimelineEvent> getEvents() {
        return List.of(
            new TimelineEvent("1510", "", "Sala Silvergruva", "", ""),
            new TimelineEvent("1520", "", "Stockholms blodbad", "Stockholm", ""),
            new TimelineEvent("1544", "", "Vasatidens arvslag", "Uppsala", "")
        );
    }
}
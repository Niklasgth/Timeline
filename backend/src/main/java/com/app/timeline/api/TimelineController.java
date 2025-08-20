package com.app.timeline.api;

import com.app.timeline.model.TimelineEvent;
import com.app.timeline.service.TimelineService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class TimelineController {

    private final TimelineService service;

    public TimelineController(TimelineService service) {
        this.service = service;
    }

    @GetMapping("/api/timeline")
    public List<TimelineEvent> getTimeline() {
        return service.getEvents();
    }
}

package com.app.timeline.api;

import com.app.timeline.model.TimelineEvent;
import com.app.timeline.service.TimelineService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.app.timeline.util.TimelineFiles;
import java.util.Arrays;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class TimelineController {

    private final TimelineService service;

    public TimelineController(TimelineService service) {
        this.service = service;
    }

    // Hämta alla events
    @GetMapping("/api/timeline")
    public List<TimelineEvent> getAllTimeline() {
        return service.getEvents(); // kan behålla som fallback
    }

    // Hämta event för ett specifikt tema
    @GetMapping("/api/timeline/{theme}")
    public List<TimelineEvent> getTimelineByTheme(@PathVariable String theme) {
        return service.getEventsByTheme(theme);
    }

    @GetMapping("/api/timeline/themes")
    public List<String> getAllThemes() {
    // Returnerar listan från TimelineFiles som en lista så jag har koll på alla teman (till dropdown väljaren)
    return Arrays.asList(TimelineFiles.ALL_THEMES);
}
}

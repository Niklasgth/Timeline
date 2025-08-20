package com.app.timeline.service;

import com.app.timeline.model.TimelineEvent;
import com.app.timeline.util.TimelineFiles;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Service
public class TimelineService {

    private final ObjectMapper objectMapper = new ObjectMapper();

    /**
     * Hämtar alla events från alla teman i utilen.
     */
    public List<TimelineEvent> getEvents() {
        List<TimelineEvent> allEvents = new ArrayList<>();

        for (String theme : TimelineFiles.ALL_THEMES) {
            String filePath = TimelineFiles.getFilePath(theme);

            try (InputStream is = getClass().getResourceAsStream(filePath)) {
                if (is != null) {
                    List<TimelineEvent> events = objectMapper.readValue(is, new TypeReference<List<TimelineEvent>>() {});
                    allEvents.addAll(events);
                } else {
                    System.err.println("Kunde inte hitta fil: " + filePath);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return allEvents;
    }

    /**
     * Hämtar events för ett specifikt tema.
     */
    public List<TimelineEvent> getEventsByTheme(String theme) {
        List<TimelineEvent> events = new ArrayList<>();
        String filePath = TimelineFiles.getFilePath(theme);

        try (InputStream is = getClass().getResourceAsStream(filePath)) {
            if (is != null) {
                events = objectMapper.readValue(is, new TypeReference<List<TimelineEvent>>() {});
            } else {
                System.err.println("Kunde inte hitta fil: " + filePath);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return events;
    }
}

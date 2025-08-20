package com.timeline.timeline.model;

public class TimelineEvent {
    private String year;
    private String time;
    private String event;
    private String place;
    private String detail;

    public TimelineEvent(String year, String time, String event, String place, String detail) {
        this.year = year;
        this.time = time;
        this.event = event;
        this.place = place;
        this.detail = detail;
    }

}
;
    
package com.app.timeline.model;

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

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getEvent() {
        return event;
    }

    public void setEvent(String event) {
        this.event = event;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

}
;
    
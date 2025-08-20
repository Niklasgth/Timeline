package com.app.timeline.util;

public class TimelineFiles {

    public static final String[] ALL_THEMES = {
        "Birgitta",
        "Bergsbruk",
        "Engelbrekt",
        "Vadstena",
        "Vasa",
        "World"
    };

    //  fulla filvägar 
    public static String getFilePath(String theme) {
        return "/data/timeline_" + theme + ".json";
    }
}

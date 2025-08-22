package com.app.timeline.util;

public class TimelineFiles {


    //så jag kan lägga till fler filer med olika teamn efter behov. Temat behövs till menyer så bra särskilja.
    public static final String[] ALL_THEMES = {
        "Birgitta",
        "Bergsbruk",
        "Engelbrekt",
        "Vadstena",
        "Vasa",
        "Europa"
    };

    //  fulla filvägar ska returneras
    public static String getFilePath(String theme) {
        return "/data/timeline_" + theme + ".json";
    }
}

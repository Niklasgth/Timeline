/*Denna frontend util gör: 
Tar bort helt tomma events
Lägger till unikt id för Reacts key
Fyller i default-värden för saknade fält*/

import type { TimelineEvent } from "../components/timeline/Timeline";


export function processEvents(events: TimelineEvent[]): TimelineEvent[] {
  return events
    .filter((e) => e.year || e.event || e.detail) // ta bort helt tomma
    .map((e, index) => ({
      id: `${index}-${e.year}-${e.event}`, // unik id
      year: e.year || "Okänt år",
      time: e.time || "",
      event: e.event || "Ingen beskrivning",
      place: e.place || "Okänd plats",
      detail: e.detail || "",
    }));
}

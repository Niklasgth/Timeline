import React, { useEffect, useState } from "react";
// importerar React och hooks som behövs:
// useState för att lagra state (events, loading, error)
// useEffect för att köra kod när komponenten mountas (hämtar data från backend)

import styles from './Timeline.module.css';


// Typ för ett TimelineEvent, samma struktur som i min backend
type TimelineEvent = {
  year: string;
  time: string;
  event: string;
  place: string;
  detail: string;
};

// Skapar en React-komponent
const Timeline: React.FC = () => {

  // Lagrar alla events som hämtas
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  
  // Visa "laddar..." innan data är hämtad
  const [loading, setLoading] = useState<boolean>(true);

  // Hantera eventuella fel vid fetch
  const [error, setError] = useState<string | null>(null);

  // useEffect när komponenten mountas upp
  useEffect(() => {
    // fetch för hämta data från backend
    fetch("/api/timeline")
      .then((res) => {
        // Om status inte är ok (200-299), kastar denna ett fel
        if (!res.ok) throw new Error("Fel vid hämtning av data");
        return res.json(); // Konvertera response till JSON
      })
      .then((data: TimelineEvent[]) => {
        // Sätt in den hämtade datan i en events state
        setEvents(data);
        setLoading(false); // Laddning klar
      })
      .catch((err) => {
        // Om något gick fel, sparar jag felmeddelandet och stoppa loading
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []); // [] betyder att denna effekt bara körs en gång, när komponenten mountas

  // Om data fortfarande laddas, visa detta
  if (loading) return <p>Laddar tidslinje...</p>;

  // Om något gick fel, visa felmeddelande
  if (error) return <p>Fel: {error}</p>;

  // JSX som skriver ut tidslinjen
  return (
    <div className={styles.timelineContainer}>
  {events.map(event => (
    <div className={styles.timelineItem} key={event.year + event.event}>
      <h3 className={styles.timelineYear}>
        {event.year}{event.time && ` - ${event.time}`}
      </h3>
      <p className={styles.timelineEvent}>{event.event}</p>
      {event.place && <p className={styles.timelinePlace}>Plats: {event.place}</p>}
      {event.detail && <p className={styles.timelineDetail}>{event.detail}</p>}
    </div>
  ))}
</div>
  );
};

// Exporterar komponenten som default så vi kan importera den i App.tsx
export default Timeline;

// frontend/src/components/timeline/Timeline.tsx
import React, { useEffect, useState } from "react";
import styles from "./Timeline.module.css";
import { processEvents } from "../../utils/timelineUtils";

export type TimelineEvent = {
  id?: string;        // nyckel för React
  year: string;
  time: string;
  event: string;
  place: string;
  detail: string;
};

type TimelineProps = {
  theme: string;
};

const Timeline: React.FC<TimelineProps> = ({ theme }) => {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/timeline/${theme}`)
      .then((res) => {
        if (!res.ok) throw new Error("Fel vid hämtning av data");
        return res.json();
      })
      .then((data: TimelineEvent[]) => {
        setEvents(processEvents(data)); // lägg till id och eventuell logik
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [theme]);

  if (loading) return <p>Laddar tidslinje...</p>;
  if (error) return <p>Fel: {error}</p>;

  return (
    <div className={styles.timelineContainer}>
      {events.map((event) => (
        <div className={styles.timelineItem} key={event.id}>
          <h3 className={styles.timelineYear}>
            {event.year}
            {event.time && ` - ${event.time}`}
          </h3>
          <p className={styles.timelineEvent}>{event.event}</p>
          {event.place && <p className={styles.timelinePlace}>Plats: {event.place}</p>}
          {event.detail && <p className={styles.timelineDetail}>{event.detail}</p>}
        </div>
      ))}
    </div>
  );
};

export default Timeline;

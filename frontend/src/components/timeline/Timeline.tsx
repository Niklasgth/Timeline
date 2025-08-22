// frontend/src/components/timeline/Timeline.tsx
import React, { useEffect, useState } from "react";
import styles from "./Timeline.module.css";
import { processEvents } from "../../utils/timelineUtils";
import TimelineCard from "./timelineCard/TimelineCard";
import type { TimelineEvent } from "./Timeline.types";

type TimelineProps = {
  theme: string;
};

const Timeline: React.FC<TimelineProps> = ({ theme }) => {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openCardId, setOpenCardId] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/timeline/${theme}`)
      .then((res) => {
        if (!res.ok) throw new Error("Fel vid hämtning av data");
        return res.json();
      })
      .then((data: TimelineEvent[]) => {
        setEvents(processEvents(data));
        setLoading(false);
        setOpenCardId(null); // stänger alla kort vid nytt tema
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [theme]);

  const handleToggleCard = (id: string) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  if (loading) return <p>Laddar tidslinje...</p>;
  if (error) return <p>Fel: {error}</p>;

  return (
    <div className={styles.timelineContainer}>
      {events.map((event) => (
        <TimelineCard
          key={event.id}
          event={event}
          isOpen={openCardId === event.id}
          onToggle={() => handleToggleCard(event.id!)}
        />
      ))}
    </div>
  );
};

export default Timeline;

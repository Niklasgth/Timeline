// frontend/src/components/timeline/timelineCard/TimelineCard.tsx
import React from "react";
import styles from "./TimelineCard.module.css";
import type { TimelineEvent } from "../Timeline.types";

type TimelineCardProps = {
  event: TimelineEvent;
  isOpen: boolean;
  onToggle: () => void;
};

const TimelineCard: React.FC<TimelineCardProps> = ({ event, isOpen, onToggle }) => {
  return (
    <div className={styles.card} onClick={onToggle}>
      <div className={styles.year}>
        {event.year} {event.time && `- ${event.time}`}
      </div>
      <div className={styles.event}>{event.event}</div>
      {event.place && <div className={styles.place}>Plats: {event.place}</div>}

      {event.detail && (
        <>
          <div
            className={`${styles.detail} ${isOpen ? styles.detailVisible : ""}`}
          >
            {event.detail}
          </div>
          <div className={styles.moreHint}>
            {isOpen ? "Klicka för att dölja" : "Klicka för mer"}
          </div>
        </>
      )}
    </div>
  );
};

export default TimelineCard;

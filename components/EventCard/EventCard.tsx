"use client";
import React from "react";
import styles from "./styles.module.css";

interface EventCardProps {
  title?: string;
  date?: string;
  time?: string;
  location?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaLink?: string;
  category?: string;
  featured?: boolean;
}

function EventCard({
  title = "Event Title",
  date = "January 15, 2024",
  time = "10:00 AM",
  location = "Event Location",
  description = "Description of the event goes here. This can be a brief summary of what attendees can expect.",
  imageUrl = "https://images.unsplash.com/photo-1540575467063-178f50002cbc?w=500&h=300&fit=crop",
  imageAlt = "Event image",
  ctaText = "Learn More",
  ctaLink = "#",
  category = "Event",
  featured = false,
}: EventCardProps) {
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ""}`}>
      {category && <span className={styles.category}>{category}</span>}

      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={imageAlt} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.details}>
          {date && (
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>📅</span>
              <span className={styles.detailText}>{date}</span>
            </div>
          )}

          {time && (
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>🕐</span>
              <span className={styles.detailText}>{time}</span>
            </div>
          )}

          {location && (
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>📍</span>
              <span className={styles.detailText}>{location}</span>
            </div>
          )}
        </div>

        {description && <p className={styles.description}>{description}</p>}

        {ctaLink && ctaText && (
          <a href={ctaLink} className={styles.ctaButton}>
            {ctaText}
            <span className={styles.arrowIcon}>→</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default EventCard;

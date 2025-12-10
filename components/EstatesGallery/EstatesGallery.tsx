"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

interface Estate {
  title: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
}

interface EstatesCarouselProps {
  heading?: string;
  headingHref?: string;
  estates?: Estate[];
}

function EstatesCarousel({
  heading = "Our supported living estates",
  headingHref = "https://www.retailtrust.org.uk/supported-living",
  estates = [
    {
      title: "Marshall Estate, London",
      href: "https://www.retailtrust.org.uk/supported-living/london",
      imageUrl: "https://d45efwv59wtl7.cloudfront.net/Pictures/380x259/8/0/2/4802_marshallhall_372386.jpg",
      imageAlt: "Marshall Hall",
    },
    {
      title: "Leylands Estate, Derby",
      href: "https://www.retailtrust.org.uk/supported-living/derby",
      imageUrl: "https://d45efwv59wtl7.cloudfront.net/Pictures/380x259/4/8/7/1487_derbycourtyard_93821.jpg",
      imageAlt: "Derby Court yard",
    },
    {
      title: "Hugh Fraser Retirement Estate, Glasgow",
      href: "https://www.retailtrust.org.uk/supported-living/glasgow",
      imageUrl: "https://d45efwv59wtl7.cloudfront.net/Pictures/380x259/5/0/1/1501_crookfuroutside_664452.jpeg",
      imageAlt: "Crookfur outside",
    },
    {
      title: "Moores House, Liverpool",
      href: "https://www.retailtrust.org.uk/supported-living/liverpool",
      imageUrl: "https://d45efwv59wtl7.cloudfront.net/Pictures/380x259/4/8/4/1484_liverpooloutside_221422.jpg",
      imageAlt: "Liverpool outside",
    },
    {
      title: "Moores House, Salford",
      href: "https://www.retailtrust.org.uk/supported-living/salford",
      imageUrl: "https://d45efwv59wtl7.cloudfront.net/Pictures/380x259/4/8/5/1485_manchestergardens_212133.jpg",
      imageAlt: "Manchester gardens",
    },
    {
      title: "Spaces to hire",
      href: "https://www.retailtrust.org.uk/supported-living/spaces-to-hire",
      imageUrl: "https://d45efwv59wtl7.cloudfront.net/Pictures/380x259/4/0/4/4404_activitiesroom1_190813.jpg",
      imageAlt: "Activities Room 1",
    },
  ],
}: EstatesCarouselProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const carouselRef = React.useRef<HTMLUListElement>(null);

  const itemWidth = 270 + 16; // card width + gap

  const updateMaxScroll = () => {
    if (!carouselRef.current) return;
    const max = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
    setMaxScroll(max);
  };

  React.useEffect(() => {
    updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll);
    return () => window.removeEventListener("resize", updateMaxScroll);
  }, []);

  const scroll = (direction: "prev" | "next") => {
    if (!carouselRef.current) return;
    const newPosition =
      direction === "next"
        ? Math.min(scrollPosition + itemWidth, maxScroll)
        : Math.max(0, scrollPosition - itemWidth);
    setScrollPosition(newPosition);
    carouselRef.current.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  const isAtStart = scrollPosition === 0;
  const isAtEnd = scrollPosition >= maxScroll;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.heading}>
          <a href={headingHref} className={styles.headingLink}>
            {heading}
          </a>
        </h2>
        <div className={styles.navigationButtons}>
          <button
            className={`${styles.navButton} ${isAtStart ? styles.disabled : ""}`}
            onClick={() => scroll("prev")}
            aria-label="Previous"
            disabled={isAtStart}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            className={`${styles.navButton} ${isAtEnd ? styles.disabled : ""}`}
            onClick={() => scroll("next")}
            aria-label="Next"
            disabled={isAtEnd}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.carouselInner}>
          <ul className={styles.carouselList} ref={carouselRef}>
            {estates.map((estate, idx) => (
              <li key={idx} className={styles.carouselItem}>
                <div className={styles.itemWrapper}>
                  <div className={styles.cardContainer}>
                    <div className={styles.imageContainer}>
                      <a href={estate.href} className={styles.imageLink}>
                        <img
                          alt={estate.imageAlt}
                          loading="lazy"
                          width="380"
                          height="259"
                          src={estate.imageUrl}
                          className={styles.image}
                        />
                      </a>
                    </div>
                    <div className={styles.contentArea}>
                      <h2 className={styles.cardTitle}>
                        <a href={estate.href} className={styles.cardTitleLink}>
                          {estate.title}
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EstatesCarousel;

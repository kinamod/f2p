"use client";
import React from "react";
import styles from "./styles.module.css";

interface Estate {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  href: string;
}

const estates: Estate[] = [
  {
    id: "marshall",
    title: "Marshall Estate, London",
    image:
      "https://d45efwv59wtl7.cloudfront.net/Pictures/380x259/8/0/2/4802_marshallhall_372386.jpg",
    imageAlt: "Marshall Hall",
    href: "https://www.retailtrust.org.uk/supported-living/london",
  },
  {
    id: "derby",
    title: "Leylands Estate, Derby",
    image:
      "https://d45efwv59wtl7.cloudfront.net/Pictures/380x259/4/8/7/1487_derbycourtyard_93821.jpg",
    imageAlt: "Derby Court yard",
    href: "https://www.retailtrust.org.uk/supported-living/derby",
  },
  {
    id: "glasgow",
    title: "Hugh Fraser Retirement Estate, Glasgow",
    image:
      "https://d45efwv59wtl7.cloudfront.net/Pictures/380x259/5/0/1/1501_crookfuroutside_664452.jpeg",
    imageAlt: "Crookfur outside",
    href: "https://www.retailtrust.org.uk/supported-living/glasgow",
  },
  {
    id: "liverpool",
    title: "Moores House, Liverpool",
    image:
      "https://d45efwv59wtl7.cloudfront.net/Pictures/380x259/4/8/4/1484_liverpooloutside_221422.jpg",
    imageAlt: "Liverpool outside",
    href: "https://www.retailtrust.org.uk/supported-living/liverpool",
  },
  {
    id: "salford",
    title: "Moores House, Salford",
    image:
      "https://d45efwv59wtl7.cloudfront.net/Pictures/380x259/4/8/5/1485_manchestergardens_212133.jpg",
    imageAlt: "Manchester gardens",
    href: "https://www.retailtrust.org.uk/supported-living/salford",
  },
  {
    id: "spaces",
    title: "Spaces to hire",
    image:
      "https://d45efwv59wtl7.cloudfront.net/Pictures/380x259/4/0/4/4404_activitiesroom1_190813.jpg",
    imageAlt: "Activities Room 1",
    href: "https://www.retailtrust.org.uk/supported-living/spaces-to-hire",
  },
];

function EstatesGallery() {
  return (
    <div className={styles.galleryContainer}>
      <div className={styles.headerSection}>
        <div className={styles.headerTitle}>
          <h2 className={styles.title}>
            <a href="https://www.retailtrust.org.uk/supported-living" className={styles.titleLink}>
              Our supported living estates
            </a>
          </h2>
        </div>
        <ul className={styles.navigationControls}>
          <li className={styles.prevButton}>
            <span className={styles.screenReaderText}>Previous</span>
          </li>
          <li className={styles.nextButton}>
            <span className={styles.screenReaderText}>Next</span>
          </li>
        </ul>
      </div>

      <div className={styles.galleryWrapper}>
        <div className={styles.galleryContent}>
          <ul className={styles.estatesList}>
            {estates.map((estate) => (
              <li key={estate.id} className={styles.estateItem}>
                <div className={styles.estateCard}>
                  <div className={styles.estateCardContent}>
                    <div className={styles.imageContainer}>
                      <a href={estate.href} className={styles.imageLink}>
                        <img
                          alt={estate.imageAlt}
                          loading="lazy"
                          width="380"
                          height="259"
                          src={estate.image}
                          className={styles.estateImage}
                        />
                      </a>
                    </div>
                    <div className={styles.titleContainer}>
                      <h2 className={styles.estateName}>
                        <a href={estate.href} className={styles.estateLink}>
                          {estate.title}
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <span aria-live="assertive" aria-atomic="true" className={styles.ariaLive}></span>
        </div>
      </div>
    </div>
  );
}

export default EstatesGallery;

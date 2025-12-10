"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

function RetailTrustHeader() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header role="banner" className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logoContainer}>
          <a href="https://www.retailtrust.org.uk/" className={styles.logoLink}>
            <svg
              id="brand-logo"
              xmlns="http://www.w3.org/2000/svg"
              width="210"
              height="120"
              viewBox="0 0 210 120"
              className={styles.desktopLogo}
            >
              <rect id="Rectangle_1733" width="210" height="120" fill="none"></rect>
              <g id="rt_logo_desktop_pos">
                <path d="M39.1,112.133v-5.27l-1.563.489v-1.9l3.615-1.3v7.974h1.531v1.784H37.453v-1.784Z" transform="translate(1.872 5.202)" fill="#fff"></path>
                <path d="M46.246,108.867a2.2,2.2,0,0,1-1.226-2.015c0-1.883,1.758-2.9,3.96-2.9s3.82.892,4.036,2.635a2.207,2.207,0,0,1,0,.264,2.045,2.045,0,0,1-1.255,1.912,2.272,2.272,0,0,1,1.523,2.089c.04,2.345-2.022,3.347-4.323,3.3-2.2,0-4.338-.947-4.267-3.3A2.319,2.319,0,0,1,46.246,108.867Zm.733,2.092c0,.5.367,1.281,2.008,1.281s2.037-.767,2-1.281c0-.734-.712-1.214-2-1.214-1.152,0-1.974.448-1.989,1.214Zm2.008-2.845c1.16,0,1.758-.587,1.758-1.27,0-.5-.543-1.156-1.784-1.156-1.438,0-1.787.848-1.743,1.211.059.657.661,1.214,1.787,1.214Z" transform="translate(2.233 5.192)" fill="#fff"></path>
                <path d="M58.086,108.042H59.44c.712,0,1.784-.055,1.784-.961,0-.418-.29-1.1-1.728-1.1-.767,0-1.644.14-1.784.951H55.551c.18-2.2,2.106-2.935,3.96-2.935,1.633,0,3.556.657,3.849,2.51a2.682,2.682,0,0,1,.04.459,2.07,2.07,0,0,1-1.281,1.967,2.334,2.334,0,0,1,1.519,2.231,2.211,2.211,0,0,1-.029.433c-.334,2.117-2.51,2.521-4.183,2.521-1.9,0-3.876-.877-4.036-3.163h2.2c.11.921.947,1.226,1.853,1.226.612,0,1.9-.154,1.9-1.185,0-.367-.084-1.185-1.758-1.185H58.09Z" transform="translate(2.768 5.194)" fill="#fff"></path>
                <path d="M69.926,104.036c2.077,0,3.92.951,3.92,3.068,0,2.411-1.659,3.109-3.905,3.109-.836,0-2.008.1-2.008,1.325v.367h5.842v2.008H65.882v-2.4c0-2.624,2.121-3.207,4.058-3.207.734,0,1.769-.209,1.769-1.17,0-.826-.668-1.255-1.784-1.255-.877,0-1.8.367-1.835,1.17H66C66.106,104.792,68.028,104.036,69.926,104.036Z" transform="translate(3.293 5.196)" fill="#fff"></path>
                <path d="M85.742,114.167c-3.127,0-5.273-1.937-5.273-5.12s2.146-5.13,5.273-5.13,5.27,1.937,5.27,5.115S88.865,114.167,85.742,114.167Zm0-8.282a3.061,3.061,0,0,0-3.138,2.981c0,.061,0,.122,0,.183a3.02,3.02,0,0,0,2.883,3.152c.085,0,.17,0,.255,0a3,3,0,0,0,3.134-3.153,3.028,3.028,0,0,0-2.887-3.162C85.907,105.882,85.825,105.882,85.742,105.885Z" transform="translate(4.021 5.19)" fill="#fff"></path>
                <path d="M100.021,107.432v-3.274h2.2v9.758h-1.868L95.5,107.677l.084,3.207v3.038h-2.2v-9.765H95.25l4.921,6.352Z" transform="translate(4.667 5.202)" fill="#fff"></path>
                <path d="M113.713,113.9l-2.092-5.449L109.6,113.9h-1.784l-3.64-9.743h2.441l1.211,3.332.88,3.149,2.2-6.481h1.424l2.286,6.481.836-3.138,1.156-3.343h2.441L115.51,113.9Z" transform="translate(5.204 5.202)" fill="#fff"></path>
                <path d="M122.109,112.243l-.712,1.674h-2.342l4.378-9.758h2.37l4.378,9.758h-2.356l-.7-1.674Zm.823-1.924h3.362l-1.674-3.96Z" transform="translate(5.949 5.202)" fill="#fff"></path>
                <path d="M138.22,113.916l-2.5-3.207h-1.575v3.207H131.97v-9.758H136.6a3.309,3.309,0,0,1,3.611,3.3,2.931,2.931,0,0,1-2.261,3.068l2.679,3.237v.165Zm-4.074-5.046h2.48a1.358,1.358,0,0,0,1.436-1.274.945.945,0,0,0,0-.095,1.434,1.434,0,0,0-1.4-1.468h-2.522Z" transform="translate(6.595 5.202)" fill="#fff"></path>
                <path d="M151.761,108.965c0,2.569-1.435,4.95-4.852,4.95h-4v-9.758h4A4.49,4.49,0,0,1,151.761,108.965ZM146.91,111.9c2.117,0,2.7-1.563,2.7-2.969a2.534,2.534,0,0,0-2.7-2.819h-1.856V111.9h1.856Z" transform="translate(7.142 5.202)" fill="#fff"></path>
                <path d="M157.765,105.753c-.932,0-1.728.4-1.728,1.06,0,.892.866,1.057,2.092,1.17,1.937.18,3.751.877,3.751,3.138,0,2.161-2.008,3.079-4.114,3.079a4.817,4.817,0,0,1-4.25-1.964l1.3-1.34a3.905,3.905,0,0,0,2.969,1.365c1.185,0,1.952-.444,1.952-1.17,0-.822-.642-1.156-1.967-1.27-2.048-.18-3.9-.734-3.861-3,0-1.952,1.868-2.913,3.849-2.913a4.3,4.3,0,0,1,3.637,1.468l-1.365,1.185A3.467,3.467,0,0,0,157.765,105.753Z" transform="translate(7.672 5.19)" fill="#fff"></path>
              </g>
            </svg>
          </a>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.helplineContainer}>
            <div className={styles.helplineLabel}>
              Wellbeing helpline
              <a href="tel:0808-801-0808" className={styles.helplineLink}>
                <span className={styles.helplineNumber}>0808 801 0808</span>
              </a>
            </div>
          </div>

          <a href="https://www.retailtrust.org.uk/get-involved/ways-to-give/donate" className={styles.donateButton}>
            Donate
          </a>
        </div>

        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a href="https://account.retailtrust.org.uk/register" className={styles.navLink}>
                  Register
                </a>
              </li>
              <li className={styles.navItemWithBorder}>
                <a href="https://www.retailtrust.org.uk/sign-in" className={styles.navLink}>
                  Sign in
                </a>
              </li>
            </ul>
          </nav>

          <div className={styles.searchContainer}>
            <button
              className={styles.searchButton}
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>

            {searchOpen && (
              <form
                action="https://www.retailtrust.org.uk/searchresults"
                method="get"
                className={styles.searchForm}
              >
                <input
                  type="text"
                  name="qkeyword"
                  placeholder="Search our site"
                  className={styles.searchInput}
                  autoFocus
                />
                <button type="submit" className={styles.searchSubmit}>
                  Search
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default RetailTrustHeader;

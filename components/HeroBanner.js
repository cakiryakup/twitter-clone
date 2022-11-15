import React from "react";
import styles from "../styles/HeroBanner.module.css";

const HeroBanner = () => {
  return (
    <div className={styles.hero_banner}>
      <img
        src="../pure_white_logo.svg"
        style={{ width: "360px", height: "360px" }}
        alt="Twitter Logo"
      />
    </div>
  );
};

export default HeroBanner;

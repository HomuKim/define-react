// src/components/layout/Footer/Footer.tsx
import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles["footer-content"]}>
      <p>연락처: 010-7275-2477</p>
      <p>운영시간: 평일 06:00 - 24:00 | 주말 및 공휴일 10:00 - 20:00</p>
      <p
        id="adminLoginLink"
        className={styles.adminLoginLink}
        style={{ color: "var(--primary-red)" }}
      >
        &copy; 2024 <span style={{ textDecoration: "underline" }}>디파인더바디 피트니스</span>. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;

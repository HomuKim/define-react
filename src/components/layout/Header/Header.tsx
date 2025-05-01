// src/components/layout/Header/Header.tsx
import React from 'react';
import { useHeader } from './useHeader';
import styles from './Header.module.css';
// 라우터 사용 시 import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: '홈' },
  { to: '/event', label: '이벤트' },
  { to: '/trainers', label: '팀원소개' },
  { to: '/facilities', label: '시설소개' },
  { to: '/contact', label: '고객지원' },
];

const Header: React.FC = () => {
  useHeader(); // 메뉴 기능 동작

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <a
              href="https://www.instagram.com/define_thebody_fitness"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/logo.png" alt="Define The Body Logo" />
            </a>
            <a href="/" className={styles['logo-text']}>
              디파인더바디 피트니스
            </a>
          </div>
          <button className={styles['menu-toggle']} aria-label="메뉴 열기">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={styles['nav-links']}>
            {navLinks.map((link) => (
              <li key={link.to}>
                <a href={link.to}>{link.label}</a>
                {/* SPA에서 <Link to={link.to}>사용 */}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className={styles['menu-overlay']}></div>
    </>
  );
};

export default Header;

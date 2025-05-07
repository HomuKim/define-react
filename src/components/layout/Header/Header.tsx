import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const navLinks = [
  { to: '/', label: '홈' },
  { to: '/event', label: '이벤트' },
  { to: '/trainers', label: '팀원소개' },
  { to: '/facilities', label: '시설소개' },
  { to: '/contact', label: '고객지원' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // 메뉴 오픈/클로즈
  const handleMenuToggle = () => setMenuOpen((v) => !v);
  const handleCloseMenu = () => setMenuOpen(false);

  // body에 menu-open 클래스 추가/제거 (스크롤방지)
  React.useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

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
              <img src={logo} alt="Define The Body Logo" />
            </a>
            <Link to="/" className={styles['logo-text']}>
              디파인더바디 피트니스
            </Link>
          </div>
          <button
            className={`${styles['menu-toggle']} ${menuOpen ? styles.active : ''}`}
            aria-label="메뉴 열기"
            onClick={handleMenuToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`${styles['nav-links']} ${menuOpen ? styles.active : ''}`}>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} onClick={handleCloseMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div
        className={`${styles['menu-overlay']} ${menuOpen ? styles.active : ''}`}
        onClick={handleCloseMenu}
      />
    </>
  );
};

export default Header;

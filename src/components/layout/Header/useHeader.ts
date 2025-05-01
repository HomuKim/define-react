// src/components/layout/Header/useHeader.ts
import { useEffect } from 'react';

export function useHeader() {
  useEffect(() => {
    const menuToggle = document.querySelector<HTMLElement>('.menu-toggle');
    const navLinks = document.querySelector<HTMLElement>('.nav-links');
    const menuOverlay = document.querySelector<HTMLElement>('.menu-overlay');

    function closeMenu() {
      menuToggle?.classList.remove('active');
      navLinks?.classList.remove('active');
      menuOverlay?.classList.remove('active');
      document.body.classList.remove('menu-open');
    }

    function handleToggle() {
      menuToggle?.classList.toggle('active');
      navLinks?.classList.toggle('active');
      menuOverlay?.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    }

    menuToggle?.addEventListener('click', handleToggle);
    navLinks?.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
    menuOverlay?.addEventListener('click', closeMenu);

    return () => {
      menuToggle?.removeEventListener('click', handleToggle);
      navLinks?.querySelectorAll('a').forEach(link => {
        link.removeEventListener('click', closeMenu);
      });
      menuOverlay?.removeEventListener('click', closeMenu);
    };
  }, []);
}

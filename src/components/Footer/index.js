'use client';
import Link from 'next/link';
import styles from '../../styles/theme.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        <div className={styles['footer-links']}>
          <Link href="/about" className={styles['footer-link']}>About</Link>
          <Link href="/contact" className={styles['footer-link']}>Contact</Link>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} TaskMaster
        </div>
      </div>
    </footer>
  );
}
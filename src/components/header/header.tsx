import React from "react";
import { Logo } from "../logo/logo";
import styles from "./header.module.css";

const navLinks = [
  { label: "Как это работает", href: "/how" },
  { label: "Сертификаты", href: "/certificates" },
  { label: "Доставка", href: "/delivery" },
  { label: "Для бизнеса", href: "/business" },
  { label: "О нас", href: "/faq" },
];

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.label} className={styles.navItem}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

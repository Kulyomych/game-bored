import React from "react";
import styles from "./footer.module.css";
import { Logo } from "../logo/logo";
import { VkIcon } from "../vk-icon/vk-icon";
import { TgIcon } from "../tg-icon/tg-icon";

const links = [
  { label: "О нас", href: "/about" },
  { label: "Контакты", href: "/contacts" },
  { label: "Политика конфиденциальности", href: "/privacy-policy" },
];

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.links}>
          {links.map((link) => (
            <a key={link.label} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </div>
        <div className={styles.social}>
          <TgIcon />
          <VkIcon />
        </div>
      </div>
    </footer>
  );
};

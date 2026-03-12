import React from "react";
import styles from "./hero-section.module.css";

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Создай игру
            <br />
            со своими фото
            <br />
            за 10 минут
          </h1>
          <span className={styles.description}>
            Персонализируй настольную игру для друзей и близких
          </span>
          <button className={styles.button}>Выбрать игру</button>
        </div>
        <div className={styles.image} aria-hidden="true" />
      </div>
    </section>
  );
};

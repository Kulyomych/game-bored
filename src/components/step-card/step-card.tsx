import React from "react";
import styles from "./step-card.module.css";
import { StarIcon } from "../star-icon/star-icon";

type StepCardProps = {
  step: number;
  title: string;
  description: string;
  color: string;
};

export const StepCard: React.FC<StepCardProps> = ({
  step,
  title,
  description,
  color,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.container}>
        <div className={styles.icon} style={{ color: color }}>
          <StarIcon />
          <span>{step}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};

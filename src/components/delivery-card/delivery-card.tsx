import React from "react";
import styles from "./delivery-card.module.css";

type DeliveryCardProps = {
  text: string;
  img: string;
};

export const DeliveryCard: React.FC<DeliveryCardProps> = ({ text, img }) => {
  return (
    <article className={styles.card}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={img} alt="" />
        </div>
        <p className={styles.description}>{text}</p>
      </div>
    </article>
  );
};

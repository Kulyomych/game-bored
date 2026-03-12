import React from "react";
import styles from "./delivery-section.module.css";
import { DeliveryCard } from "../delivery-card/delivery-card";

const deliveryCardsData = [
  {
    text: "Доставляем по всей России через проверенные службы доставки",
    img: "src/assets/icons/bike.svg",
  },
  {
    text: "Срок изготовления: 3-5 дней",
    img: "src/assets/icons/watch.svg",
  },
];

export const DeliverySection: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Доставка</h2>
      <div className={styles.grid}>
        {deliveryCardsData.map((card) => (
          <DeliveryCard key={card.text} text={card.text} img={card.img} />
        ))}
      </div>
    </section>
  );
};

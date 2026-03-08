import type React from "react";
import styles from "./game-card.module.css";

type GameCardProps = {
  id?: string;
  img?: string;
  title: string;
  price?: number;
  oldPrice?: number;
};

export const GameCard: React.FC<GameCardProps> = (props) => {
  const { id, img, title, price, oldPrice } = props;
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <div className={styles.imageBlock}></div>
        <div className={styles.buttonBlock}>
          <div className={styles.info}>
            <h3>{title}</h3>
            <div className={styles.price}>
              <span>2500 р.</span>1790 р.<span></span>
            </div>
          </div>
          <button className={styles.cardButton}>Добавить в корзину</button>
        </div>
      </div>
    </article>
  );
};

import React from "react";
import styles from "./game-card.module.css";
import type { Game } from "../../types/game";

type GameCardProps = {
  data: Game;
  className?: string;
  onSelect?: () => void;
};

export const GameCard: React.FC<GameCardProps> = ({
  data,
  className,
  onSelect,
}) => {
  const { title, oldPrice, price, img } = data;
  return (
    <article className={`${styles.card} ${className}`} onClick={onSelect}>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={img} alt={title} loading="lazy" />
        </div>

        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.prices}>
            <span className={styles.oldPrice}>{oldPrice} р.</span>
            <span className={styles.newPrice}>{price} р.</span>
            <div />
          </div>
        </div>
      </div>
    </article>
  );
};

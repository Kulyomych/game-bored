import React from "react";
import styles from "./steps-section.module.css";
import { StepCard } from "../step-card/step-card";
import arrowRightIcon from "../../assets/icons/arrow-right.svg";
import doubleArrowRightIcon from "../../assets/icons/double-arrow-right.svg";

const steps = [
  {
    step: 1,
    title: "Выбери игру",
    description: "Из каталога доступных вариантов",
    color: "#F16393",
  },
  {
    step: 2,
    title: "Загрузи фото",
    description: "Добавь свои фотографии в конструктор",
    color: "#00FF7F",
  },
  {
    step: 3,
    title: "Получи заказ",
    description: "Доставим готовую игру до двери",
    color: "#F8981D",
  },
];

export const StepsSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Как это работает?</h2>
          <span className={styles.subtitle}>Спойлер: просто и весело</span>
        </div>
        <div className={styles.cards}>
          {steps.map(({ step, title, description, color }, index) => (
            <React.Fragment key={step}>
              <StepCard
                step={step}
                title={title}
                description={description}
                color={color}
              />
              {index < steps.length - 1 && (
                <img
                  className={styles.arrow}
                  src={index === 1 ? doubleArrowRightIcon : arrowRightIcon}
                  alt=""
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

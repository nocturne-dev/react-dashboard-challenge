import React from "react";
import styles from "./Card.module.scss";

const Card: React.FC<{ data: any }> = (props) => {
  return (
    <div className={`${styles.card} ${styles[`card-${props.data.class}`]}`}>
      {props.data.platform && (
        <div className={styles[`card__${props.data.platform.class}`]}>
          <img
            className={styles[`card__${props.data.platform.icon.class}`]}
            src={props.data.platform.icon.src}
            alt={props.data.platform.icon.alt}
          />

          <div
            className={styles[`card__${props.data.platform.username.class}`]}
          >
            {props.data.platform.username.text}
          </div>
        </div>
      )}

      {props.data.followers && (
        <div className={styles[`card__${props.data.followers.class}`]}>
          <div
            className={`${
              styles[`card__${props.data.followers.count.class}`]
            } ${
              styles[
                `card__${props.data.followers.count.class}--${props.data.followers.count.modifier}`
              ]
            }`}
          >
            {props.data.followers.count.text}
          </div>

          <div className={styles[`card__${props.data.followers.label.class}`]}>
            {props.data.followers.label.text}
          </div>
        </div>
      )}

      {props.data.change && (
        <div
          className={`${styles[`card__${props.data.change.class}`]} ${
            styles[
              `card__${props.data.change.class}--${props.data.change.modifier}`
            ]
          }`}
        >
          <img
            src={props.data.change.icon.src}
            alt={props.data.change.icon.alt}
          />

          <div className={styles[`card__${props.data.change.number.class}`]}>
            {props.data.change.number.text}
          </div>
        </div>
      )}

      {props.data.overview && (
        <React.Fragment>
          <div
            className={styles[`card__${props.data.overview.subtitle.class}`]}
          >
            {props.data.overview.subtitle.text}
          </div>

          <img
            src={props.data.overview.icon.src}
            alt={props.data.overview.icon.alt}
          />

          <div
            className={`${styles[`card__${props.data.overview.count.class}`]} ${
              styles[
                `card__${props.data.overview.count.class}--${props.data.overview.count.modifier}`
              ]
            }`}
          >
            {props.data.overview.count.text}
          </div>

          <div
            className={`${
              styles[`card__${props.data.overview.change.class}`]
            } ${
              styles[
                `card__${props.data.overview.change.class}--${props.data.overview.change.modifier}`
              ]
            }`}
          >
            <img
              src={props.data.overview.change.icon.src}
              alt={props.data.overview.change.icon.alt}
            />

            <div
              className={
                styles[`card__${props.data.overview.change.number.class}`]
              }
            >
              {props.data.overview.change.number.text}
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Card;

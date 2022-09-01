import { ChangeEvent, useContext } from "react";
import { ModeContext } from "../../../context/mode-context";
import styles from "./Toggle.module.scss";

const Toggle = () => {
  const ctx = useContext(ModeContext);

  const themeSwitchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    ctx.switchMode(value);
  };

  return (
    <fieldset
      className={styles.toggle}
      aria-label="theme toggle"
      role="radiogroup"
    >
      <label htmlFor="dark">
        Dark Mode <span className="visually-hidden">On</span>
      </label>

      <div className={styles["toggle__wrapper"]}>
        <input
          type="radio"
          name="theme"
          value="dark"
          id={styles.dark}
          onChange={themeSwitchHandler}
        />
        <input
          type="radio"
          name="theme"
          value="light"
          id={styles.light}
          onChange={themeSwitchHandler}
        />

        <span
          aria-hidden="true"
          className={styles["toggle__background"]}
        ></span>
        <span
          aria-hidden="true"
          className={`${styles["toggle__button"]} ${
            styles[`toggle__button--${ctx.mode}`]
          }`}
        ></span>
      </div>

      <label className="visually-hidden" htmlFor="light">
        Dark Mode Off
      </label>
    </fieldset>
  );
};

export default Toggle;

import React from "react";
import Container from "../ui/container/Container";
import Toggle from "../ui/toggle/Toggle";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles["header__grid"]}>
          <div className={styles["header__title"]}>
            <h1>Social Media Dashboard</h1>
            
            <span className={styles["header__subtitle"]}>
              Total Followers: 23,004
            </span>
          </div>

          <Toggle />
        </div>
      </Container>
    </header>
  );
};

export default Header;

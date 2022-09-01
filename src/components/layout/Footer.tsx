import styles from "./Footer.module.scss";
import Container from "../ui/container/Container";
import React from "react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <React.Fragment>
          Challenge by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.frontendmentor.io?ref=challenge"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/nocturne-dev"
          >
            Frankii Tang
          </a>
          .
        </React.Fragment>
      </Container>
    </footer>
  );
};

export default Footer;

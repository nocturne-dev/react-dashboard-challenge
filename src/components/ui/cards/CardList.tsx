import React from "react";
import Container from "../container/Container";
import Card from "./Card";
import styles from "./CardList.module.scss";

const CardList: React.FC<{ title?: string; data: any }> = (props) => {
  return (
    <Container>
      <React.Fragment>
        {props.title && <h2>{props.title}</h2>}

        <section className={`${styles["card-list"]}`}>
          {props.data.map((d: any) => (
            <Card key={d.id} data={d} />
          ))}
        </section>
      </React.Fragment>
    </Container>
  );
};

export default CardList;

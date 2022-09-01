import React from "react";
import styles from "./App.module.scss";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import CardList from "./ui/cards/CardList";

import { dataDashboard, dataOverview } from "../data/data";

const overviewTitle = `Overview - Today`;

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className={styles.main}>
        <CardList data={dataDashboard} />
        <CardList title={overviewTitle} data={dataOverview} />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;

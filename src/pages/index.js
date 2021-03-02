import * as React from "react";
import { Helmet } from "react-helmet";
import { globalHistory } from "@reach/router";

import Template from "../components/Template";
import News from "../components/News";
import NewsYAML from "../content/news.yaml";

import styles from "./index.module.scss";

const IndexPage = ({}) => {
  const location = globalHistory.location;
  const pageLang = !globalHistory.location.pathname.includes("/fr")
    ? "en"
    : "fr";

  const show = (lang) => {
    if (lang === "en" && pageLang === "en") return { display: "block" };
    else if (lang === "fr" && pageLang === "fr") return { display: "block" };
    else return { display: "none" };
  };

  return (
    <Template location={location}>
      <Helmet>
        <title>{`Charih / ${pageLang === "en" ? "Home" : "Accueil"}`}</title>
      </Helmet>
      <img className={styles.headshot} src="/charih.png" />
      <div className={styles.name}>Francois Charih</div>
      <div className={styles.shortBio} style={show("en")}>
        PhD candidate in computational biochemistry @ Carleton University,
        songwriter, son, friend, cancer survivor, and proud Canadian 🇨🇦.
      </div>
      <div className={styles.shortBio} style={show("fr")}>
        Doctorant en biochimie computationelle @ Université Carleton,
        auteur-compositeur-interprète, fils, ami, survivant du cancer et fier
        Canadien 🇨🇦.
      </div>
      <div className={styles.social}>
        <a>Email</a>
        <a>Scholar</a>
        <a>Github</a>
      </div>
      <hr className={styles.line} />
      <div className={styles.newsContainer}>
        {NewsYAML.map((news) => (
          <News news={news} lang={pageLang} />
        ))}
      </div>
    </Template>
  );
};

export default IndexPage;

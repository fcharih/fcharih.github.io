import * as React from "react";
import { Helmet } from "react-helmet";
import { globalHistory } from "@reach/router";

import Template from "../components/Template";

import styles from "./blog.module.scss";

const BlogPage = ({ location }) => {
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
        <title>{`Charih / ${pageLang === "en" ? "Blog" : "Blog"}`}</title>
      </Helmet>
      <div className={styles.container}>
        <h1>Blog</h1>
        <div style={{ textAlign: "center" }}>
          <div style={show("fr")}>S'il-vous-plait repasser plus tard!</div>
          <div style={show("en")}>Please come back later!</div>
        </div>
      </div>
    </Template>
  );
};

export default BlogPage;

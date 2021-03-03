import React from "react";
import { Link } from "gatsby";
import { globalHistory } from "@reach/router";

import styles from "./Header.module.scss";

export default ({}) => {
  const location = globalHistory.location;
  const pageLang = globalHistory.location.pathname.includes("/fr")
    ? "fr"
    : "en";

  if (pageLang === "en") {
    return (
      <nav className={styles.container}>
        <Link to="/">Home</Link>
        <Link to="/research">Research</Link>
        <Link to="/music">Music</Link>
        <Link to="/cv">CV</Link>
        <Link to="/blog">Blog</Link>
        {/*<Link to={`/fr${location.pathname}`}>🇫🇷 Français</Link*/}
      </nav>
    );
  } else {
    return (
      <nav className={styles.container}>
        <Link to="/fr/">Accueil</Link>
        <Link to="/fr/research">Recherche</Link>
        <Link to="/fr/music">Musique</Link>
        <Link to="/fr/cv">CV</Link>
        <Link to="/fr/blog">Blog</Link>
        {/*<Link to={location.pathname.replace("/fr", "")}>🇬🇧 English</Link>*/}
      </nav>
    );
  }
};

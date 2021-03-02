import React from "react";

import Showdown from "showdown";

import styles from "./News.module.scss";

export default ({ news, lang }) => {
  const converter = new Showdown.Converter();

  return (
    <div>
      <div className={styles.newsTitle}>
        {lang === "en" ? news.title : news.title_fr}
      </div>
      <div className={styles.date}>
        {lang === "en" ? news.date : news.date_fr}
      </div>
      <div
        className={styles.date}
        dangerouslySetInnerHTML={{
          __html: converter.makeHtml(
            lang === "en" ? news.content : news.content_fr
          ),
        }}
      />
    </div>
  );
};

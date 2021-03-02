import React from "react";

import styles from "./Publication.module.scss";

export default ({ index, data }) => {
  const title = data.url ? <a href={data.url}>{data.title}</a> : data.title;
  const pages = data.pages ? ` ${data.pages}` : "";
  const number = `${data.issue ? ` ${data.issue}` : ""}${
    data.volume ? `(${data.volume})` : ""
  }`;
  const authors = (
    <span
      dangerouslySetInnerHTML={{
        __html: data.authors.replace(
          "F. Charih",
          '<span style="text-decoration: underline; font-weight: bold;">F. Charih</span>'
        ),
      }}
    ></span>
  );
  const comment = data.comment ? ` (${data.comment})` : "";
  if (data.type === "journal") {
    return (
      <div className={styles.publication}>
        <b>[{index}]</b> {authors}. {data.title} ({data.year}).{" "}
        <i>{data.publisher}</i>
        {number}
        {pages}.{comment} {data.url && <a href={data.url}>[Paper]</a>}
      </div>
    );
  } else {
    return (
      <div className={styles.publication}>
        <b>[{index}]</b> {authors}. {data.title}. <i>{data.conference}</i>,{" "}
        {data.location} {data.date}.{comment}{" "}
        {data.url && <a href={data.url}>[Paper]</a>}{" "}
        {data.slides && <a href={`/static/slides/${data.slides}`}>[Slides]</a>}
      </div>
    );
  }
};

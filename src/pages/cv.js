import * as React from "react";
import { Helmet } from "react-helmet";
import { globalHistory } from "@reach/router";

import Template from "../components/Template";
import Publication from "../components/Publication";

import PublicationsYAML from "../content/cv/publications.yaml";
import WebToolsYAML from "../content/cv/webtools.yaml";

import styles from "./cv.module.scss";

const CVPage = ({ location }) => {
  const pageLang = !globalHistory.location.pathname.includes("/fr")
    ? "en"
    : "fr";

  const show = (lang) => {
    if (lang === "en" && pageLang === "en") return { display: "block" };
    else if (lang === "fr" && pageLang === "fr") return { display: "block" };
    else return { display: "none" };
  };

  const journalPublications = PublicationsYAML.filter(
    (pub) => pub.type === "journal"
  );

  const conferencePublications = PublicationsYAML.filter(
    (pub) => pub.type === "conference"
  );

  return (
    <Template location={location}>
      <Helmet>
        <title>{`Charih / ${pageLang === "en" ? "CV" : "CV"}`}</title>
      </Helmet>
      <div className={styles.container}>
        <h1>CV</h1>
        <div style={show("en")}>
          <p>
            Feel free to consult a <a href="/charih_cv.pdf">PDF version</a> of
            my CV.
          </p>
        </div>
        <div style={show("fr")}>
          <p>
            Vous pouvez consulter mon CV en{" "}
            <a href="/charih_cv.pdf">version PDF</a>.
          </p>
        </div>
        <h2>Publications</h2>
        <div className="publication-group">
          <h3 style={show("en")}>
            Peer-reviewed journal articles ({journalPublications.length})
          </h3>
          <h3 style={show("fr")}>
            Articles de revues savantes ({journalPublications.length})
          </h3>
          {journalPublications.map((pub, i) => (
            <Publication
              index={`J${journalPublications.length - i}`}
              data={pub}
            />
          ))}
        </div>

        <div className="publication-group">
          <h3 style={show("en")}>
            Conference proceedings ({conferencePublications.length})
          </h3>
          <h3 style={show("fr")}>
            Compte-rendus de conférences ({conferencePublications.length})
          </h3>
          {conferencePublications.map((pub, i) => (
            <Publication
              index={`C${conferencePublications.length - i}`}
              data={pub}
            />
          ))}
        </div>

        <h2 style={show("en")}>Web tools</h2>
        <h2 style={show("fr")}>Outils web</h2>
        <div className="publication-group">
          {WebToolsYAML.map((tool) => (
            <div className="publication">
              <a href={tool.url}>
                <div style={{ fontWeight: "bold" }}>{tool.title}</div>
              </a>
              <div>{tool.description}</div>
            </div>
          ))}
        </div>
      </div>
    </Template>
  );
};

export default CVPage;

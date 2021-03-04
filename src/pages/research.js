import * as React from "react";
import { Helmet } from "react-helmet";
import { globalHistory } from "@reach/router";

import Template from "../components/Template";

import styles from "./research.module.scss";

const ResearchPage = ({ location }) => {
  console.log(globalHistory.location.pathname);
  const pageLang = !globalHistory.location.pathname.includes("/fr")
    ? "en"
    : "fr";

  console.log(pageLang);
  const show = (lang) => {
    if (lang === "en" && pageLang === "en") return { display: "block" };
    else if (lang === "fr" && pageLang === "fr") return { display: "block" };
    else return { display: "none" };
  };

  return (
    <Template location={location}>
      <Helmet>
        <title>{`Charih / ${
          pageLang === "en" ? "Research" : "Recherche"
        }`}</title>
      </Helmet>
      <h1 style={show("fr")}>Recherche</h1>
      <h1 style={show("en")}>Research</h1>
      <div className={styles.introduction} style={show("en")}>
        <h2>In a nutshell</h2>
        <p>
          I am currently a PhD student in Electrical and Computer Engineering
          specializing in computational biochemistry. I am particularly
          interested in applications of{" "}
          <em>artificial intelligence (AI)/machine learning (ML)</em> to study
          and modify lysine methylation. I have also developed an interest and
          expertise in <em>high performance computing</em> throughout the past
          years. My thesis advisors are Profs.{" "}
          <a href="http://www.sce.carleton.ca/faculty/green/green.php">
            James R. Green
          </a>{" "}
          (Systems and Computer Engineering) and{" "}
          <a href="https://carleton.ca/biology/people/kyle-biggar/">
            Kyle K. Biggar
          </a>{" "}
          (Biochemistry).
        </p>
        <p>
          Beyond my thesis work, I am also interested in how AI/ML can be
          applied to further our understanding of the pathophysiology and
          clinical evolution of{" "}
          <a href="https://en.wikipedia.org/wiki/Amyotrophic_lateral_sclerosis">
            amyotrophic lateral sclerosis (ALS)
          </a>
          , an understudied illness of the motoneurons that has eluded us for
          way too long.
        </p>
      </div>
      <div className={styles.currentResearch} style={show("en")}>
        <h2>Thesis work</h2>
        <p>
          As part of my thesis work, I apply AI/ML tools to the study of lysine
          methylation. My research can be subdivided into three research themes:
          <ol className={styles.thesisTopics}>
            <li>
              <b>
                Proteome-wide identification of the lysine methylation sites
              </b>
              <br />
              Our cells express over 20,000 proteins, a large portion of which
              are substrates in a set of chemical reactions called{" "}
              <em>post-translational modifications</em> (phosphorylation,
              acetylation, methylation, etc.) These reactions can modulate the
              function, stability and localization within the cell. I aim to
              develop new machine learning approaches to answer questions such
              as:{" "}
              <i>
                What proteins are methylated? How does this relate to other
                modifications? What are the implications of this modification?
              </i>
            </li>
            <li>
              <b>
                Identifying the features that underpin the specificity of lysine
                methyltransferases for their substrate
              </b>
              <br />
              Lysine methyltransferase enzymes (KMTs) which carry out the
              reaction are specific; i.e. they each only modify a specific
              subset of proteins. By combining <i>in vitro</i> and{" "}
              <i>in silico</i> methods, I seek to understand the features that
              associate a KMT to its substrates. Once this is achieved, we hope
              to be able to identify new substrates for a given KMT. This will
              have broad implications for drug development.
            </li>
            <li>
              <b>
                <i>In silico</i> design of lysine methyltransferase inhibitors
              </b>
              <br />I am developing a novel algorithm for peptide inhibitor
              design. We are hopeful that interleaving the algorithm with{" "}
              <em>peptide array</em> experiments will significantly accelerate
              the discovery of active peptides capable of specifically
              modulating the activity of KMTs (and KDMs). Overactive KMTs/KDMs
              are involved in a number of cancers, and these peptides could
              supplement existing therapies and improve their efficacy.
            </li>
          </ol>
        </p>
        <img className={styles.abstractImage} src="/img/thesis-summary.png" />
      </div>
      <div className={styles.pastResearch} style={show("en")}>
        <h2>Previous work</h2>
        <p>
          <ol className={styles.previousTopics}>
            <li>
              <b>Structural biology</b>
              <br />
              Under the supervision of Prof.{" "}
              <a href="https://med.uottawa.ca/bmi/en/people/couture-jean-francois">
                Jean-François Couture
              </a>
              , I completed my undergraduate thesis on the structural
              characterisation of the Fur (Ferric Uptake Regulator) protein in{" "}
              <i>Campylobacter jejuni</i> a pathogenic agent responsible for
              numerous cases of gastroenteritis. I crystallized the protein and
              built a draft model of the structure, which was further refined by
              Prof. Couture. This research was published in the scientific
              journal{" "}
              <a href="https://www.nature.com/articles/s41598-018-25157-6">
                Scientific Reports
              </a>
              .
            </li>
            <li>
              <b>Biomedical informatics</b>
              <br />I have previously worked in health informatics. My master's
              thesis work focused on the ML-assisted classification of
              audiograms to facilitate their interpretation by non-experts. My
              thesis is available{" "}
              <a href="https://curve.carleton.ca/873548bb-f077-49d4-a5a6-9a69fddf1284">
                here
              </a>
              .
            </li>
          </ol>
        </p>
      </div>
      {/* ================= FRANCAIS ==================================== */}
      <div className={styles.introduction} style={show("fr")}>
        <h2>En bref</h2>
        <p>
          Je suis présentement doctorant en génie électrique et informatique,
          quoique je me spécialise en <em>biologie computationnelle</em>. Je
          m'intéresse tout particulièrement aux applications de{" "}
          <em>l'apprentissage automatique</em> dans l'étude de la méthylation
          des lysines. Dans le cadre de mes projets de recherches, j'ai aussi
          dévelopé des compétences en{" "}
          <em>calcul haute performance (high performance computing)</em>. Mes
          directeurs de thèse sont les professeurs{" "}
          <a href="http://www.sce.carleton.ca/faculty/green/green.php">
            James R. Green
          </a>{" "}
          (département de génie des systèmes et informatique) et{" "}
          <a href="https://carleton.ca/biology/people/kyle-biggar/">
            Kyle K. Biggar
          </a>{" "}
          (département de biochimie).
        </p>
        <p>
          Je m'intéresse aussi, au-delà de mon sujet principal de thèse, aux
          applications de l'intelligence artificielle et de l'apprentissage
          automatique à la compréhension de l'évolution pathophysiologique et
          clinique de la <em>sclérose latérale amyotrophique</em>, une maladie
          grave des neurones moteurs qui nous échappe depuis beaucoup trop
          longtemps.
        </p>
      </div>
      <div className={styles.currentResearch} style={show("fr")}>
        <h2>Travaux de thèse</h2>
        <p>
          Dans le cadres de mes travaux de thèse, je m'intéresse aux
          applications de l'IA pour l'étude de la méthylation des lysines. Mes
          travaux se déclinent en trois axes de recherche:
          <ol className={styles.thesisTopics}>
            <li>
              <b>
                Identification du méthylome des lysines à l'échelle du protéome
                avec l'IA
              </b>
              <br />
              Nos cellules expriment au-delà de 20,000 différentes protéines qui
              sont sujettes à des modifications chimiques appellées{" "}
              <em>modifications post-traductionnelles</em> (phosphorylation,
              acétylation, méthylation, etc.) qui altèrent leur fonction, leur
              stabilité et leur localisation dans la cellule.{" "}
              <i>
                Quelles protéines sont sujettes à la méthylation sur leurs
                lysines? Quel est le lien entre la méthylation et la fonction?
              </i>
            </li>
            <li>
              <b>
                Élucidation des facteurs régissant la spécificité des
                méthyltransférases pour leur substrat
              </b>
              <br />
              Les méthyltransférases, responsable pour la modification chimique
              des protéines, sont sélectives. Avec des expériences en
              laboratoire et <i>in silico</i>, je cherche à comprendre ce qui
              confère aux méthyltransférases leur sélectivité pour leur
              substrat. Une fois cet objectif atteint, nous espérons identifier
              de nouveau substrats pour un ensemble de méthyltransférases.
            </li>
            <li>
              <b>
                Dévelopement d'inhibiteurs de méthyltransférases{" "}
                <i>in silico</i>
              </b>
              <br />
              Je cherche à développer un algorithme permettant de développer des
              inhibiteurs peptidiques pouvant altérer la fonction des
              méthyltransférases (et déméthylases). De nombreux cancers
              impliquent une malfonction de ces enzymes qui deviennent « trop
              actives », or, ces peptides pourraient supplémenter les traitments
              actuels pour ces cancers.
            </li>
          </ol>
        </p>
        <img className={styles.abstractImage} src="/static/abstract.png" />
      </div>
      <div className={styles.pastResearch} style={show("fr")}>
        <h2>Travaux antérieurs</h2>
        <p>
          <ol className={styles.previousTopics}>
            <li>
              <b>Biologie structurale</b>
              <br />
              Sous la supervision du professeur{" "}
              <a href="https://med.uottawa.ca/bmi/en/people/couture-jean-francois">
                Jean-François Couture
              </a>
              , j'ai complété ma thèse de premier cycle sur la caractérisation
              structurale de la protéine Fur (Ferric uptake regulator) dans C.
              jejuni. J'ai participé à la résolution de la structure de la
              protéine. Les résultats des travaux auxquels j'ai contribué ont
              été publiés dans la revue scientifique{" "}
              <a href="https://www.nature.com/articles/s41598-018-25157-6">
                Scientific Reports
              </a>
              .
            </li>
            <li>
              <b>Informatique biomédicale</b>
              <br />
              J'ai complété des travaux en informatique biomédicale dans le
              cadre de mon projet de maîtrise. Je me suis intéressé à la
              classification automatique de courbes audiométriques pour
              faciliter leur interprétation par des professionnels de la santé
              non-spécialistes. Je vous invite à consulter mon mémoire de
              maîtrise (en anglais){" "}
              <a href="https://curve.carleton.ca/873548bb-f077-49d4-a5a6-9a69fddf1284">
                disponible ici
              </a>
              .
            </li>
          </ol>
        </p>
      </div>
    </Template>
  );
};

export default ResearchPage;

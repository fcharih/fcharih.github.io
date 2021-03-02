import * as React from "react";
import { Helmet } from "react-helmet";
import { globalHistory } from "@reach/router";

import Template from "../components/Template";

import MusicYAML from "../content/music.yaml";

import styles from "./music.module.scss";

const MusicPage = ({ location }) => {
  const [song, setSong] = React.useState(MusicYAML[0]);
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
        <title>{`Charih / ${pageLang === "en" ? "Music" : "Musique"}`}</title>
      </Helmet>
      <div className={styles.container}>
        <h1 style={show("en")}>Music</h1>
        <h1 style={show("fr")}>Musique</h1>
        <div style={show("fr")}>
          Je suis un amoureux de la musique. J'irais jusqu'à dire qu'elle fut
          mon premier amour. Je suis fan de musiques en tous genres, mais
          j'affectionne particulièrement la musique folk, rock, électronica et
          le pop indépendant. Voici quelques albums qui me font vibrer
          présentement 🔥🔥🔥 :
        </div>
        <div style={show("en")}>
          I love music. It is an essential part of my life. I'm particularly
          fond of folk, rock, electronica and indie pop music, although I will
          listen to anything. Here are some tasty records that I believe are
          🔥🔥🔥 :
        </div>
        <ul className="song-list">
          {MusicYAML.map((song) => (
            <li onClick={() => setSong(song)}>
              <a>
                {song.title} ({song.year}) by {song.artist}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.embedContainer}>
          <iframe
            src={"https://www.youtube.com/embed/" + song.url}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div style={show("fr")}>
          Dans mes temps libres, j'aime chanter et m'accompagner avec ma
          guitare. Je n'ai pas la prétention d'être un virtuose, mais la musique
          est un échappatoire sans égal pour moi. Je suis reconnaissant d'avoir
          été encouragé à développer ma créativité par le biais de la musique.
          Je compose des morceaux (en anglais et en français) depuis
          l'adolescence. Vous pouvez écouter quelques maquettes en attendant
          l'EP Hopeful Fool que je suis en train de préparer.
        </div>
        <div style={show("en")}>
          In my spare times, I enjoy playing the guitar and singing. I am by no
          means a virtuoso, but it gets me through the rough times, and I am so
          thankful to have been encouraged to pick it up as a teenager. I
          started songwriting in my late teens. You can listen to demos for my
          debut EP titled Hopeful Fool.
        </div>

        <div className={styles.bandcampContainer}>
          <iframe
            style={{ border: "0", width: "300px", height: "250px" }}
            src="https://bandcamp.com/EmbeddedPlayer/album=3297154865/size=large/bgcol=ffffff/linkcol=f171a2/artwork=small/transparent=true/"
            seamless
          >
            <a href="http://cherimusic.bandcamp.com/album/hopeful-fool-demos">
              Hopeful Fool (Demos) by Chéri
            </a>
          </iframe>
        </div>
      </div>
    </Template>
  );
};

export default MusicPage;

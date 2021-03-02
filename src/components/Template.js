import React from "react";
import { globalHistory } from "@reach/router";

import Header from "./Header";
import styles from "./Template.module.scss";

export default ({ pageName, children }) => {
  const location = globalHistory.location;
  return (
    <div className={styles.container}>
      <Header location={location} />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

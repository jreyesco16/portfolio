import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.body}>
      <h2>
        <strong>Projects</strong>
      </h2>
      <br />
      {/* MARKET */}
      <span>
        Market (<strong>Svelte</strong> + <strong>Rust</strong>) Feb 2021 -
        Current
        <br />
      </span>
      <br />
      {/* YAHTZEE ONLINE */}
      <span>
        Yahtzee Online (<strong>Java</strong>) Jan 2021 - May 2021
        <br />
      </span>
      <br />
      <span>
        Regular Phil (<strong>React + Django</strong> August 2019 - May 2020)
        <br />
      </span>
      <br />
      {/* INVOICE SYSTEM */}
      <span>
        Invoice System (<strong>Java</strong>) August 2018 - December 2018
      </span>
      <br />
    </div>
  );
};

export default Projects;

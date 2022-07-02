import { Space } from "antd";
import Image from "next/image";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <div className={styles.body}>
      <h2>
        <strong>Experience</strong>
      </h2>
      <Image
        src={"/freewater-logo.png"}
        height={50}
        width={180}
        layout={"fixed"}
        alt={"freewater logo"}
      />
      <br />
      <span>
        <strong>Frontend Developer</strong>: <strong>Freewater</strong>
        <br />
        June 2022 - Current
      </span>
      <br /> <br />
      <Image
        src={"/snyders-logo.png"}
        height={70}
        width={200}
        layout={"fixed"}
        alt={"snyders salvage logo"}
      />
      <br />
      <span>
        <strong>Software Developer</strong>: <strong>Snyders Salvage</strong>
        <br />
        June 2021 - Current
      </span>
      <br /> <br />
      <a href="https://www.youtube.com/watch?v=czUheX_SWfk">
        <Image
          src={"/regular-phil.png"}
          height={50}
          width={200}
          layout={"fixed"}
          alt={"regular phil logo"}
        />{" "}
        <br />
      </a>
      <span>
        <strong>Software Developer</strong>: <strong>Regular Phil</strong> -
        DMSI (UNL Senior Design)
      </span>{" "}
      <br />
      <span>August 2019 - May 2020</span>
      <br /> <br />
    </div>
  );
};

export default Experience;

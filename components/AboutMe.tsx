import styles from "./AboutMe.module.css";
import Image from "next/image";
import { Avatar } from "antd";

const AboutMe = () => {
  return (
    <div className={styles.body}>
      <h2>
        <strong>About Me</strong>
      </h2>
      <Avatar src={"/jesse.jpeg"} size={120} alt={"jesse"} /> <br /> <br />
      <span>
        <strong>Born:</strong> Red Bluff, CA April 16, 1995
        <br />
        <strong>From:</strong> Lincoln, NE USA 1999 - 2020
        <br />
        <strong>Current:</strong> Austin, TX USA 2021-Current
      </span>
      <br />
      <br />
    </div>
  );
};

export default AboutMe;

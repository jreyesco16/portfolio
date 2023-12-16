import { Space, Typography, Card } from "antd";
import Image from "next/image";
import styles from "./Experience.module.css";
import { Anchor } from "antd";
import { FC } from "react";
import Snyders from "./experience/Snyders";

const { Title, Text, Paragraph, Link } = Typography;

const Experience = () => {
  return (
    <div className={styles.body}>
      <Title level={3}>Experience (TEST)</Title>
      <Snyders />
    </div>
  );
};

export default Experience;

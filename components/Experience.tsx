import { Space, Typography, Card } from "antd";
import Image from "next/image";
import styles from "./Experience.module.css";
import { Anchor } from "antd";
import { FC } from "react";

const { Title, Text, Paragraph, Link } = Typography;



const FreeWater = () => (
  <Space direction={"vertical"} style={{ padding: "1rem", width: "350px" }}>
    <Image
      src={"/freewater-logo.png"}
      height={80}
      width={220}
      layout={"fixed"}
      alt={"freewater logo"}
    />
    <Title level={5}>Frontend Developer: Freewater</Title>
    <Text strong>June 2022 - Current</Text>
    <Paragraph>
      <p>
        Freewater is a startup that sales advertisement space while providing
        free water! My role at Freewater is an unpaid internship as a Frontend
        Developer.
      </p>
      <p>
        I&apos;m working with <strong>React</strong> to build a Design Preview which
        allows clients to design their own labels.
      </p>
    </Paragraph>
    <Link href={"https://www.freewater.io/"}>Freewater Site</Link>
    <Link href={"https://www.linkedin.com/company/freewater/"}>LinkedIn</Link>
  </Space>
);

const Snyders = () => (
    <Space direction={"vertical"} style={{ padding: "1rem", width: "350px" }}>
        <Image
          src={"/snyders-logo.png"}
          height={80}
          width={220}
          layout={"fixed"}
          alt={"snyders salvage logo"}
        />
        <Title level={5}>Software Developer: Snyders Salvage</Title>
        <Text strong>June 2021 - Current</Text>
        <Paragraph></Paragraph>
      </Space>
)

const RegularPhil = () => (
    <Space direction={"vertical"} style={{ padding: "1rem", width: "350px" }}>
        <a href="https://www.youtube.com/watch?v=czUheX_SWfk">
          <Image
            src={"/regular-phil.png"}
            height={80}
            width={220}
            layout={"fixed"}
            alt={"regular phil logo"}
          />
        </a>
        <Title level={5}>Software Developer: Regular Phil</Title>
        <Text strong>August 2019 - May 2020</Text>
        <Paragraph>Senior Design Project (UNL)</Paragraph>
      </Space>
)

const Experience = () => {
  return (
    <div className={styles.body}>
      <Title level={3}>Experience</Title>
      <FreeWater />
      <Snyders />
      <RegularPhil />
    </div>
  );
};

export default Experience;

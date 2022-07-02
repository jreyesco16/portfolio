import { Space, Typography, Card } from "antd";
import Image from "next/image";
import styles from "./Experience.module.css";

const { Title, Text, Paragraph } = Typography;
const { Meta } = Card;

const Experience = () => {
  return (
    <div className={styles.body}>
      <Title level={3}>Experience</Title>
      <Space
        direction={"vertical"}
        style={{ padding: "1rem", width: "350px" }}
      >
        <Image
          src={"/freewater-logo.png"}
          height={60}
          width={180}
          layout={"fixed"}
          alt={"freewater logo"}
        />
        <Title level={5}>Frontend Developer: Freewater</Title>
        <Text strong>June 2022 - Current</Text>
        <Paragraph>

        </Paragraph>
      </Space>
      <Space
        direction={"vertical"}
        style={{ padding: "1rem", width: "350px" }}
      >
        <Image
          src={"/snyders-logo.png"}
          height={60}
          width={180}
          layout={"fixed"}
          alt={"snyders salvage logo"}
        />
        <Title level={5}>Software Developer: Snyders Salvage</Title>
        <Text strong>June 2021 - Current</Text>
        <Paragraph></Paragraph>
      </Space>
      <Space
        direction={"vertical"}
        style={{ padding: "1rem", width: "350px" }}
      >
        <a href="https://www.youtube.com/watch?v=czUheX_SWfk">
          <Image
            src={"/regular-phil.png"}
            height={60}
            width={180}
            layout={"fixed"}
            alt={"regular phil logo"}
          />
        </a>
        <Title level={5}>Software Developer: Regular Phil</Title>
        <Text strong>August 2019 - May 2020</Text>
        <Paragraph>Senior Design Project (UNL)</Paragraph>
      </Space>
    </div>
  );
};

export default Experience;

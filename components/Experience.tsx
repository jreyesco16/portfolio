import { Space, Typography, Card } from "antd";
import Image from "next/image";
import styles from "./Experience.module.css";
import { Anchor } from "antd";
import { FC } from "react";

const { Title, Text, Paragraph, Link } = Typography;

const FreeWater = () => (
  <Space direction={"vertical"} style={{ padding: "1rem", width: "400px" }}>
    <Image
      src={"/freewater-logo.png"}
      height={80}
      width={220}
      layout={"fixed"}
      alt={"freewater logo"}
    />
    <Title level={4}>Frontend Developer: Freewater</Title>
    <Text strong>June 2022 - Current</Text>
    <Paragraph>
      <p>
        Freewater is a startup that sales advertisement space while providing
        free water! My role at Freewater is an unpaid internship as a Frontend
        Developer.
      </p>
      <p>
        I&apos;m working with <strong>React</strong> to build a Design Preview
        which allows clients to design their own labels.
      </p>
    </Paragraph>
    <Link href={"https://www.freewater.io/"}>Freewater Site</Link>
    <Link href={"https://www.linkedin.com/company/freewater/"}>LinkedIn</Link>
  </Space>
);

const Snyders = () => (
  <Space direction={"vertical"} style={{ padding: "1rem", width: "400px" }}>
    <Image
      src={"/snyders-logo.png"}
      height={80}
      width={220}
      layout={"fixed"}
      alt={"snyders salvage logo"}
    />
    <Title level={4}>Software Developer: Snyders Salvage</Title>
    <Text strong>June 2021 - Current</Text>
    <Paragraph>
      <p>
        Snyder's is a full service auto parts provider that is based in Holland,
        TX. Snyder's manages all Wrench-A-Part locations that are self service
        auto salvage yards and Pheonix Auto Group car delearship.
      </p>
      <Title level={5}>Dashboard</Title>
      <p>
        Built a Dashboard for Snyder's employees built with
        <strong> NextJs</strong> and <strong>Ant Design</strong> (UI library)
        <br />
        <ul>
          <li>
            Configured the pre-existing email system for the Dashboard to use
            <strong> Mailjet</strong>
          </li>
          <li>Created table to display all employee phone extensions</li>
          <li>
            Created table to display all vehicles in the Wrench-A-Part inventory
            that were pulled from a <strong>Postgres</strong> database
          </li>
          <li>
            Created a component to capture images of newly purchased vehicles
            and then uploat them into
            <strong> Google Cloud Storage</strong>
          </li>
          <li>Created User Manager page to edit existing users</li>
          <li>
            Created page to display all company goals and component that will
            allow employees to create new and edit goals
          </li>
          <li>
            Set up mock <strong>Postgres</strong> database using
            <strong>Docker</strong> for developments
          </li>
          <li>
            Created <strong>Unit Tests</strong> for components with
            <strong> Jest</strong> and <strong>Testing Library</strong>
          </li>
          <li>
            Configured <strong>GitHub Actions</strong> to run tests prior to
            deployment
          </li>
        </ul>
        <Link href={"https://snyderdash.wrenchapart.com/"}>
          Snyders Dashboard
        </Link>
      </p>
      <Title level={5}>Wrench-A-Part Site</Title>
      <p>
        Wrench-A-Part website that's built with <strong> Svelte</strong> where
        customers can view all the Wrench-A-Part inventory
        <ul>
          <li>
            Updated <strong>SEO</strong> by updating html meta tags on
            <strong> Webflow</strong> pages
          </li>
          <li>
            Updated <strong> REST API</strong> endpoints to filter vehicles
          </li>
          <li>
            Used <strong> {"JQuery"}</strong> to update header and footer links
            based on user location
          </li>
        </ul>
        <Link href={"https://wrenchapart.com/"}>Wrench-A-Part Site</Link>
      </p>
      <p>MyWrenchapart Site (Svelte)</p>
      <p>RingCentral API loader (Golang)</p>
      <p>Data Extractors (Golang) </p>
      <p>Company Visuals Metrics (BigQuery + Domo)</p>
    </Paragraph>
    <Link href={"https://my.wrenchapart.com/"}>MyWrench-A-Part Site</Link>
  </Space>
);

const RegularPhil = () => (
  <Space direction={"vertical"} style={{ padding: "1rem", width: "400px" }}>
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
);

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

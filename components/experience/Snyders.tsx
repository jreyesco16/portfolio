import { Space, Typography, Card } from "antd";
import Image from "next/image";
import styles from "./Experience.module.css";
import { Anchor } from "antd";
import { FC } from "react";

const { Title, Text, Paragraph, Link } = Typography;

const Dashboard = () => {
  return (
    <>
      <Title level={5}>Dashboard</Title>
      <Paragraph>
        Company dashboard for Snyder&apos;s employees built with
        <strong> NextJs</strong> and <strong>Ant Design</strong> (UI library)
        <br />
        <ul>
          <li>
            Configured the pre-existing email system with
            <strong> Mailjet</strong>
          </li>
          <li>
            Used a <strong> Postgres</strong> database to manage the
            dashboard&apos;s data using queries
          </li>
          <li>
            Developed table&apos;s to view/create/edit employee phone
            extensions, vehicle inventory, and company goals
          </li>
          <li>
            Developed component to capture images for vehicles and upload them
            to a<strong> Google Cloud Storage</strong> bucket
          </li>
          <li>
            Set up mock <strong>Postgres</strong> database for local development
            using
            <strong> Docker</strong>
          </li>
          <li>
            Used <strong> RBAC</strong> to provide security to components and{" "}
            <strong> API</strong> requests
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
      </Paragraph>
    </>
  );
};

const WrenchAPart = () => {
  return (
    <>
      <Title level={5}>
        Wrench-A-Part (<strong>Svelte</strong>)
      </Title>
      <Paragraph>
        <ul>
          <li>
            Updated html meta tags on
            <strong> Webflow</strong> pages to optimize <strong>SEO</strong>
          </li>
          <li>
            Updated <strong> REST API</strong> endpoints to filter vehicles
          </li>
          <li>
            Used <strong> {"JQuery"}</strong> to update header and footer links
            based on user location
          </li>
          <li>
            Set up componets to sign up for vehicle notifications during
            inventory searches
          </li>
        </ul>
        <Link href={"https://wrenchapart.com/"}>Wrench-A-Part</Link>
      </Paragraph>
    </>
  );
};

const MyWrenchAPart = () => {
  return (
    <>
      <Title level={5}>
        MyWrench-A-Part (<strong>Svelte</strong>)
      </Title>
      <Paragraph>
        <ul>
          <li>
            Developed web app that allow customers to sign up to receive vehicle
            notifications via SMS messages
          </li>
          <li>
            Styles were built with <strong>Bulma</strong> to speed up
            development
          </li>
          <li>
            Used <strong>Firebase</strong> to implement <strong>2FA </strong>
            customer log ins
          </li>
          <li>
            Used <strong>URL Parameters </strong> to speed up vehicle
            notifications sign ups
          </li>
        </ul>
        <Link href={"https://my.wrenchapart.com/"}>MyWrench-A-Part</Link>
      </Paragraph>
    </>
  );
};

const DataExtractors = () => {
  return (
    <>
      <Title level={5}>
        Data Extractors (<strong>Golang</strong>)
      </Title>
      <Paragraph>
        <ul>
          <li>
            Developed an <strong>ETL </strong> loader that gets data from the
            <strong>RingCentral API </strong> and uploads the data into
            <strong>Google Cloud Storage </strong> then to
            <strong>BigQuery </strong>
          </li>
          <li>
            Updated legacy ETL extractors running on Windows Servers to resolve
            data types extracted from Microsoft SQL Server and Postgres
          </li>
        </ul>
      </Paragraph>
    </>
  );
};

const CompanyVisualMetrics = () => {
  return (
    <>
      <Title level={5}>Company Visual Metrics (BigQuery + Domo)</Title>
      <Paragraph>
        <ul>
          <li>
            Used <strong>BigQuery </strong> to create <strong>views </strong>
            for dataset for company metrics
          </li>
          <li>
            Used <strong>BigQuery </strong> to create
            <strong>procedures </strong> to run trend calucations on company
            metrics
          </li>
          <li>
            Created <strong>scheduled queries </strong> to automate
            <strong> procedures </strong> in <strong>BigQuery </strong>
          </li>
          <li>
            Created cards in <strong>Domo </strong> with
            <strong> federated datasets </strong> from
            <strong>BigQuery </strong>
          </li>
          <li>
            Automated company visual metrics to save time data prepping and help
            stake holders know where how company metrics are trending
          </li>
        </ul>
      </Paragraph>
    </>
  );
};

const Snyders = () => (
  <Space direction={"vertical"} style={{ padding: "1rem", width: "400px" }}>
    <Image
      src={"/snyders-logo.png"}
      height={80}
      width={220}
      layout={"fixed"}
      alt={"snyders salvage logo"}
    />
    <Title level={4}>Junior Developer: Snyders Salvage</Title>
    <Text strong>June 2021 - Current</Text>
    <Paragraph>
      <Dashboard />
      <WrenchAPart />
      <MyWrenchAPart />
      <DataExtractors />
      <CompanyVisualMetrics />
    </Paragraph>
  </Space>
);

export default Snyders;

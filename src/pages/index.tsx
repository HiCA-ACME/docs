import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";

import styles from './styles.module.css';
import useBaseUrl from "@docusaurus/useBaseUrl";
import HomepageFeatures from "../components/HomepageFeatures";

function TopBanner() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerTitle}>
        {"🎉\xa0"}
        <Link
          to="/blog/Hello-HiCA"
          className={styles.topBannerTitleText}
        >
          <Translate id="homepage.banner.launch.2.0">
            HiCA 发布了!
          </Translate>
        </Link>
        {"\xa0🥳"}
      </div>
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ flex: 1, whiteSpace: "nowrap" }}>
          <div className={styles.topBannerDescription}>
            <Translate>
              {siteConfig.tagline}
            </Translate>
          </div>
        </div>
        <div
          style={{
            flexGrow: 1,
            flexShrink: 0,
            padding: "0.5rem",
            display: "flex",
            justifyContent: "center",
          }}
        ></div>
      </div>
    </div>
  );
}

function HeroBanner() {
  return (
    <div className={styles.hero} data-theme="dark">
      <div className={styles.heroInner}>
        <h1 className={styles.heroProjectTagline}>
          <img
            alt={translate({ message: "Docusaurus with Keytar" })}
            className={styles.heroLogo}
            src={useBaseUrl("/img/docusaurus_keytar.svg")}
            width="200"
            height="200"
          />
          <span
            className={styles.heroTitleTextHtml}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate({
                id: "homepage.hero.title",
                message:
                  "<b>免费</b> SSL 证书，现在可以支持 <b>ACME</b> 以及 <b>IP 地址</b>了",
                description:
                  "Home page hero title, can contain simple html tags",
              }),
            }}
          />
        </h1>
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/docs/intro">
            <Translate>开始上手</Translate>
          </Link>
          <Link className="button button--secondary" to="https://t.me/+O20ETkdFppVhN2Q1">
            <Translate>Telegram 群</Translate>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}, ${siteConfig.tagline}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <TopBanner />
        <HeroBanner />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import styles from "./index.module.css";

type FeatureItem = {
  title: string;
  image: string;
  url: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Leggi la documentazione",
    image: "/img/open-book.svg",
    url: "/docs/intro",
    description: <>Casi d'uso, architettura, tips&amp;tricks.</>,
  },
  {
    title: "Prova le API",
    image: "/img/settings-gear.svg",
    url: "https://api-docs.contoaperto.com/",
    description: (
      <>
        Esplora le funzionalità tramite
        <img
          src="/img/swagger-logo.svg"
          height="25"
          style={{ margin: "3px", verticalAlign: "bottom" }}
          alt="Swagger"
        />
      </>
    ),
  },
  {
    title: "Leggi gli aggiornamenti",
    image: "/img/news.svg",
    url: "/blog",
    description: <>Introduzione delle ultime novità e altre notizie utili.</>,
  },
];

function Feature({ title, image, description, url }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <a href={url}>
          <img className={styles.featureSvg} alt={title} src={image} />
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentazione e note di integrazione per ContoAperto"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">ContoAperto</h1>
          <p className="hero__subtitle">
            Documentazione e istruzioni per l'integrazione con servizi esterni
          </p>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

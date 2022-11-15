import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeroBanner from "../components/HeroBanner";
import HeroContent from "../components/HeroContent";
import HeroFooter from "../components/HeroFooter";

export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <Head>
          <title>Twitter Clone</title>
          <meta name="description" content="Twitter Clone by Emir" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeroBanner />
        <HeroContent />
      </main>
      <HeroFooter />
    </>
  );
}

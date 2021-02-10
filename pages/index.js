import Head from 'next/head';
import Layout from '../components/Layout';
import Header from '../components/Header';
import styles from '../styles/Home.module.scss';
import Platforms from '../components/Platforms';
import Themes from '../components/Themes';
import Team from '../components/Team';

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <Header/>
        <Platforms />
        <Themes />
        <Team />
      </Layout>
    </div>
  )
}

import Head from 'next/head';
import Layout from '../components/Layout';
import Header from '../components/Header';
import styles from '../styles/Home.module.scss';
import Platforms from '../components/Platforms';

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <Header/>
        <Platforms />
      </Layout>
    </div>
  )
}

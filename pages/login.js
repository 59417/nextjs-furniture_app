import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Login from '../components/login/Login';


export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
            {/* <title>窩百態傢俱估價系統</title> */}
            <title>ABC傢俱估價系統</title>
            <meta name="description" content="The appraisal system of Woobetter furniture store" />
        </Head>
        <main className={styles.main}>
            <Login />
        </main>
    </div>
  )
}

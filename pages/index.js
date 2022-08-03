import Head from 'next/head'
import Image from 'next/image'
import Footer from '../component/Footer'
import NavBar from '../component/NavBar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
     <>
          <Head>
               <title> Next List | Home </title>
               <meta name='keywords' content='next' />
          </Head>
          
          <div className={styles.title}>
                    <h1 className={styles.text}>Home Page</h1>
                    <p>ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library which is responsible only for the view layer of the application. It was initially developed and maintained by Facebook and later used in its products like WhatsApp & Instagram.</p>
                    <Link href='/ninjas'>
                         <a className={styles.btn}>See ninjas listing</a>
                    </Link>
          </div>
    </>
  )
}

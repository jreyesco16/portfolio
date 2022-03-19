import type { NextPage } from 'next'
import Head from 'next/head'
import AboutMe from '../components/AboutMe'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Projects from '../components/Projects'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jesse R Cortes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1><strong>Jesse R Cortes</strong></h1>

      <Experience />

      <Projects />

      <Education />

      <AboutMe />

    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutMe from '../components/AboutMe'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Languages from '../components/Languages'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jesse R Cortes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1> Jesse R Cortes </h1>

      <Experience />

      <Projects />

      <Languages />

      <Skills />

      <Education />

      {/* CERTIFICATES */}

      <AboutMe />

    </div>
  )
}

export default Home

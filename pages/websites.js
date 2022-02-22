import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import WebsitesCard from '../components/WebsitesCard'

export default function Websites() {
  return (
    <>
      <Head>
        <title>Jorge - Websites</title>

        <link rel="icon" href="/jassel-favicon.png" />
      </Head>
      <Header />
      <div className="h-screen px-5 lg:px-24 2xl:px-24">
        <div className=" pt-24 pb-8 text-center md:pt-28 md:text-left">
          <h1 className="text-3xl font-bold text-deepg">Websites</h1>
          <p className="text-sm text-darkbrown 2xl:text-xl">I've worked on</p>
        </div>
        <main className="md:grid md:grid-cols-2 md:gap-5 xl:grid-cols-3  2xl:gap-10  ">
          <WebsitesCard
            image="/images/website-lulamola.png"
            url="https://www.lulamola.com"
            name="Lulamola"
            description="E-commerce with custom design for an online shop based in Dominican Republic."
          />
          <WebsitesCard
            image="/images/website-greentech.jpg"
            url="https://ev-greentech.com/"
            name="Greentech"
            description="Bilingual website for a worldwide company."
          />
          <WebsitesCard
            image="/images/website-proxilis.jpg"
            url="https://proxilis.ch/"
            name="Proxilis"
            description="Website for a Swiss based laboratory."
          />
          <WebsitesCard
            image="/images/website-cigeh.jpg"
            url="https://cigeh.adoarh.org/"
            name="Cigeh"
            description="Landing page for an event in Dominican Republic."
          />
          <WebsitesCard
            image="/images/website-sorijiet.jpg"
            url="https://sorijiet.com/"
            name="Sorijiet"
            description="Basic E-commerce with custom design for a beauty salon in Dominican Republic."
          />
          <WebsitesCard
            image="/images/website-immobat.jpg"
            url="https://immobat-elec.fr/"
            name="Immobat"
            description="Website for a french company."
          />
        </main>

        <footer className="w-full items-center justify-center py-10 text-center text-darkbrown ">
          Made with ❤️ from 🇩🇴
        </footer>
      </div>
    </>
  )
}

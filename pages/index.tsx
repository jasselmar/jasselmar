import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import Canvas from '../components/Canvas'
import Header from '../components/Header'
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Header />
      <div className="canvas-container">
        <Canvas />
      </div>
      <div className="relative mt-[-450px] flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Jassel - Front End Developer</title>

          <link rel="icon" href="/jassel-favicon.png" />
        </Head>

        <main className="items-left flex w-full flex-1 flex-col justify-end px-24 text-left">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ y: -100, opacity: 1 }}
              transition={{ ease: 'easeOut', duration: 1 }}
            >
              <h1 className=" bg-clip-text text-5xl font-bold text-deepg  drop-shadow-xl ">
                Front End Developer
              </h1>

              <p className="text-1xl mt-3 text-darkbrown ">
                Looking for the balance between functionality and design.
              </p>
            </motion.div>
          </AnimatePresence>
          {/* <motion.div className="mt-3 flex w-5/12 space-x-3 ">
              <div className="text-1xl w-fit rounded-full bg-redjm p-2 text-white drop-shadow-lg ">
                JavaScript
              </div>
              <div className="text-1xl w-fit rounded-full bg-redjm p-2  text-white drop-shadow-lg ">
                React Native
              </div>
              <div className="text-1xl w-fit rounded-full bg-redjm p-2  text-white drop-shadow-lg ">
                React
              </div>
            </motion.div> */}

          <div className="items-top mt-5 flex max-w-4xl flex-wrap justify-around bg-redjm sm:w-full">
            <a href="https://nextjs.org/docs" className=" bg-white">
              <h3 className="text-2xl font-bold">About &rarr;</h3>

              <p className="mt-4 text-xl">
                Find in-depth information about Next.js features and API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Learn &rarr;</h3>

              <p className="mt-4 text-xl">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>

              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Deploy &rarr;</h3>

              <p className="mt-4 text-xl">
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className="flex h-24 w-full items-center justify-center text-white">
          Made with 🤍 from 🇩🇴
        </footer>
      </div>
    </>
  )
}

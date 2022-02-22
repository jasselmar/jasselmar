import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import Canvas from '../components/Canvas'
import Header from '../components/Header'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Card from '../components/Card'
import { useWindowSize } from '../hooks/useWindowSize'
import WebsitesCard from '../components/WebsitesCard'

export default function Home() {
  const { width, height } = useWindowSize()
  return (
    <>
      <Head>
        <title>Jorge - Front End Developer</title>

        <link rel="icon" href="/jassel-favicon.png" />
      </Head>
      <Header />
      {width >= 1024 ? <Canvas className=" hidden xl:inline" /> : null}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: 'easeIn', duration: 0.5 }}
          className=" xl:hidden "
        >
          <img
            src="/images/0000.jpg"
            width={width}
            height={height}
            className="h-screen object-cover "
          />
        </motion.div>
      </AnimatePresence>
      <div className="flex min-h-screen flex-col items-center justify-center pt-2 lg:relative">
        <main className="items-left flex w-full flex-1 flex-col justify-start px-5 text-left  lg:px-24">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: -100, opacity: 1 }}
              transition={{ ease: 'easeIn', duration: 1 }}
              className="  mt-[-50px] text-center text-white sm:grid sm:grid-cols-2 sm:content-end sm:text-left xl:mt-[-250px] xl:flex xl:flex-col "
            >
              <h1
                id="about"
                className=" text-lg font-bold drop-shadow-xl sm:text-deepg lg:text-xl xl:text-5xl "
              >
                Front End Developer
              </h1>
              <p className=" hidden text-base text-darkbrown lg:mt-2 lg:text-lg xl:block ">
                Looking for the balance between functionality and design.
              </p>
              <p className=" sm:text-md block text-sm sm:text-right  sm:text-darkbrown xl:hidden ">
                Functionality and design.
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: 'easeIn', duration: 0.5 }}
            className=" grid h-fit w-full lg:mt-10 xl:h-screen"
          >
            <div className="pt-28 sm:grid sm:grid-cols-2 sm:pt-20 lg:pt-32 xl:grid-cols-3">
              <div className="h-fit ">
                <h2 className="text-3xl font-bold text-deepg">About</h2>
                <p className="mt-4 mr-5 text-justify text-darkbrown ">
                  Hi, I'm Jorge J. Martínez from Dominican Republic🇩🇴. I
                  consider myself curiosity-driven person passionate about{' '}
                  <a className="font-bold">mobile and web development</a>,
                  basically creating things that live on the internet.
                </p>

                <p className="mt-4 text-darkbrown ">
                  I'm currently looking for new opportunities.
                </p>

                <p className="mt-4 text-darkbrown ">
                  <a
                    href="mailto:jjasselmartinez@gmail.com"
                    className="underline"
                    target="_blank"
                  >
                    contact
                  </a>{' '}
                  |{' '}
                  <a href="/JM.CV.M.pdf" className="underline" target="_blank">
                    resume
                  </a>{' '}
                  |{' '}
                  <a
                    href="https://github.com/jasselmar"
                    className="underline"
                    target="_blank"
                  >
                    github
                  </a>
                </p>
                <div className="my-4">
                  <motion.div className=" mt-3 flex flex-wrap space-x-2">
                    <div className="mt-1 w-fit rounded-full bg-redjm p-2 text-sm text-white drop-shadow-lg ">
                      JavaScript
                    </div>
                    <div className="mt-1 w-fit rounded-full bg-redjm p-2 text-sm  text-white drop-shadow-lg ">
                      React Native
                    </div>
                    <div className="mt-1 w-fit rounded-full bg-redjm p-2 text-sm  text-white drop-shadow-lg ">
                      React
                    </div>
                    <div className="mt-1 w-fit rounded-full bg-redjm p-2 text-sm  text-white drop-shadow-lg ">
                      HTML/CSS
                    </div>
                    <div className=" mt-1 w-fit rounded-full bg-redjm p-2 text-sm  text-white drop-shadow-lg ">
                      Expo
                    </div>
                    <div className=" mt-1 w-fit rounded-full bg-redjm p-2 text-sm  text-white drop-shadow-lg ">
                      Redux
                    </div>
                    <div className=" mt-1 w-fit rounded-full bg-redjm p-2 text-sm  text-white drop-shadow-lg ">
                      GraphQL
                    </div>
                    <div className=" mt-1 w-fit rounded-full bg-redjm p-2 text-sm  text-white drop-shadow-lg ">
                      Git
                    </div>
                    <div className=" mt-1 w-fit rounded-full bg-redjm p-2 text-sm  text-white drop-shadow-lg ">
                      Next.js
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className=" hidden text-center xl:block"></div>
              <div className=" mt-10 h-fit  rounded-xl px-0 text-center sm:mt-0 sm:text-right ">
                <Image
                  src="/images/me.jpg"
                  className="rounded-xl drop-shadow-2xl "
                  height={350}
                  width={281.36}
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: 'easeIn', duration: 1 }}
            id="projects"
            className=" my-20 flex flex-col justify-center xl:mt-[-250px] "
          >
            <h2 className="text-3xl font-bold text-deepg lg:mt-10">
              Mobile Apps
            </h2>
            <div className=" grid w-full xl:grid-cols-3 ">
              <Card
                title="Conversation Cards Game App"
                description="React Native Expo Firebase Reanimated Gesture Handler"
                url="https://github.com/jasselmar/hablemos-sf-app"
                mockup="/images/hablemos-sf-app.jpg"
              />
              <div className="hidden lg:block "></div>
              <Card
                title="Appointments App"
                description="React Native Expo Firebase RN Calendars"
                url="https://github.com/jasselmar/ibs-test"
                mockup="/images/appointments-app.jpg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: 'easeIn', duration: 1 }}
            id="websites"
            className=" my-20 mt-[-25px] flex flex-col justify-center "
          >
            <div className="flex flex-row items-center lg:mt-10">
              <a href="/websites">
                <h2 className="text-3xl font-bold text-deepg ">Websites</h2>
              </a>
              <a
                href="/websites"
                className="mx-2 rounded-full border border-deepg px-2.5 py-1 text-base text-deepg transition-all duration-300 hover:bg-deepg hover:text-white"
              >
                view more
              </a>
            </div>
            <div className=" grid w-full xl:grid-cols-3 ">
              <a
                href="https://www.lulamola.com"
                target="_blank"
                className="mt-5 flex space-y-5 rounded-md bg-whiteb p-4 drop-shadow-sm transition-all duration-300 hover:drop-shadow-2xl"
              >
                <div className=" flex w-3/4 flex-col justify-center  ">
                  <h3 className="text-2xl font-medium text-darkbrown ">
                    Lulamola
                  </h3>

                  <p className=" my-6 pr-4 text-sm text-darkbrown">
                    E-commerce with custom design for an online shop based in
                    Dominican Republic.
                  </p>
                </div>
                <div className=" ">
                  <Image
                    src="/images/website-lulamola.png"
                    width={150}
                    height={113}
                    className=" rounded-lg "
                  />
                </div>
              </a>
              <div className="hidden lg:block "></div>
              <a
                href="https://ev-greentech.com/"
                target="_blank"
                className="mt-5 flex space-y-5 rounded-md bg-whiteb p-4 drop-shadow-sm transition-all duration-300 hover:drop-shadow-2xl"
              >
                <div className=" flex w-3/4 flex-col justify-center  ">
                  <h3 className="text-2xl font-medium text-darkbrown ">
                    Greentech
                  </h3>

                  <p className=" my-6 text-sm text-darkbrown ">
                    Bilingual website for a worldwide company.
                  </p>
                </div>
                <div className=" ">
                  <Image
                    src="/images/website-greentech.jpg"
                    width={150}
                    height={113}
                    className=" rounded-lg "
                  />
                </div>
              </a>
            </div>
          </motion.div>
        </main>

        <footer className="hidden h-24 w-full items-center justify-center pb-5 text-center text-white xl:flex">
          Made with 🤍<br></br> from 🇩🇴
        </footer>
        <footer className="block h-24 w-full items-center justify-center text-center text-darkbrown xl:hidden">
          Made with ❤️ from 🇩🇴
        </footer>
      </div>
    </>
  )
}

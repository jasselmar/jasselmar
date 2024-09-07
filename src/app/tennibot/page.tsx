"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';
import { lato, circularBold, circular } from "@/app/utils/fonts";
import Header from "@/components/Header";
import { FlipWords } from '@/components/ui/flip-words';

const listItemStyle = `${lato.className} text-lg text-orange-50 text-opacity-60`

const Tennibot = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between bg-bone my-20">
        <article className="w-full px-4 sm:px-0 sm:w-[90%] md:w-[80%] lg:max-w-[70%] h-auto min-h-screen py-8">
          <h1 className={`${circularBold.className} sr-only`}>Tennibot Projects and Contributions</h1>
          <div className="mt-10 rounded-3xl bg-darkGreen p-4 sm:p-8 relative overflow-hidden">
            {/* Handle bg image */}
            {/* <div className="absolute inset-0 bg-[url('/images/background-pp.avif')] bg-cover bg-center"></div> */}
            <div className="absolute inset-0 bg-darkGreen opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-darkGreen via-darkGreen/95 to-transparent">
              <div className="w-full h-full bg-gradient-to-t from-darkGreen via-darkGreen/40 to-transparent"></div>
            </div>

            <div className="relative px-1.5 py-3 ">
                <Link href="/" passHref>
                  <ArrowLeftIcon className='text-orange-50 mb-10  w-8 h-8 mr-[0.15rem] group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300 ease-out' aria-label="Back to Home" />
                </Link>
              <div className='flex flex-row md:items-center gap-5 mb-8' >
                <h2 className={`${circularBold.className} text-4xl text-orange-50`}>Tennibot</h2>
                <Image src="/images/tennibot-icon.svg" alt="Tennibot App Icon" className='hover:scale-[105%] transition-all duration-500 ease-out hover:translate-y-[-2%]' width={30} height={30} />
              </div>
              
              <section className="mb-12">
                <h3 className={`${circular.className} text-2xl text-orange-50 mb-4`}>Overview</h3>
                <p className={`${lato.className} text-lg text-orange-50 text-opacity-60 mb-4`}>
                    At Tennibot, I've worked on five projects, primarily focusing on the first two:
                </p>
                <ul className={`${lato.className} list-disc list-inside mb-4 text-lg text-orange-50 text-opacity-60`}>
                    <li className={listItemStyle}>
                        <span className={`${circularBold.className} text-orange-50 text-opacity-90`}>Tennibot App</span>: The interface between the Rover/Station and the user, built with React Native, TypeScript, and AWS.
                    </li>
                    <li className={listItemStyle}>
                        <span className={`${circularBold.className} text-orange-50 text-opacity-90`}>Tennibot Website</span>: A presentational website and e-commerce platform, built with Astro, ReactJS, and Sanity, and deployed on Netlify.
                    </li>
                    <li className={listItemStyle}>
                        <span className={`${circularBold.className} text-orange-50 text-opacity-90`}>Tennibot Inventory</span>: An internal web app for managing the inventory needed to build the robots, developed with Next.js, ReactJS, Prisma, and deployed to DigitalOcean.
                    </li>
                    <li className={listItemStyle}>
                        <span className={`${circularBold.className} text-orange-50 text-opacity-90`}>HYQ Tennis App / Web App</span>: An application that monitors and controls water levels on clay courts via a smart board. The mobile app was built with React Native, TypeScript, Expo, and Firebase; the web app was developed with Next.js, ReactJS, TypeScript, and Firebase.
                    </li>
                </ul>

                <p className={`${lato.className} text-lg text-orange-50 text-opacity-60 mb-4`}>
                    I've had the opportunity to contribute to all of these projects, each with a significant impact. For example, in the HYQ apps, I worked extensively with Cloud Functions, ensuring the app could handle critical backend operations smoothly. Additionally, I led the complete rebuild and redesign of the Tennibot Website, creating a more modern and efficient platform for both presentation and e-commerce. However, my primary focus has been on the Tennibot App, where I undertook a full rebuild and redesign of the Rover interface. This involved maintaining existing features, adding new functionalities, and improving the overall user experience. Here's a quick showcase of the Tennibot App:
                </p>

              </section>

              <section className="">
                <h3 className={`${circular.className} text-2xl text-orange-50 mb-6`}>
                  Good<FlipWords className='text-orange-50' words={["looking", "feeling"]} />
                </h3>
                <div className='flex flex-col gap-4' >
                  <div className="bg-dawn bg-opacity-80 w-full relative rounded-[1.25rem] h-[20rem] group hover:scale-[98%] transition-all duration-300 ease-out flex items-center justify-center mb-4">
                    <video className='overflow-hidden h-[90%] fit rounded-[0.5rem] group-hover:scale-[105%] transition-all duration-300 ease-out'  playsInline webkit-playsinline="true" muted autoPlay loop>
                      <source src="/videos/navigation-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <p className={`${lato.className} text-lg w-[100%] text-orange-50 text-opacity-60 mb-12`}>
                  The Autonomous screen is the most frequently used, offering access to nearly every Rover feature. It allows users to select cleaning areas, start/stop navigation, view real-time positioning, control the Rover remotely, relocate it, and more.
                  </p>
                </div>
              </section>

              <section className="flex flex-col gap-4 mb-12">
                <div className="bg-dawn bg-opacity-80 w-full relative rounded-[1.25rem] h-[20rem] group hover:scale-[98%] transition-all duration-300 ease-out flex items-center justify-center mb-4">
                  <video className='overflow-hidden h-[90%] fit rounded-[0.5rem] group-hover:scale-[105%] transition-all duration-300 ease-out'  playsInline webkit-playsinline="true" muted autoPlay loop>
                    <source src="/videos/restricted-zones-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </section>

              <section className="flex flex-col gap-4 mb-12">
                <div className="bg-dawn bg-opacity-80 w-full relative rounded-[1.25rem] h-[20rem] group hover:scale-[98%] transition-all duration-300 ease-out flex items-center justify-center mb-4">
                  <video className='overflow-hidden h-[90%] fit rounded-[0.5rem] group-hover:scale-[105%] transition-all duration-300 ease-out'  playsInline webkit-playsinline="true" muted autoPlay loop>
                    <source src="/videos/update-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className={`${lato.className} text-lg text-orange-50 text-opacity-60`}>
                Recently, we rebuilt the firmware update flow. I managed the app interface and integrated the update information using AWS Lambda functions and Viam (fleet management platform).
                </p>
              </section>

              <section className="mb-6">
                <h3 className={`${circular.className} text-2xl text-orange-50 mb-4`}>Contributions</h3>
                <p className={`${lato.className} text-lg text-orange-50 text-opacity-60 mb-4`}>
                    Some interesting challenges I've encountered and solved include:
                </p>
                <ul className={`${lato.className} list-disc list-inside text-lg text-orange-50 text-opacity-60`}>
                    <li className={listItemStyle}>
                        Managing multiple communication clients/protocols simultaneously and integrating them with the app lifecycle.
                    </li>
                    <li className={listItemStyle}>
                        Handling authentication for an offline-first application.
                    </li>
                    <li className={listItemStyle}>
                        Ensuring the user interface provides accurate information and a seamless experience, even in scenarios where connection quality is poor.
                    </li>
                    <li className={listItemStyle}>
                        Adapting dynamic functionality based on the firmware version of the robots.
                    </li>
                </ul>
              </section>

              <section className='border-t border-orange-50 border-opacity-10 pt-6'>
                <p className={`${lato.className} text-lg text-orange-50 text-opacity-60 mb-4`}>
                    Working at Tennibot has given me the opportunity to tackle a wide range of technical challenges across several projects. From building robust IoT integrations to enhancing user experience through thoughtful interface design, each project has allowed me to grow as a developer. Rebuilding and redesigning key components of these systems has been both rewarding and instrumental in delivering innovative solutions.
                </p>
              </section>

              <nav className="mt-12">
                <Link href="/" passHref>
                  <Button size="default" className={`${circular.className} group hover:bg-bone text-darkGreen2 bg-bone rounded-[0.75rem]`}>
                    <ArrowLeftIcon className='w-4 h-4 mr-[0.15rem] opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300 ease-out' />
                    <p className='ml-[-1rem] group-hover:ml-0 transition-all duration-300 ease-out'>Home</p>
                  </Button>
                </Link>
              </nav>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}

export default Tennibot
"use client";

import React from 'react';
import { lato, circular } from "@/app/utils/fonts";
import Header from "../components/Header";
import Image from "next/image";
import TechnologiesList from '@/components/TechnologiesList';
import ProjectItem from '@/components/ProjectItem';

export default function Home() {
  return (
    <>
    <Header />
    <main className="flex min-h-screen flex-col items-center justify-between bg-bone">
      <div className="w-full px-4 sm:px-0 sm:w-[90%] md:w-[80%] lg:max-w-[70%] min-h-screen py-8" >
        {/* Content */}
        <div className="mt-36 rounded-3xl bg-darkGreen p-4 sm:p-8 relative overflow-hidden mb-20">
          {/* Handle bg image */}
          <div className="absolute inset-0 bg-[url('/images/background-pp.avif')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-darkGreen opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-darkGreen via-darkGreen/95 to-transparent">
            <div className="w-full h-full bg-gradient-to-t from-darkGreen via-darkGreen/40 to-transparent"></div>
          </div>
          <TechnologiesList />
          {/* Start content */}
          <div className='mt-10 w-[100%] relative flex xl:flex-row flex-col gap-5' >
            {/* Start left column */}
            <div className='flex xl:flex-col flex-col-reverse gap-5' >
              {/* Start education card */}
              <div className='rounded-[1.25rem] border-t border-orange-50 px-3 py-3 shadow-stone-800/30 backdrop-blur-2xl border-opacity-15 bg-stone-800 bg-opacity-80 pointer-events-auto shrink-0 shadow-2xl shadow-stone-900/80 xl:w-[25.5rem] '>
                <h3 className={`${circular.className} text-xl text-orange-50 px-3`} >Education</h3>
                <ul className='px-3'>
                  <li className='flex flex-col justify-start py-4' >
                    <div className='flex flex-row justify-start gap-4' >
                      <div className='flex flex-row items-center' >
                        <Image src="/images/intec-logo.svg" alt="INTEC" width={35} height={35} />
                      </div>
                      <div>
                        <h4 className={`${lato.className} text-md text-orange-50`} >B.Sc. Systems Engineering</h4>
                        <p className={`${lato.className} flex flex-col text-xs text-orange-50 text-opacity-40`} >
                          <span className={`${lato.className} text-xs text-orange-50 text-opacity-80 tracking-wide pt-1`} >Santo Domingo Institute of Technology</span>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              {/* End education card */}
              </div>

              {/* Start experience card */}
              <div className='rounded-[1.25rem] border-t border-orange-50 px-3 py-3 shadow-stone-800/30 backdrop-blur-2xl border-opacity-15 bg-stone-800 bg-opacity-80 pointer-events-auto shrink-0 shadow-2xl shadow-stone-900/80 xl:w-[25.5rem]'>
                <h3 className={`${circular.className} text-xl text-orange-50 px-3`} >Experience</h3>

                <ul className='px-3'>
                  <li className='flex flex-col justify-start py-4' >
                    <div className='flex flex-row justify-start gap-4' >
                      <div className='flex flex-row items-center' >
                        <Image src="/images/tennibot-logo.svg" alt="Tennibot" width={35} height={35} />
                      </div>
                      <div>
                        <h4 className={`${lato.className} text-md text-orange-50`} >Software Engineer @ Tennibot</h4>
                        <p className={`${lato.className} flex flex-col text-xs text-orange-50 text-opacity-40`} >
                          <span className={`${lato.className} text-xs text-orange-50 text-opacity-80 tracking-wide pt-1`} >Auburn, AL - Remote</span>
                        </p>
                      </div>
                    </div>
                    <p className={`${lato.className} text-sm text-orange-50 text-justify mt-3 text-opacity-60`} >
                      Developing a cross-platform mobile app that serves as the interface for controlling Tennibot&apos;s Rover, an autonomous tennis ball collector, and the Station, which collects and provides stats of the game. The app provides real-time updates and seamless robot management, enhancing the experience of playing tennis.
                    </p>
                  </li>
                  <li className='flex flex-col justify-start py-4 border-t border-orange-50 border-opacity-10' >
                    <div className='flex flex-row justify-start gap-4' >
                      <div className='flex flex-row items-center' >
                        <Image src="/images/gmedia-logo.svg" alt="Tennibot" width={25} height={25} />
                      </div>
                      <div>
                        <h4 className={`${lato.className} text-md text-orange-50`} >Front End Developer @ Gmedia</h4>
                        <p className={`${lato.className} flex flex-col text-xs text-orange-50 text-opacity-60`} >
                          <span className={`${lato.className} text-xs text-orange-50 text-opacity-80 tracking-wide pt-1`} >Santo Domingo, RD</span>
                        </p>
                      </div>
                    </div>
                    <p className={`${lato.className} text-sm text-orange-50 text-justify mt-3 text-opacity-50`} >
                      Developed and optimized over 20 websites by implementing a clean and efficient coding approach. Increased productivity by reducing development time while maintaining great functionality.
                    </p>
                  </li>
                </ul>
              </div>
            {/* End left column */}
            </div>
            {/* Start right column */}
            <div className='flex flex-col rounded-[1.25rem] w-full border-t border-orange-50 px-3 py-5 shadow-stone-800/30 backdrop-blur-2xl border-opacity-15 bg-stone-800 bg-opacity-80 pointer-events-auto shadow-2xl shadow-stone-900/80' >
              <h3 className={`${circular.className} text-xl text-orange-50 px-3 pb-5`} >Projects</h3>
              <div className=' h-full flex flex-col'>
                <ProjectItem  
                  title="Hablemos Sin Filtro App"
                  description="A side project that I developed solo for a local brand called &quot;Hablemos Sin Filtro&quot; built with React Native, Expo and Firebase. The application consists of a card game designed to spark meaningful conversations."
                  image={{
                    src: "/images/hsf-app.png",
                    alt: "Hablemos Sin Filtro App"
                  }}
                  link="/hsf-app"
                  projectType='hsf'
                  techStack={[
                    { name: 'React Native', icon: '/images/react-native-icon.svg', size: 21 },
                    { name: 'Expo', icon: '/images/expo-icon.svg' },
                    { name: 'Firebase', icon: '/images/firebase-icon.svg', size: 24 },
                    { name: 'Apple', icon: '/images/apple-icon.svg' },
                    { name: 'Android', icon: '/images/android-icon.svg' },
                  ]}
                />
                <div className='w-full h-[1px] my-5 bg-orange-50 bg-opacity-10' ></div>
                <ProjectItem  
                  title="Tennibot"
                  description="At Tennibot, I led the rebuild and redesign of the Tennibot App and Website, focusing on improving user experience and functionality. My contributions included mobile and web development, IoT integration, and backend operations with Cloud Functions."
                  image={{
                    src: "/images/tennibot-app.png",
                    alt: "Tennibot App"
                  }}
                  link="/tennibot"
                  projectType='tennibot'
                  techStack={[
                    { name: 'React Native', icon: '/images/react-native-icon.svg', size: 21 },
                    { name: 'AWS', icon: '/images/aws-icon.svg', size: 24 },
                    { name: 'Firebase', icon: '/images/firebase-icon.svg', size: 24 },
                    { name: 'Apple', icon: '/images/apple-icon.svg' },
                    { name: 'Android', icon: '/images/android-icon.svg' }
                  ]}
                />
              </div>
            </div>
          {/* End content */}
          </div>
        </div>

      </div>
    </main>
    </>
  );
}

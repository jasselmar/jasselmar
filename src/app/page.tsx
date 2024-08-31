"use client";

import React, { useRef, useEffect, useState } from 'react';
import { lato, circularBlack, circularBold, circular } from "@/app/utils/fonts";
import Header from "./components/Header";
import Image from "next/image";
import { File, Folder, Tree } from "@/components/magicui/file-tree";

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "technologies",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "app",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "layout.tsx",
          },
          {
            id: "4",
            isSelectable: true,
            name: "page.tsx",
          },
        ],
      },
      {
        id: "5",
        isSelectable: true,
        name: "components",
        children: [
          {
            id: "6",
            isSelectable: true,
            name: "header.tsx",
          },
          {
            id: "7",
            isSelectable: true,
            name: "footer.tsx",
          },
        ],
      },
      {
        id: "8",
        isSelectable: true,
        name: "lib",
        children: [
          {
            id: "9",
            isSelectable: true,
            name: "utils.ts",
          },
        ],
      },
    ],
  },
];

const techItemStyle = "flex flex-row text-xs items-center text-orange-50 tracking-wide rounded-[0.9rem] px-3.5 py-1.5 relative"

const technologies = [
  {
    name: "TypeScript",
    icon: "/images/ts-icon.svg",
  },
  {
    name: "JavaScript",
    icon: "/images/js-icon.svg",
  },
  {
    name: "Python",
    icon: "/images/python-icon.svg",
  },
  {
    name: "React Native",
    icon: "/images/react-native-icon.svg",
  },
  {
    name: "React",
    icon: "/images/react-native-icon.svg",
  },
  {
    name: "HTML",
    icon: "/images/html-icon.svg",
    width: 15,
    height: 15,
  },
  {
    name: "CSS",
    icon: "/images/css-icon.svg",
    width: 15,
    height: 15,
  },
  {
    name: "AWS",
    icon: "/images/aws-icon.svg",
    width: 25,
    height: 25
  },
  {
    name: "Firebase",
    icon: "/images/firebase-icon.svg",
  },
  {
    name: "Node.js",
    icon: "/images/node-icon.svg",
  }
]

const cards = [
  { question: '¿Cual es el viaje de tus sueños?', style: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0' },
  { question: '¿Quién te ha ofrecido el mejor consejo profesional?', style: 'top-[40%] left-[40%] -translate-x-1/2 -translate-y-1/2 rotate-[30deg]' },
  { question: '¿Cómo diferenciar el amor de la dependencia emocional?', style: 'top-[60%] left-[60%] -translate-x-1/2 -translate-y-1/2 rotate-[-45deg]' },
  { question: '¿Cuál ha sido tu mayor aprendizaje este año?', style: 'top-[20%] left-[60%] -translate-x-1/2 -translate-y-1/2 rotate-[-60deg]' },
  { question: '¿Qué harías si la persona con quien te casas le diagnostican Alzheimer?', style: 'top-[70%] left-[35%] -translate-x-1/2 -translate-y-1/2 rotate-[75deg]' },
  { question: '¿Cuál es tu mayor miedo en la vida?', style: 'top-[25%] left-[45%] -translate-x-1/2 -translate-y-1/2 rotate-[-200deg]' },
  { question: '¿Qué cambiarías de tu pasado si pudieras?', style: 'top-[75%] left-[55%] -translate-x-1/2 -translate-y-1/2 rotate-[50deg]' },
  { question: '¿Cómo te gustaría que te recordaran?', style: 'top-[50%] left-[70%] -translate-x-1/2 -translate-y-1/2 rotate-[-25deg]' },
];

export default function Home() {
  const listRef = useRef<HTMLUListElement>(null);
  const [lastItemsInRow, setLastItemsInRow] = useState<Set<number>>(new Set());

  useEffect(() => {
    const updateLastItems = () => {
      if (listRef.current) {
        const items = listRef.current.children;
        let lastItemTop = items[0].getBoundingClientRect().top;
        let lastIndex = 0;
        const newLastItems = new Set<number>();

        for (let i = 1; i < items.length; i++) {
          const itemTop = items[i].getBoundingClientRect().top;
          if (itemTop > lastItemTop) {
            newLastItems.add(lastIndex);
            lastItemTop = itemTop;
          }
          lastIndex = i;
        }
        newLastItems.add(lastIndex); // Add the very last item
        setLastItemsInRow(newLastItems);
      }
    };

    updateLastItems();
    window.addEventListener('resize', updateLastItems);
    return () => window.removeEventListener('resize', updateLastItems);
  }, []);

  return (
    <>
    <Header />
    <main className="flex min-h-screen flex-col items-center justify-between bg-bone">
      <div className="w-full px-4 sm:px-0 sm:w-[90%] md:w-[80%] lg:max-w-[70%] h-auto min-h-screen py-8" >
        <div className="flex flex-row justify-start gap-3 items-center" >
          <div>
            <Image src="/images/profile.png" alt="Jorge Martínez" width={60} height={60} />
          </div>
          <div className="flex flex-col gap-0" >
            <h2 className={`${circularBold.className} font-circularBold text-2xl text-zeus`} >Jorge Martínez</h2>
            <p className={`font-lato tracking-wide  text-dawn`} >Mobile & Web Development</p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-darkGreen p-4 sm:p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/background-pp.avif')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-darkGreen opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-darkGreen via-darkGreen/95 to-transparent">
            <div className="w-full h-full bg-gradient-to-t from-darkGreen via-darkGreen/40 to-transparent"></div>
          </div>
          <div className="relative z-10">
            <div className="flex mx-auto py-2.5 items-center justify-center rounded-[1.25rem] bg-orange-50 bg-opacity-20 pl-3 pr-5 text-orange-50 backdrop-blur-xl" >
              <ul ref={listRef} className={`text-bone flex flex-wrap justify-center flex-row gap-x-5 gap-y-2`} >
                {technologies.map((tech, idx) => {
                  return (
                    <li key={idx} className={`${techItemStyle} flex text-nowrap items-center group transition-colors duration-300 ease-out cursor-default hover:bg-orange-50 hover:bg-opacity-10 ${!lastItemsInRow.has(idx) ? 'after:content-[\'\'] after:absolute after:right-[-10px] after:top-1/2 after:-translate-y-1/2 after:h-4 after:w-[1px] after:bg-orange-50 after:opacity-30' : ''}`}>
                      <Image 
                        src={`${tech.icon ?? "/images/react-native-icon.svg"}`} 
                        alt={tech.name} 
                        width={tech.width ?? 20} 
                        height={tech.height ?? 20} 
                        className="mr-2 [filter:brightness(0)_saturate(100%)_invert(100%)_sepia(0%)_saturate(0%)_hue-rotate(0deg)_brightness(100%)_contrast(100%)] group-hover:scale-90 group-hover:[filter:none] transition-[filter] duration-300 ease-out" 
                      />
                      {tech.name}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          <div className='mt-10 flex xl:flex-row flex-col gap-10' >
            <div className='flex xl:flex-col flex-col-reverse gap-10' >
            <div className='rounded-[1.25rem] border-t border-orange-50 px-3 py-3 shadow-stone-800/30 backdrop-blur-2xl border-opacity-15 bg-stone-800 bg-opacity-80 pointer-events-auto shrink-0 shadow-2xl shadow-stone-900/80 xl:w-[25.5rem] '>
              <div className='pb-2.5'>
                <h3 className={`${circular.className} text-xl text-orange-50 px-3`} >Education</h3>
              </div>
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
              </div>
              <div className='rounded-[1.25rem] border-t border-orange-50 px-3 py-3 shadow-stone-800/30 backdrop-blur-2xl border-opacity-15 bg-stone-800 bg-opacity-80 pointer-events-auto shrink-0 shadow-2xl shadow-stone-900/80 xl:w-[25.5rem]'>
                <div className='pb-2.5'>
                  <h3 className={`${circular.className} text-xl text-orange-50 px-3`} >Experience</h3>
                </div>
                <ul className='px-3'>
                  <li className='flex flex-col justify-start py-4' >
                    <div className='flex flex-row justify-start gap-4' >
                      <div className='flex flex-row items-center' >
                        <Image src="/images/tennibot-logo.svg" alt="Tennibot" width={35} height={35} />
                      </div>
                      <div>
                        <h4 className={`${lato.className} text-md text-orange-50`} >Software Engineer @ Tennibot</h4>
                        <p className={`${lato.className} flex flex-col text-xs text-orange-50 text-opacity-40`} >
                          <span className='font-circularBold text-orange-50 text-opacity-80' >2022 - Present</span>
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
                          <span className='font-circularBold text-orange-50 text-opacity-80' >2020 - 2022</span>
                          <span className={`${lato.className} text-xs text-orange-50 text-opacity-80 tracking-wide pt-1`} >Santo Domingo, RD</span>
                        </p>
                      </div>
                    </div>
                    <p className={`${lato.className} text-sm text-orange-50 text-justify mt-3 text-opacity-50`} >
                      Developed and optimized over 20 projects by implementing a clean and efficient coding approach. Increased productivity by reducing development time while maintaining great functionality.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* Project */}
            <div className='rounded-[1.25rem] w-full border-t border-orange-50 px-3 py-3 shadow-stone-800/30 backdrop-blur-2xl border-opacity-15 bg-stone-800 bg-opacity-80 pointer-events-auto shadow-2xl shadow-stone-900/80'>
              <div className='pb-2.5'>
                <h3 className={`${circular.className} text-xl text-orange-50 px-3`} >Project</h3>
              </div>
              <div className='w-full px-3 pt-4' >
                <div className='h-[250px] rounded-[1.25rem] flex justify-center items-center bg-dawn w-full relative overflow-hidden group hover:scale-[98%] transition-all duration-500 ease-out touch:scale-[98%]' >
                  <Image src="/images/hsf-app.png" alt="HSF App" className='group-hover:scale-[105%] max-lg:z-10 transition-all duration-500 ease-out group-hover:rotate-[10deg] max-lg:rotate-[10deg] group-hover:translate-y-[-2%] touch:scale-[105%] touch:rotate-[10deg] touch:translate-y-[-2%]' width={130} height={130} />
                  {cards.map((card, idx) => (
                    <div 
                      key={idx} 
                      className={`absolute aspect-[2/3] bg-white w-[140px] max-md:blur-[1px] rounded-[0.75rem] shadow-md flex flex-col justify-center items-center p-4 transition-all duration-500 ease-in-out group-hover:duration-[800ms]
                      ${card.style}
                      ${idx === 0 ? ' max-lg:top-[10%] max-lg:left-[10%] max-lg:delay-[100ms] group-hover:top-[10%] group-hover:left-[10%] group-hover:delay-[100ms]' : ''}
                      ${idx === 1 ? 'max-lg:top-[20%] max-lg:left-[90%] max-lg:delay-[150ms] group-hover:top-[20%] group-hover:left-[90%] group-hover:delay-[150ms]' : ''}
                      ${idx === 2 ? 'max-lg:top-[80%] max-lg:left-[10%] max-lg:delay-[500ms] group-hover:top-[80%] group-hover:left-[10%] group-hover:delay-[500ms]' : ''}
                      ${idx === 3 ? 'max-lg:top-[-50%] max-lg:left-[50%] max-lg:delay-[50ms] group-hover:top-[-50%] group-hover:left-[50%] group-hover:delay-[50ms]' : ''}
                      ${idx === 4 ? 'max-lg:top-[140%] max-lg:left-[40%] max-lg:delay-[800ms] group-hover:top-[140%] group-hover:left-[40%] group-hover:delay-[800ms]' : ''}
                      ${idx === 5 ? 'max-lg:top-[30%] max-lg:left-[5%] max-lg:delay-[250ms] group-hover:top-[30%] group-hover:left-[5%] group-hover:delay-[250ms]' : ''}
                      ${idx === 6 ? 'max-lg:top-[70%] max-lg:left-[95%] max-lg:delay-[900ms] group-hover:top-[70%] group-hover:left-[95%] group-hover:delay-[900ms]' : ''}
                      ${idx === 7 ? 'max-lg:top-[50%] max-lg:left-[95%] max-lg:delay-[420ms] group-hover:top-[50%] group-hover:left-[95%] group-hover:delay-[420ms]' : ''}`}
                    >
                      <p className='text-[8px] text-center text-dawn-50 text-opacity-80'>
                        {card.question}
                      </p>
                      <Image src="/images/hsf-card-footer.svg" alt="Cards" className='absolute bottom-3' width={35} height={35} />
                    </div>
                  ))}
                </div>
                <div className='pt-5' >
                  <h4 className={`${circular.className} text-xl text-orange-50`} >Hablemos Sin Filtro App</h4>
                </div>
                <div className=''>
                  <p className={`${lato.className} text-sm text-orange-50 text-justify mt-3 text-opacity-60`} >
                    A small side project that I developed solo for a local brand called &quot;Hablemos Sin Filtro&quot;. The application consists of a card game designed to spark meaningful conversations. Currently, with around 1,500 monthly active users, the application is built with React Native and Firebase and is available for both iOS and Android.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
    </>
  );
}

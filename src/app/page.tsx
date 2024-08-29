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

const techItemStyle = "flex flex-row items-center text-orange-50 tracking-wide rounded-[0.9rem] px-3.5 py-1.5 relative"

const technologies = [
  {
    name: "TypeScript",
    icon: "/images/ts-icon.svg",
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-bone">
      <div className="w-[80%] h-screen" >
        <div className="flex flex-row justify-start gap-3 items-center" >
          <div>
            <Image src="/images/profile.png" alt="Jorge Martínez" width={60} height={60} />
          </div>
          <div className="flex flex-col gap-0" >
            <h2 className={`${circularBold.className} font-circularBold text-2xl text-zeus`} >Jorge Martínez</h2>
            <p className={`font-lato tracking-wide  text-dawn`} >Software Engineer</p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl h-screen bg-darkGreen p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/background-pp.avif')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-darkGreen opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-darkGreen via-darkGreen/95 to-transparent">
            <div className="w-full h-full bg-gradient-to-t from-darkGreen via-darkGreen/40 to-transparent"></div>
          </div>
          <div className="relative z-10">
            <div className="flex w-fit mx-auto py-2.5 items-center justify-center rounded-[1.25rem] bg-orange-50 bg-opacity-20 pl-3 pr-5 text-orange-50 backdrop-blur-xl" >
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
        </div>
      </div>
    </main>
    </>
  );
}

import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";

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
      name: "Expo",
      icon: "/images/expo-icon.svg",
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
  ]

const techItemStyle = "flex flex-row text-xs items-center text-orange-50 tracking-wide rounded-[0.9rem] px-3.5 py-1.5 relative"

export default function TechnologiesList() {
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
  )
}

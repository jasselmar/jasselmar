"use client";
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import { lato, circular } from "@/app/utils/fonts";
import { Button } from './ui/button';
import { ArrowRightIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

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

interface ProjectItemProps {
    title: string
    description: string
    image: {
        src: string;
        alt: string;
    }
    link: string;
    techStack: {
        name: string;
        icon: string;
        size?: number
    }[];
    projectType: 'hsf' | 'tennibot';
}

export default function ProjectItem({ title, description, image, link, projectType, techStack }: ProjectItemProps) {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // TODO: Add skeleton or a loading spinner
    }
    return (
        <Link href={link} className='w-full group transition-all duration-300 ease-out hover:bg-orange-50 pl-3 pr-5 hover:bg-opacity-5 sm:flex-row flex-col cursor-pointer h-[45%] py-3 gap-4 rounded-[1.25rem] flex'>
            <div className='sm:w-[55%]' >
            <div className=' rounded-[1.25rem] flex justify-center h-full items-center bg-dawn w-full relative overflow-hidden group-hover:scale-[98%] transition-all duration-500 ease-out touch:scale-[98%]' >
                <Image src={image.src} alt={image.alt} className='scale-[80%] sm:scale-[100%] sm:group-hover:scale-[105%] max-lg:z-10 transition-all duration-500 ease-out group-hover:rotate-[10deg] max-lg:rotate-[10deg] group-hover:translate-y-[-2%] sm:touch:scale-[105%] touch:rotate-[10deg] touch:translate-y-[-2%]' width={100} height={100} />
                {projectType === 'hsf' ? (
                    cards.map((card, idx) => (
                        <div
                            key={idx} 
                            className={`absolute aspect-[2/3] bg-white w-[80px] max-md:blur-[1px] rounded-[0.4rem] shadow-md flex flex-col justify-center items-center p-4 transition-all duration-500 ease-in-out group-hover:duration-[800ms]
                            ${card.style}
                            ${idx === 0 ? 'max-lg:top-[10%] max-lg:left-[10%] max-lg:delay-[100ms] group-hover:top-[10%] group-hover:left-[-15%] group-hover:delay-[100ms]' : ''}
                            ${idx === 1 ? 'max-lg:top-[20%] max-lg:left-[90%] max-lg:delay-[150ms] group-hover:top-[-30%] group-hover:left-[90%] group-hover:delay-[150ms]' : ''}
                            ${idx === 2 ? 'max-lg:top-[80%] max-lg:left-[10%] max-lg:delay-[500ms] group-hover:top-[80%] group-hover:left-[-25%] group-hover:delay-[500ms]' : ''}
                            ${idx === 3 ? 'max-lg:top-[-50%] max-lg:left-[50%] max-lg:delay-[50ms] group-hover:top-[-50%] group-hover:left-[50%] group-hover:delay-[50ms]' : ''}
                            ${idx === 4 ? 'max-lg:top-[140%] max-lg:left-[40%] max-lg:delay-[800ms] group-hover:top-[140%] group-hover:left-[40%] group-hover:delay-[800ms]' : ''}
                            ${idx === 5 ? 'max-lg:top-[30%] max-lg:left-[5%] max-lg:delay-[250ms] group-hover:top-[30%] group-hover:left-[-20%] group-hover:delay-[250ms]' : ''}
                            ${idx === 6 ? 'max-lg:top-[70%] max-lg:left-[95%] max-lg:delay-[900ms] group-hover:top-[70%] group-hover:left-[120%] group-hover:delay-[900ms]' : ''}
                            ${idx === 7 ? 'max-lg:top-[50%] max-lg:left-[95%] max-lg:delay-[420ms] group-hover:top-[50%] group-hover:left-[125%] group-hover:delay-[420ms]' : ''}`}
                        >
                            <p className='text-[4px] text-center text-dawn-50 text-opacity-80'>
                                {card.question}
                            </p>
                            <Image src="/images/hsf-card-footer.svg" alt="Cards" className='absolute bottom-3' width={35} height={35} />
                        </div>
                    ))
                ) : (
                    // Tennis balls for Tennibot
                    Array.from({ length: 8 }).map((_, idx) => (
                        <div
                            key={idx}
                            className={`absolute w-[30px] h-[30px] rounded-full bg-gradient-to-b from-[#CFE43D] to-[#A8BC32] shadow-[0_3px_4px_rgba(0,0,0,0.1)] transition-all duration-500 ease-in-out group-hover:duration-[800ms] overflow-hidden
                            ${idx === 0 ? 'top-[10%] left-[10%] group-hover:top-[5%] group-hover:left-[-5%] group-hover:delay-[100ms]' : ''}
                            ${idx === 1 ? 'top-[20%] left-[90%] group-hover:top-[-10%] group-hover:left-[95%] group-hover:delay-[150ms]' : ''}
                            ${idx === 2 ? 'top-[80%] left-[10%] group-hover:top-[85%] group-hover:left-[-5%] group-hover:delay-[500ms]' : ''}
                            ${idx === 3 ? 'top-[-10%] left-[50%] group-hover:top-[-15%] group-hover:left-[55%] group-hover:delay-[50ms]' : ''}
                            ${idx === 4 ? 'top-[110%] left-[40%] group-hover:top-[115%] group-hover:left-[45%] group-hover:delay-[800ms]' : ''}
                            ${idx === 5 ? 'top-[30%] left-[5%] group-hover:top-[25%] group-hover:left-[-10%] group-hover:delay-[250ms]' : ''}
                            ${idx === 6 ? 'top-[70%] left-[95%] group-hover:top-[75%] group-hover:left-[105%] group-hover:delay-[900ms]' : ''}
                            ${idx === 7 ? 'top-[50%] left-[95%] group-hover:top-[55%] group-hover:left-[105%] group-hover:delay-[420ms]' : ''}`}
                        >
                            <div className="w-full h-full rounded-full border-[2px] border-[#FFFFFF50] relative">
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8L3N2Zz4=')] opacity-50"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[rgba(0,0,0,0.2)] rounded-full"></div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            </div>
            <div className='flex flex-col justify-between w-full' >
            <div>
                <h4 className={`${circular.className} text-xl text-orange-50`} >{title}</h4>
                <p className={`${lato.className} text-sm text-orange-50 text-justify mt-3 text-opacity-60`} >
                    {description}
                </p>
            </div>
            <div className='flex sm:flex-row sm:pt-2.5 pt-10 flex-col sm:items-center gap-5 justify-between px-0'>
                <div className='flex flex-row gap-3 justify-start items-center' >
                    <TooltipProvider>
                        {techStack.map((tech, idx) => {
                            return (
                                <Tooltip key={idx}>
                                    <TooltipTrigger>
                                        <Image src={tech.icon} alt={tech.name} className='hover:[filter:none] [filter:brightness(0)_saturate(100%)_invert(100%)_sepia(0%)_saturate(0%)_hue-rotate(0deg)_brightness(100%)_contrast(100%)] mb-[-2px] hover:scale-[110%] transition-all duration-500 ease-out hover:translate-y-[-2%]' width={tech.size ?? 17} height={tech.size ?? 17} />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{tech.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            )
                        })}
                    </TooltipProvider>
                </div>
                <Link href={link} className="group cursor-pointer sm:hidden" passHref>
                    <Button size="default" className={`${circular.className} sm:w-auto cursor-pointer w-full group sm:bg-transparent bg-bone text-zeus rounded-[0.75rem] `} >
                        <p className='mr-[-1rem] group-hover:mr-0 transition-all duration-300 ease-out'>Details</p> 
                        <ArrowRightIcon className='w-4 h-4 ml-[0.15rem] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-out' />
                    </Button>
                </Link>
            </div>
        </div>
    </Link>
    )
}

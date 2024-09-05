"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';
import { lato, circularBlack, circularBold, circular } from "@/app/utils/fonts";
import Header from "@/components/Header";
import { FlipWords } from '@/components/ui/flip-words';

export default function HSFApp() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between bg-bone my-20">
        <div className="w-full px-4 sm:px-0 sm:w-[90%] md:w-[80%] lg:max-w-[70%] h-auto min-h-screen py-8">
          <div className="mt-10 rounded-3xl bg-darkGreen p-4 sm:p-8 relative overflow-hidden">
            {/* Handle bg image */}
            {/* <div className="absolute inset-0 bg-[url('/images/background-pp.avif')] bg-cover bg-center"></div> */}
            <div className="absolute inset-0 bg-darkGreen opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-darkGreen via-darkGreen/95 to-transparent">
              <div className="w-full h-full bg-gradient-to-t from-darkGreen via-darkGreen/40 to-transparent"></div>
            </div>

            <div className="relative px-1.5 py-3 ">
              <div className='flex md:flex-row flex-col-reverse md:items-center gap-5 mb-8' >
                <h1 className={`${circularBold.className} text-4xl text-orange-50`}>Hablemos Sin Filtro</h1>
                <Image src="/images/hsfp-app-icon.svg" alt="HSF App Icon" className='hover:scale-[105%] transition-all duration-500 ease-out hover:translate-y-[-2%]' width={30} height={30} />
              </div>
              
              <section className="mb-12">
                <h2 className={`${circular.className} text-2xl text-orange-50 mb-4`}>Overview</h2>
                <p className={`${lato.className} text-lg text-orange-50 text-opacity-60`}>
                  This project is a fun playground for me to develop my current skills and experiment with new technologies/approaches I want to understand on a practical level. Having active users is a plus because it adds responsibility and the commitment of maintaining a good user experience while I'm experimenting. Here's a quick showcase and some of my takeaways:
                </p>
              </section>

              <section className="">
                <h2 className={`${circular.className} text-2xl text-orange-50 mb-6`}>
                  Good<FlipWords className='text-orange-50' words={["looking", "feeling"]} />
                </h2>
                <div className='flex flex-col gap-4' >
                  <div className="bg-dawn bg-opacity-80 w-full relative rounded-[1.25rem] h-[20rem] group hover:scale-[98%] transition-all duration-300 ease-out flex items-center justify-center mb-4">
                    <video className='overflow-hidden h-[90%] fit rounded-[0.5rem] group-hover:scale-[105%] transition-all duration-300 ease-out'  playsInline webkit-playsinline="true" muted autoPlay loop>
                      <source src="/videos/cards-management-demo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <p className={`${lato.className} text-lg w-[100%] text-orange-50 text-opacity-60 mb-12`}>
                    One of first challenges I faced was implementing the Cards Management feature and I had a really great time building the animations for it. It’s built with react-native-reanimated and react-native-gesture-handler, letting users drag cards around to move to the next or previous question.
                  </p>
                </div>
              </section>

              <section className="flex flex-col gap-4 mb-12">
                <div className="bg-dawn bg-opacity-80 w-full relative rounded-[1.25rem] h-[20rem] group hover:scale-[98%] transition-all duration-300 ease-out flex items-center justify-center mb-4">
                  <video className='overflow-hidden h-[90%] fit rounded-[0.5rem] group-hover:scale-[105%] transition-all duration-300 ease-out'  playsInline webkit-playsinline="true" muted autoPlay loop>
                    <source src="/videos/initial-screen-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className={`${lato.className} text-lg text-orange-50 text-opacity-60`}>
                  Recently, I decided to rebuild the initial screen of the app to make it more dynamic and engaging. I incorporated a touch of interactivity and redesigned the components to improve their visual appeal. This update not only enhances the user experience but also makes the app feel more lively and modern, setting a positive tone right from the start. 
                </p>
              </section>

              <section className="flex flex-col gap-4 mb-12">
                <div className="bg-dawn bg-opacity-80 w-full relative rounded-[1.25rem] h-[20rem] group hover:scale-[98%] transition-all duration-300 ease-out flex items-center justify-center mb-4">
                  <video className='overflow-hidden h-[90%] fit rounded-[0.5rem] group-hover:scale-[105%] transition-all duration-300 ease-out'  playsInline webkit-playsinline="true" muted autoPlay loop>
                    <source src="/videos/edition-details-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className={`${lato.className} text-lg text-orange-50 text-opacity-60`}>
                  While less of a technical challenge, another enjoyable implementation was the edition's details component built with @gorhom/bottom-sheet. I didn't like the idea of having a whole screen for the little details each edition had so I went for the bottom-sheet approach as way to show the details without taking up too much space.
                </p>
              </section>

              <section className="mb-12">
                <h2 className={`${circular.className} text-2xl text-orange-50 mb-4`}>Cost Efficiency</h2>
                <p className={`${lato.className} text-lg text-orange-50 text-opacity-60`}>
                Serverless solutions like Firebase and AWS are really good at offering practical tools for developers, but I learned that there needs to be additional layers of caution when using these tools for the beginning stages of small projects due to cost. To mitigate any potential challenges, I minimized reads from the database and balanced information storing between keeping users up to the date with accurate information in a performant way while staying within Firebase’s free tier. So far, so good! It’s all been revenue since launch, but it was definitely worth taking the time to plan to ensure cost effectiveness as the app continues to scale.
                </p>
              </section>

              <section className="mb-6">
                <h2 className={`${circular.className} text-2xl text-orange-50 mb-4`}>Takeaways</h2>
                <p className={`${lato.className} text-lg text-orange-50 text-opacity-60 mb-4`}>
                  Unfortunately, something did catch me off guard. My initial projections were quite conservative, and I didn’t anticipate much growth. However, as the local brand gained traction, there was a noticeable increase in usage. At one point, the increase was clearly too much and didn't seem organic at all, which turned out to be a bot attack. I underestimated the need for robust protection against such threats.
                </p>
                <p className={`${lato.className} text-lg text-orange-50 text-opacity-60 mb-4`}>
                  After an intense day of identifying, confirming, and mitigating the attack, I developed a crisis management plan:
                </p>
                <ul className={`${lato.className} list-disc list-inside mb-4 text-lg text-orange-50 text-opacity-60`}>
                  <li className='mb-2' >Implemented Firebase's App Check to help us protect our backend services from abuse by preventing unauthorized clients from accessing the resources.</li>
                  <li className='mb-2' >Made the initial screen dynamic based on a Firebase feature called Remote Config that would allow me to temporarily disable the usage of the app and/or enforce the update of the application to prevent the usage of a compromised version.</li>
                </ul>
                <p className={`${lato.className} text-lg text-orange-50 text-opacity-60`}>
                  While it wasn’t an ideal situation, I learned that even small projects can be vulnerable to abuse, and it's essential to have protective measures in place if your project is live.
                </p>
              </section>

              <section className='border-t border-orange-50 border-opacity-10 pt-6'>
                <p className={`${lato.className} text-lg text-orange-50 text-opacity-60 mb-4`}>
                  This project is very much an ongoing journey. There’s always a new technology to experiment with and lessons to be learned along the way. Whether it's refining the user experience, exploring practical solutions, or navigating unexpected challenges. Mistakes will happen, but they’re part of the process, and each one brings valuable insights that make the project and my developing experience better.
                </p>
              </section>

              <div className="mt-12">
                <Link href="/" passHref>
                  <Button size="default" className={`${circular.className} group hover:bg-bone text-darkGreen2 bg-bone rounded-[0.75rem]`}>
                    <ArrowLeftIcon className='w-4 h-4 mr-[0.15rem] opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300 ease-out' />
                    <p className='ml-[-1rem] group-hover:ml-0 transition-all duration-300 ease-out'>Home</p>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
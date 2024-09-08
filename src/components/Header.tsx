import { circularBlack, circularBold } from "@/app/utils/fonts";
import Link from "next/link";
import { File, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const headerClassName = `md:w-[90%] lg:max-w-[80%] fixed top-0 right-[50%] translate-x-1/2 z-40 flex w-full justify-between px-[5%] py-5 backdrop-blur-xl duration-300 sm:py-7 rounded-b-[1.5rem] ${
        isScrolled
            ? "transition-shadows bg-orange-50 bg-opacity-80 shadow-2xl shadow-stone-600/10 dark:bg-stone-900 dark:bg-opacity-80 dark:shadow-none"
            : ""
    }`;

    return (
        <header className={`${headerClassName}`}>
            <Link href="/" className="flex flex-row justify-start gap-3 items-center" >
                <div className="" >
                    <Image src="/images/profile.png" alt="Jorge Martínez" width={60} height={60} />
                </div>
                <div className="flex-col gap-0 flex" >
                    <h2 className={`${circularBold.className} font-circularBold text-2xl text-zeus`} >Jorge <span className="hidden mobilel:inline-flex">Martínez</span></h2>
                    <p className={`font-lato tracking-wide mobilel:text-md text-xs text-dawn`} >Mobile - Web</p>
                </div>
            </Link>
            <nav className="flex space-x-6 text-lg">
                <a 
                    href="mailto:jjasselmartinez@gmail.com"
                    target="_blank"
                    className="group hidden relative cursor-pointer sm:inline-flex max-h-[3.75rem] items-center justify-center overflow-hidden rounded-2xl px-5 py-4 text-lg font-bold outline-none transition duration-300 hover:bg-stone-800 hover:bg-opacity-5"
                >
                    <div className={` ${circularBold.className} text-zeus transition-all duration-300 ease-out flex items-center space-x-2`}>
                        <Mail size={18} />
                        <span >Email</span>
                    </div>
                </a>
                <a 
                    href="https://drive.google.com/file/d/12AH6OQszCvp3rDsgQgDJV7aaKXjJWdRx/view?usp=sharing"
                    target="_blank"
                    className="group relative cursor-pointer inline-flex max-h-[3.75rem] items-center justify-center overflow-hidden rounded-2xl px-5 py-4 text-lg font-bold outline-none transition duration-300 bg-stone-800 bg-opacity-5"
                >
                    <div className={` ${circularBold.className} text-zeus transition-all duration-300 ease-out flex items-center space-x-2`}>
                        <File size={18} />
                        <span >CV</span>
                    </div>
                </a>
            </nav>
        </header>
    )
}

export default Header
'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";

export default function Header(){
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() =>{

        const checkWidth = () =>{
            setIsMobile(window.innerWidth <= 768)
        };

        checkWidth();
        window.addEventListener("resize", checkWidth);
    }, [])

    return(
        <>
        {isMobile ?
        <header className="">
            <nav>
                <ul className="">
                    
                </ul>
            </nav>
        </header>
        : 
        <header className="h-3/4 w-screen grid grid-cols-5 justify-items-center items-center bg-black text-white">
            <nav className="">
                <ul className="">
                    <div onClick={() =>setIsOpen(true)} className="grid grid-cols-2 grid-rows-1 gap-2 items-center">
                        <p>Ressources</p>
                        <Image src="/Vector.svg" alt="Flèche menu dépliant" width={20} height={20}/>
                    </div>
                    {isOpen ?
                    <li>
                        <a href={"/blogs"}></a>
                        <a href={"/temoignages"}></a>
                        <a href={"/faq"}></a>
                        <a href={"/newsletter"}></a>
                    </li>
                    :
                    <li></li>
                    }
                </ul>
            </nav>
            <ul>
                <li><a href={"/login"}>Se connecter</a></li>
            </ul>
        </header>
        }
        </>
    )
}
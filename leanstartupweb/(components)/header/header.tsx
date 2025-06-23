'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
        <div className="fixed z-99 bg-white">
            <header className="h-20 w-screen grid grid-cols-2 justify-items-center items-center">
                <div className="grid justify-items-start w-3/4">
                    <Image src="/Kollab_logo_nobaseline.png" alt="" width={150} height={150}/>
                </div>
                <div className="grid justify-items-end w-3/4 text-3xl" onClick={() => setIsOpen(!isOpen)}>☰</div>
            </header>
            {isOpen ?
            <div className="h-[90vh] z-99 grid grid-rows-2 justify-items-center">
                <ul className="w-5/6 h-50 grid grid-rows-3 justify-items-start items-center">
                    <li><a href="/articles">Blog</a></li>
                    <li><a href="/temoignages">Témoignages</a></li>
                    <li><a href="/offres">Nos Offres</a></li>
                </ul>
                <div className="w-full h-full grid items-end justify-items-center">
                    <ul className="h-30 w-3/4 grid grid-rows-2 justify-items-center">
                        <li className="border rounded-3xl w-full h-3/4 grid justify-items-center items-center"><Link href={""}>S'inscrire</Link></li>
                        <li className="border rounded-3xl w-full h-3/4 bg-black text-white grid justify-items-center items-center"><Link href={""}>Se connecter</Link></li>
                    </ul>

                </div>
            </div>
            :
            <></>
            }
        </div>
        
        : 
        <header className="h-20 w-screen grid grid-cols-3 justify-items-center items-center fixed z-99 bg-white">
            <nav className="w-full">
                <ul className="w-full grid grid-cols-3 justify-items-center items-center">
                    <li><a href="/articles">Blog</a></li>
                    <li><a href="/temoignages">Témoignages</a></li>
                    <li><a href="/offres">Nos Offres</a></li>
                </ul>
            </nav>
            <Link href={"/"}><Image src="/Kollab_logo_nobaseline.png" alt={""} width={150} height={100}></Image></Link>
            <ul className="w-3/4 h-full grid grid-cols-2 gap-2 justify-items-center items-center">
                <li className="bg-white border rounded-3xl w-30 h-1/2 grid justify-items-center items-center"><Link href="/signup">S'inscrire</Link></li>
                <li className="bg-black text-white rounded-3xl w-30 h-1/2 grid justify-items-center items-center"><Link href="/login">Se connecter</Link></li>
            </ul>
            
        </header>
        }
        </>
    )
}
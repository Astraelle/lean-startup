'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";

export default function Header(){
    const [isMobile, setIsMobile] = useState(false);

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
        <header className={styles.headerMobile}>
            <nav>
                <ul className={styles.linkMobile}>
                    <li><a href={"/about"}>Qui sommes nous ?</a></li>
                    <li><a href={""}>Nos fonctionnalités</a></li>
                    <li><a href={"/"}><Image src="/Kollab_logo_icon.webp" alt="Logo de Kollab" width={60} height={60}/></a></li>
                    <li><a href={""}>Nos ressources</a></li>
                    <li><a href={""}>Nos abonnements</a></li>
                </ul>
            </nav>
        </header>
        : 
        <header>
            <a href={"/"}><Image src="/Kollab_logo_icon.webp" alt="Logo de Kollab" width={50} height={50}/></a>
            <nav className="nav-home">
                <ul className="link-home">
                    <li><a href={"/about"}>Qui sommes nous ?</a></li>
                    <li><a href="">Nos fonctionnalités</a></li>
                    <li><a href="">Nos ressources</a></li>
                    <li><a href="">Nos abonnements</a></li>
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
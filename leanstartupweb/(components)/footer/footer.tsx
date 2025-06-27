<<<<<<< Updated upstream
'use client'

import Link from "next/link";
import { useEffect, useState } from "react";


export default function Footer(){
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
            <footer className="w-[90%] m-auto h-90">
                <div className="w-40">
                    <img src="/Kollab_logo_nobaseline.png" alt="" />
                </div>
                <div className="grid grid-cols-[60vw_1fr]">
                    <input type="text" placeholder="Entrez votre email" className="border border rounded-3xl w-[90%] h-10 pl-2"/>
                    <button className="text-white bg-black rounded-3xl">S’inscrire</button>
                </div>
                <p className="text-xs pt-2">6 000 indépendants déjà connectés à nos actus. Et toi ?</p>
                <div className="grid grid-cols-3 pt-5 text-xs">
                    <div className="grid h-20">
                        <h4 className="font-bold text-sm">Kollab</h4>
                        <a href="">Tarifs</a>
                        <a href="">Contactez-nous</a>
                    </div>
                    <div className="grid h-30">
                        <h4 className="font-bold text-sm">Ressources</h4>
                        <a href="">Blog</a>
                        <a href="">FAQ</a>
                        <a href="">Témoignage</a>
                        <a href="">Newsletter</a>
                    </div>
                    <div className="grid h-40">
                        <h4 className="font-bold text-sm">Les petites<br/> lignes</h4>
                        <a href="">Mentions légales</a>
                        <a href="">Politique de confidentialité</a>
                        <a href="">Politique de cookie</a>
                        <a href="">CGU</a>
                        <a href="">CGV</a>
                    </div>
                </div>
                <div className="grid grid-cols-[1fr_30vw] text-xs border-t pt-5 border-[#1A1B191A] mt-2">
                    <p>© 2025 Kollab. Tous droits réservés.</p>
                    <div className="grid grid-cols-3 justify-items-center">
                        <Link href={"https://www.tiktok.com/@kollab_independants?utm_campaignfooter"} target="_blank"><img src="/tiktok.svg" alt="" /></Link>
                        <Link href={"https://www.instagram.com/kollab_dc"} target="_blank"><img src="/instagram.svg" alt="" /></Link>
                        <Link href={"https://www.youtube.com/@Kollab-independant?uutm_medium=website"} target="_blank"><img src="/youtube.svg" alt="" /></Link>
                    </div>
                </div>
            </footer>
            :
            <footer className="pt-20 h-100 grid grid-rows-[200px_5px_50px] w-full">
                <div className="grid xl:grid-cols-[1fr_200px_200px_200px] md:grid-cols-[1fr_100px_100px_100px] w-[90%] h-full m-auto">
                    <div className="grid grid-rows-[75px_50px_30px] items-center">
                        <img src="Kollab_logo_nobaseline.png" alt="" className="xl:w-50 md:w-30"/>
                        <div className="grid xl:grid-cols-[300px_1fr] md:grid-cols-[200px_1fr]">
                            <input type="text" name="newsletter" id="newsletter" placeholder="Entrez votre email" className="border rounded-3xl pl-2 h-10 xl:w-full md:w-3/4"/>
                            <div className="">
                                <a href="/" className="xl:ml-10 grid items-center bg-black w-30 h-10 rounded-3xl text-center text-white">S'inscrire</a>
                            </div>
                        </div>
                        <p className="md:text-[12px] xl:text-[16px]">6000 indépendants qui n’ont plus le stress des actualités, et toi ?</p>
                    </div>
                    <div className="md:text-[12px] xl:text-[16px]">
                        <h4 className="font-bold">Kollab</h4>
                        <p>Tarifs</p>
                        <p>Contactez-nous</p>
                    </div>
                    <div className="md:text-[12px] xl:text-[16px]">
                        <h4 className="font-bold">Ressources</h4>
                        <p>Blog</p>
                        <p>FAQ</p>
                        <p>Témoignages</p>
                        <p>Newsletter</p>
                    </div>
                    <div className="md:text-[12px] xl:text-[16px]">
                        <h4 className="font-bold">Les petites lignes</h4>
                        <p>Mentions légales</p>
                        <p>Politique de confidentialité</p>
                        <p>politique de cookies</p>
                        <p>CGU</p>
                        <p>CGV</p>
                    </div>
                </div>
                <span className="h-1 w-[90%] bg-[#1A1B191A] m-auto"></span>
                <div className="w-[90%] h-[50px] grid grid-cols-[300px_1fr_100px] items-center m-auto md:text-[12px] xl:text-[16px]">
                    <p>© 2025 Kollab. Tous droits réservés.</p>
                    <div></div>
                    <div className="grid grid-cols-3 justify-items-center">
                        <Link href={"https://www.tiktok.com/@kollab_independants?utm_campaignfooter"} target="_blank"><img src="/tiktok.svg" alt="" /></Link>
                        <Link href={"https://www.instagram.com/kollab_dc"} target="_blank"><img src="/instagram.svg" alt="" /></Link>
                        <Link href={"https://www.youtube.com/@Kollab-independant?uutm_medium=website"} target="_blank"><img src="/youtube.svg" alt="" /></Link>
                    </div>
                </div>
            </footer>   
            }
        
        </>

    )
=======
'use client'

import Link from "next/link";
import { useEffect, useState } from "react";


export default function Footer(){
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
            <footer className="w-[90%] m-auto h-90">
                <div className="w-40">
                    <img src="/Kollab_logo_nobaseline.png" alt="" />
                </div>
                <div className="grid grid-cols-[60vw_1fr]">
                    <input type="text" placeholder="Entrez votre email" className="border border rounded-3xl w-[90%] h-10 pl-2"/>
                    <button className="text-white bg-black rounded-3xl">S’inscrire</button>
                </div>
                <p className="text-xs pt-2">6 000 indépendants déjà connectés à nos actus. Et toi ?</p>
                <div className="grid grid-cols-3 pt-5 text-xs">
                    <div className="grid h-20">
                        <h4 className="font-bold text-sm">Kollab</h4>
                        <a href="">Tarifs</a>
                        <a href="">Contactez-nous</a>
                    </div>
                    <div className="grid h-30">
                        <h4 className="font-bold text-sm">Ressources</h4>
                        <a href="">Blog</a>
                        <a href="">FAQ</a>
                        <a href="">Témoignage</a>
                        <a href="">Newsletter</a>
                    </div>
                    <div className="grid h-40">
                        <h4 className="font-bold text-sm">Les petites<br/> lignes</h4>
                        <a href="">Mentions légales</a>
                        <a href="">Politique de confidentialité</a>
                        <a href="">Politique de cookie</a>
                        <a href="">CGU</a>
                        <a href="">CGV</a>
                    </div>
                </div>
                <div className="grid grid-cols-[1fr_30vw] text-xs border-t pt-5 border-[#1A1B191A] mt-2">
                    <p>© 2025 Kollab. Tous droits réservés.</p>
                    <div className="grid grid-cols-3 justify-items-center">
                        <Link href={"https://www.tiktok.com/@kollab_independants?utm_campaignfooter"} target="_blank"><img src="/tiktok.svg" alt="" /></Link>
                        <Link href={"https://www.instagram.com/kollab_dc"} target="_blank"><img src="/instagram.svg" alt="" /></Link>
                        <Link href={"https://www.youtube.com/@Kollab-independant?uutm_medium=website"} target="_blank"><img src="/youtube.svg" alt="" /></Link>
                    </div>
                </div>
            </footer>
            :
            <footer className="pt-20 h-100 grid grid-rows-[200px_5px_50px] w-full">
                <div className="grid xl:grid-cols-[1fr_200px_200px_200px] md:grid-cols-[1fr_100px_100px_100px] w-[90%] h-full m-auto">
                    <div className="grid grid-rows-[75px_50px_30px] items-center">
                        <img src="Kollab_logo_nobaseline.png" alt="" className="xl:w-50 md:w-30"/>
                        <div className="grid xl:grid-cols-[300px_1fr] md:grid-cols-[200px_1fr]">
                            <input type="text" name="newsletter" id="newsletter" placeholder="Entrez votre email" className="border rounded-3xl pl-2 h-10 xl:w-full md:w-3/4"/>
                            <div className="">
                                <a href="/" className="xl:ml-10 grid items-center bg-black w-30 h-10 rounded-3xl text-center text-white">S'inscrire</a>
                            </div>
                        </div>
                        <p className="md:text-[12px] xl:text-[16px]">6000 indépendants qui n’ont plus le stress des actualités, et toi ?</p>
                    </div>
                    <div className="md:text-[12px] xl:text-[16px]">
                        <h4 className="font-bold">Kollab</h4>
                        <p>Tarifs</p>
                        <p>Contactez-nous</p>
                    </div>
                    <div className="md:text-[12px] xl:text-[16px]">
                        <h4 className="font-bold">Ressources</h4>
                        <p>Blog</p>
                        <p>FAQ</p>
                        <p>Témoignages</p>
                        <p>Newsletter</p>
                    </div>
                    <div className="md:text-[12px] xl:text-[16px]">
                        <h4 className="font-bold">Les petites lignes</h4>
                        <p>Mentions légales</p>
                        <p>Politique de confidentialité</p>
                        <p>politique de cookies</p>
                        <p>CGU</p>
                        <p>CGV</p>
                    </div>
                </div>
                <span className="h-1 w-[90%] bg-[#1A1B191A] m-auto"></span>
                <div className="w-[90%] h-[50px] grid grid-cols-[300px_1fr_100px] items-center m-auto md:text-[12px] xl:text-[16px]">
                    <p>© 2025 Kollab. Tous droits réservés.</p>
                    <div></div>
                    <div className="grid grid-cols-3 justify-items-center">
                        <Link href={"https://www.tiktok.com/@kollab_independants?utm_campaignfooter"} target="_blank"><img src="/tiktok.svg" alt="" /></Link>
                        <Link href={"https://www.instagram.com/kollab_dc"} target="_blank"><img src="/instagram.svg" alt="" /></Link>
                        <Link href={"https://www.youtube.com/@Kollab-independant?uutm_medium=website"} target="_blank"><img src="/youtube.svg" alt="" /></Link>
                    </div>
                </div>
            </footer>   
            }
        
        </>

    )
>>>>>>> Stashed changes
}
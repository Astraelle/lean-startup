'use client'

import TestimonialsSection from "@/(components)/avis/avisSection";
import { Carousel } from "@/(components)/carrousel/carrousel";
import FAQ from "@/(components)/faq/faq";
import Link from "next/link";
import Breadcrumb from '../../(components)/ui/Breadcrumb';

const images = [
    '/carousel/carousel1.jpg',
    '/carousel/carousel2.jpg',
    '/carousel/carousel3.jpg',
    '/carousel/carousel4.jpg',
    '/carousel/carousel5.jpg',
]

export default function Offres(){
    return(
        <>
            <div className="pt-20">
                <div className="px-4 sm:px-6 py-2">
                    <Breadcrumb />
                </div>
                <h2 className="pl-4 sm:pl-15 w-full text-3xl sm:text-5xl font-bold">Choisis ta façon<br/> de vivre Kollab</h2>
            </div>
            <section className='min-h-[75vh] grid grid-cols-1 lg:grid-cols-[1fr_50vw] gap-4 lg:gap-0 px-4 sm:px-0 pt-10 sm:pt-20 justify-items-center pb-10'>
                <div className='border border-gray-200 rounded-lg w-full sm:w-[90%] grid gap-4 p-6 sm:p-10'>
                    <h3 className='text-2xl sm:text-3xl font-semibold'>Essentiel (Gratuit)</h3>
                    <p className='text-sm sm:text-base text-gray-600'>Rejoignez gratuitement la communauté Kollab</p>
                    <p className='text-4xl sm:text-6xl font-bold'>0.00€</p>
                    <ul className='list-disc pl-4 space-y-2 text-sm sm:text-base'>
                        <li>Accès limités à nos ressources</li>
                        <li>Droit à 5 utilisation d'IA/mois</li>
                        <li>5% de réductions sur nos coworkings partenaires</li>
                        <li>Accès restreint à l'application</li>
                    </ul>
                    <Link href={""} className='w-full sm:w-auto px-6 py-3 border border-gray-300 rounded-full text-center hover:bg-gray-50 transition-colors'>Commencer</Link>
                </div>
                <div className='bg-[#1A1B19] border border-[#1A1B19] rounded-lg w-full sm:w-[90%] grid gap-4 p-6 sm:p-10 text-white relative'>
                    <div className='absolute -top-3 sm:-top-5 left-1/2 -translate-x-1/2'>
                        <p className='bg-[#32BF84] px-4 sm:px-6 py-2 h-8 sm:h-10 text-xs sm:text-sm text-center text-white flex items-center justify-center rounded-full sm:rounded-3xl -rotate-1 whitespace-nowrap'>L'ABONNEMENT DONT TU AS BESOIN</p>
                    </div>
                    <div className='absolute bottom-3 right-3 w-8 sm:w-10 h-8 sm:h-10 bg-[#32BF84] rounded-full'></div>
                    <div className='absolute bottom-3 right-14 sm:right-20 w-8 sm:w-10 h-8 sm:h-10 bg-[#247AFD] rounded-full'></div>
                    <div className='absolute bottom-14 sm:bottom-20 right-3 w-8 sm:w-10 h-8 sm:h-10 bg-[#FFAB0F] rounded-full'></div>
                    <h3 className='text-2xl sm:text-3xl font-semibold'>Kollab +</h3>
                    <p className='text-sm sm:text-base text-gray-300'>Profitez de la pleine puissance de Kollab</p>
                    <p className='text-4xl sm:text-6xl font-bold'>19.99€<span className='text-sm sm:text-base font-normal text-gray-300'>/mois</span></p>
                    <ul className='list-disc pl-4 space-y-2 text-sm sm:text-base'>
                        <li>Accès complet à l'application</li>
                        <li>Utilisation de notre IA en illimité</li>
                        <li>Accès à toute notre bibliothèque de ressources</li>
                        <li>Accès gratuit à nos espaces de coworking partenaires</li>
                        <li>Accès aux espaces de coworking partenaires dans plus de 60 pays</li>
                        <li>Accès gratuit à 1 meet-up séminaire par mois organisé par Kollab</li>
                    </ul>
                    <Link href={""} className='w-full sm:w-auto px-6 py-3 border border-gray-300 rounded-full text-center hover:bg-gray-50 transition-colors'>Commencer</Link>
                </div>
            </section>

            <div className="pt-20 pl-4 sm:pl-15">
                <h3 className="text-4xl sm:text-5xl font-bold">ILS NOUS ONT FAIT<br/> CONFIANCE</h3>
                <p className="text-sm sm:text-base">ALORS POURQUOI PAS TOI ?</p>
            </div>

            <div className="pt-20 w-[90%] m-auto">
                <Carousel images={images}/>
            </div>

            <div>
                <TestimonialsSection/>
            </div>

            <section className='h-[75vh] pt-20 grid grid-cols-1 lg:grid-cols-[40vw_1fr] justify-items-center'>
                <div>
                    <h2 className='text-4xl sm:text-5xl font-bold'>Une question ?<br/> On a sûrement la<br/> réponse.</h2>
                    <p className='text-sm sm:text-base'>Tu n’es pas le premier à te la poser (et tu ne seras pas le dernier).</p>
                </div>
                <div className='w-full'>
                    <FAQ/>
                </div>
            </section>

            <div className="w-[90%] m-auto relative">
                <h2 className="xl:text-6xl md:text-4xl font-bold">Pas besoin d’être un grand voyageur<br/> ou un ultra-connecté.<br/> Kollab s’adresse à tous les freelances qui<br/> veulent vivre leur liberté sans s’isoler.</h2>
                <div className='absolute -bottom-6 left-3 w-10 h-10  bg-[#32BF84] rounded-full'></div>
                <div className='absolute top-3 right-20 w-10 h-10 bg-[#247AFD] rounded-full'></div>
                <div className='absolute -top-3 -left-5 w-10 h-10 bg-[#FFAB0F] rounded-full'></div>
            </div>
        </>
    )
}
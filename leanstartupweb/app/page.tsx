'use client'
 
import Link from 'next/link';
import Image from "next/image";
import KollabLandingPage from './components/KollabLandingPage'
import HomePage from '../(components)/home/homePage'
import { useEffect, useState } from 'react';

export default function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() =>{

      const checkWidth = () =>{
          setIsMobile(window.innerWidth <= 768)
      };

      checkWidth();
      window.addEventListener("resize", checkWidth);
  }, [])

  return (
    <>
      {isMobile ?
      <div></div>
      :
      <HomePage/>
      // <></>
      }
    </>
    // <KollabLandingPage />
  )
}

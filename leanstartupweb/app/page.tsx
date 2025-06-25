'use client'
 
import HomePage from '../(components)/home/homePage';
import HomePageMobile from '../(components)/home/homePageMobile';

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
      <HomePageMobile />
      :
      <HomePage/>
      // <></>
      }
    </>
  )
}

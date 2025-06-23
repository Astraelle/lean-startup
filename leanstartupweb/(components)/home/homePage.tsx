import Link from 'next/link';
import Image from "next/image";

export default function HomePage(){
    return(
        <>
            {/* Hero */}
            <section className="w-full h-[80vh] grid grid-cols-[60vw_1fr] justify-items-center items-center">

                {/* Section gauche */}
                <div className="grid grid-rows-[100px_200px_100px] pl-[50px] gap-4">

                <div className='grid items-center h-20 -rotate-1'>
                    <p className='border bg-[#32BF84] text-white rounded-3xl text-center w-100 h-10 grid items-center'>LE TOUT EN UN PENSÉ DES INDÉPENDANTS</p>
                </div>

                <div className='grid items-start grid-rows-[1fr_50px] w-full'>
                    <h1 className='font-bold text-6xl'>Indépendants mais <br/>jamais seuls.</h1>
                    <p>La plateforme d’entraide pensée pour les freelances et digital nomades :<br/> partage, lien, équilibre.</p>
                </div>

                <div className='grid justify-items-start'>
                    <button className='border rounded-3xl w-50 h-12 bg-[#1A1B19] text-white'><Link href={"/"} >Créer un compte Kollab</Link></button>
                </div>
                </div>

                {/* Section droite */}
                <div className='w-5/6 h-1/2 grid justify-items-center bg-black'>
                <Image src={'/vector.svg'} alt={''} width={50} height={50} className='bg-black'></Image>
                </div>
            </section>

            {/* Kollab, c’est plus qu’une Webapp */}
            <section className='bg-[#1A1B19] h-screen grid grid-cols-[70%_1fr]'>

                {/* Section gauche */}
                <div className='grid grid-rows-[400px_200px_1fr] border pt-20 pl-8'>
                    <div className='grid grid-rows-[100px_100px_100px] gap-1 text-white'>

                    {/* Titre */}
                        <h2 className='font-bold text-4xl'>Kollab,<br/>c'est plus qu'une Webapp</h2>


                        <div className='grid grid-rows-[50px_50px] text-[12px]'>
                            <p>C'est un espace complet pour mieux vivre l'indépendance.<br/>Sur notre site, tu retrouves des ressources pratiques pour avancer dans ta vie pro à ton rythme :</p>
                            <div className='grid grid-cols-[100px_100px_200px] justify-items-start items-center'>
                                <div className='grid grid-cols-[20px_1fr] justify-items-start items-center'>
                                    <Image src={'/guides.png'} alt={''} width={15} height={5}></Image>
                                    <p className='text-[11px]'>Guides</p>
                                </div>
                                <div className='grid grid-cols-[20px_1fr] justify-items-start items-center'>
                                    <Image src={'/meet.png'} alt={''} width={15} height={5}></Image>
                                    <p className='text-[11px]'>Meet-up</p>
                                </div>
                                <div className='grid grid-cols-[20px_1fr] justify-items-start items-center'>
                                    <Image src={'/conv.png'} alt={''} width={15} height={5}></Image>
                                    <p className='text-[11px]'>Salon conversiationnel</p>
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-rows-[50px_50px] text-[12px]'>
                            <p>C'est un espace complet pour mieux vivre l'indépendance.<br/>Sur notre site, tu retrouves des ressources pratiques pour avancer dans ta vie pro à ton rythme :</p>
                            <div className='grid grid-cols-[200px_200px_200px] justify-items-start items-center'>
                                <div className='grid grid-cols-[20px_1fr] justify-items-start items-center'>
                                    <Image src={'/local.png'} alt={''} width={15} height={5}></Image>
                                    <p>Rencontres près de chez toi</p>
                                </div>
                                <div className='grid grid-cols-[20px_1fr] justify-items-start items-center'>
                                    <Image src={'/echange.png'} alt={''} width={15} height={5}></Image>
                                    <p>échanges de services</p>
                                </div>
                                <div className='grid grid-cols-[20px_1fr] justify-items-start items-center'>
                                    <Image src={'/house.png'} alt={''} width={15} height={5}></Image>
                                    <p>Salon conversiationnel</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                <div><button><Link href={"/"} className='text-white'>Découvrir Kollab+</Link></button></div>
                <div></div>
                </div>
            </section>
        </>
    )
}
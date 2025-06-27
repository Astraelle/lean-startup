import Link from 'next/link';
import Image from "next/image";
import { Carousel } from '../carrousel/carrousel';
import FAQ from '../faq/faq';

const images = [
    '/carousel/carousel1.jpg',
    '/carousel/carousel2.jpg',
    '/carousel/carousel3.jpg',
    '/carousel/carousel4.jpg',
    '/carousel/carousel5.jpg',
]

export default function HomePage(){
    return(
        <>
            {/* Hero */}
            <section className="h-[80vh] grid grid-cols-[50vw_1fr] xl:grid-cols-[1fr_40vw] justify-items-center items-center">

                {/* Section gauche */}
                <div className="grid grid-rows-[100px_200px_100px] gap-4">

                    <div className='grid items-center h-20 -rotate-1'>
                        <p className='border bg-[#32BF84] text-white rounded-3xl text-center w-100 h-10 grid items-center'>LE TOUT EN UN PENSÉ DES INDÉPENDANTS</p>
                    </div>

                    <div className='grid items-start grid-rows-[1fr_50px] w-full'>
                        <h1 className='font-bold text-5xl xl:text-6xl'>Indépendants mais <br/>jamais seuls.</h1>
                        <p className='text-[13px] lg:text-[16px]'>La plateforme d’entraide pensée pour les freelances et digital nomades :<br/> partage, lien, équilibre.</p>
                    </div>

                    <div className='grid justify-items-start'>
                        <button className='border rounded-3xl w-50 h-12 bg-[#1A1B19] text-white'><Link href={"/"} >Créer un compte Kollab</Link></button>
                    </div>
                </div>

                {/* Section droite */}
                <div className='grid justify-items-center bg-black'>
                    <img src="/independanthero.png" alt="" className='xl:w-100 w-50'/>
                </div>
            </section>

            {/* Kollab, c’est plus qu’une Webapp */}
            <section className='bg-[#1A1B19] h-screen grid grid-cols-[65vw_1fr] xl:grid-cols-[1fr_40vw] justify-items-center'>

                {/* Section gauche */}
                <div className='grid xl:grid-rows-[375px_50px_1fr] grid-rows-[325px_50px_1fr] pt-20 pl-8'>
                    <div className='grid grid-rows-[100px_100px_100px] xl:grid-rows-[150px_100px_100px] text-white'>

                    {/* Titre */}
                        <h2 className='font-bold text-4xl xl:text-6xl'>Kollab,<br/>c'est plus qu'une Webapp</h2>


                        <div className='grid grid-rows-[50px_50px] xl:text-[16px] text-[12px]'>
                            <p>C'est un espace complet pour mieux vivre l'indépendance.<br/>Sur notre site, tu retrouves des ressources pratiques pour avancer dans ta vie pro à ton rythme :</p>
                            <div className='grid grid-cols-[100px_100px_200px] justify-items-start items-center'>
                                <div className='grid grid-cols-[20px_1fr] justify-items-start items-center'>
                                    <Image src={'/guides.png'} alt={''} width={15} height={5}></Image>
                                    <p className=''>Guides</p>
                                </div>
                                <div className='grid grid-cols-[20px_1fr] justify-items-start items-center'>
                                    <Image src={'/meet.png'} alt={''} width={15} height={5}></Image>
                                    <p className=''>Meet-up</p>
                                </div>
                                <div className='grid grid-cols-[20px_1fr] justify-items-start items-center'>
                                    <Image src={'/conv.png'} alt={''} width={15} height={5}></Image>
                                    <p className=''>Salon conversiationnel</p>
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-rows-[50px_50px] xl:text-[16px] text-[12px]'>
                            <p>C'est un espace complet pour mieux vivre l'indépendance.<br/>Sur notre site, tu retrouves des ressources pratiques pour avancer dans ta vie pro à ton rythme :</p>
                            <div className='grid xl:grid-cols-[250px_200px_200px] grid-cols-[180px_150px_200px] justify-items-start items-center'>
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
                <div>
                    <img src="/sec2img2.jpg" alt="" className='xl:w-120 w-100'/>
                </div>
                </div>
                <div className='grid justify-items-center pt-20'>
                    <img src="/sec2img.jpg" alt="" className='xl:w-100 w-75'/>
                </div>
            </section>
            <div className='bg-[#32BF84] h-8'></div>


            <section className='grid grid-cols-[1fr_50vw] pt-20 h-[75vh] justify-items-center'>
                <div className='grid grid-rows-[150px_50px_200px] pl-8'>
                    <h2 className='xl:text-5xl font-bold'>Pourquoi Kollab est<br/> nécessaire aujourd’hui</h2>
                    <p><b>Le statut d’indépendant a un prix :</b> solitude, manque de cadre et de soutien.</p>

                    <div>
                        <p>Kollab est né pour répondre à ces besoins concrets :</p>
                        <li className='pl-1'>créer de vraies connexions humaines</li>
                        <li className='pl-1'>faciliter l’entraide entre indépendants,</li>
                        <li className='pl-1'>rendre l’expérience de l’indépendance agréable , où que tu sois dans le monde.</li>
                    </div>
                </div>
                <div className='w-[40vw] grid grid-cols-2 grid-rows-2 gap-2 justify-items-center'>
                    <div className='w-full border border-[#1A1B191A] grid grid-rows-3 items-center p-3'>
                        <h3 className='text-6xl font-bold'>72%</h3>
                        <p className='text-[14px]'>des freelances déclarent souffrir de solitude</p>
                        <p className='text-[14px]'>*Nom de l'enquête, Nom de l'enquêteur, date de publication</p>
                    </div>
                    <div className='w-full border border-[#1A1B191A] grid grid-rows-3 items-center p-3'>
                        <h3 className='text-6xl font-bold'>35%</h3>
                        <p className='text-[14px]'>des digital nomades arrêtent ce mode de vie en moins d’un an, souvent à cause du manque de stabilité et de cadre</p>
                        <p className='text-[14px]'>*Nom de l'enquête, Nom de l'enquêteur, date de publication</p>
                    </div>
                    <div className='w-full border border-[#1A1B191A] grid grid-rows-3 items-center p-3'>
                        <h3 className='text-6xl font-bold'>80%</h3>
                        <p className='text-[14px]'>des freelances aimeraient avoir plus d’occasions d’échanger avec d’autres indépendants</p>
                        <p className='text-[14px]'>*Nom de l'enquête, Nom de l'enquêteur, date de publication</p>
                    </div>
                    <div className='w-full border border-[#1A1B191A] grid grid-rows-3 items-center p-3'>
                        <h3 className='text-6xl font-bold'>58%</h3>
                        <p className='text-[14px]'>des indépendants disent manquer d’accès à des ressources fiables et concrètes pour se développer</p>
                        <p className='text-[14px]'>*Nom de l'enquête, Nom de l'enquêteur, date de publication</p>
                    </div>
                </div>
            </section>

            <section className='h-[75vh] grid grid-cols-[1fr_50vw] pt-20 justify-items-center'>
                <div className='grid grid-rows-[50px_150px_100px_100px] gap-2'>
                    <div>
                        <p className='bg-[#247AFD] w-60 h-10 text-center text-white grid items-center rounded-3xl -rotate-1'>RENCONTRES EN PRÉSENTIEL</p>
                    </div>
                    <h2 className='text-5xl font-bold text-start'>Rencontres entre<br/> indépendants,<br/> sans pression</h2>
                    <p>Meet-up organisé pour la communauté et rythmé par divers activités, nous<br/> croyons en la puissance des liens humain.<br/> Rencontrez, réseautez, tissez des liens.</p>
                    <Link href={""} className='bg-[#1A1B19] w-40 h-10 text-center grid items-center rounded-3xl text-white'>Créer un compte</Link>
                </div>
                <div className='object-center w-[90%] h-full overflow-hidden'>
                    <img src="/sec4img.png" alt="" className='object-bottom'/>
                </div>
            </section>

            <section className='h-[85vh] grid grid-cols-[1fr_50vw] pt-20 justify-items-center'>
                <div className='object-center w-[90%] h-full overflow-hidden'>
                    <img src="/sec5img.png" alt="" className='object-bottom'/>
                </div>
                <div className='grid grid-rows-[50px_150px_280px_100px] gap-2'>
                    <div>
                        <p className='bg-[#FFAB0F] w-80 h-10 text-center text-white grid items-center rounded-3xl rotate-1'>MESSAGERIES & ÉCHANGES DE SERVICES</p>
                    </div>
                    <h2 className='text-5xl font-bold text-start'>Tu as besoin d’un<br/> coup de main ?<br/> Propose le tien.</h2>
                    <p>Un système de messagerie pensé pour être simple et intuitif dés la première<br/> utilisation.<br/>
                    Échangement de service, paiement, c’est à vous de voir.<br/><br/>

                    Mais profitez des services d’experts de la communauté, un besoin ou une envie<br/> particulière ?<br/><br/>

                    Notre assistant IA Kollab, sera là pour vous guider à l’aide d’un simple échange<br/> textuel, trouvez la personne qui vous correspond humainement et<br/> professionnellement pour votre projet.
                    </p>
                    <Link href={""} className='bg-[#1A1B19] w-40 h-10 text-center grid items-center rounded-3xl text-white'>Créer un compte</Link>
                </div>
            </section>

            <section className='h-[75vh] grid grid-cols-[1fr_50vw] pt-20 justify-items-center'>
                
                <div className='grid grid-rows-[50px_100px_120px_100px] gap-2'>
                    <div>
                        <p className='bg-[#32BF84] w-70 h-10 text-center text-white grid items-center rounded-3xl -rotate-1'>COWORKINGS AUTOUR DE TOI</p>
                    </div>
                    <h2 className='text-5xl font-bold text-start'>Trouve ton spot,<br/> où que tu sois.</h2>
                    <p>Notre large réseau mondial de coworking vous permettra, à moindre frais, de<br/> profitez d’endroits “comme à la maison”.<br/><br/>
                    Une map intéractive vous permettra de trouver vos coworkings, voir quels<br/> membres sont présents et bien plus à découvrir sur notre application.
                    </p>
                    <Link href={""} className='bg-[#1A1B19] w-40 h-10 text-center grid items-center rounded-3xl text-white'>Créer un compte</Link>
                </div>
                <div className='object-center w-[90%] h-full overflow-hidden'>
                    <img src="/sec6img.png" alt="" className='object-bottom'/>
                </div>
            </section>

            <div className='h-20 pt-40 pl-10'>
                <h2 className='text-5xl font-bold'>Devenez Kollab +,<br/> choisissez selon vos besoins </h2>
            </div>

            <section className='h-[75vh] grid grid-cols-[1fr_50vw] pt-40 justify-items-center'>
                <div className='border w-[90%] grid gap-2 p-10'>
                    <h3 className='text-3xl font-semibold'>Essensiel (Gratuit)</h3>
                    <p>Rejoignez gratuitement la communauté Kollab</p>
                    <p className='text-6xl font-bold'>0.00€</p>
                    <ul className='list-disc pl-4'>
                        <li>Accès limités à nos ressources</li>
                        <li>Droit à 5 utilisation d’IA/mois</li>
                        <li>5% de réductions sur nos coworkings partenaires</li>
                        <li>Accès restreint à l’application</li>
                    </ul>
                    <Link href={""} className='w-30 border rounded-3xl grid justify-items-center items-center'>Commencer</Link>
                </div>
                <div className='bg-[#1A1B19] border w-[90%] grid p-10 text-white relative'>
                    <div className='absolute -top-5 left-1/2 -translate-x-1/2'>
                        <p className='bg-[#32BF84] w-70 h-10 text-center text-white grid items-center rounded-3xl -rotate-1'>L’Abonnement DONT TU AS BESOIN</p>
                    </div>
                    <div className='absolute bottom-3 right-3 w-10 h-10 bg-[#32BF84] rounded-full'></div>
                    <div className='absolute bottom-3 right-20 w-10 h-10 bg-[#247AFD] rounded-full'></div>
                    <div className='absolute bottom-20 right-3 w-10 h-10 bg-[#FFAB0F] rounded-full'></div>
                    <h3 className='text-3xl font-semibold'>Kollab +</h3>
                    <p>Profitez de la pleine puissance de Kollab</p>
                    <p className='text-6xl font-bold'>19.99€</p>
                    <ul className='list-disc pl-4'>
                        <li>Accès complet à l’application</li>
                        <li>Utilisation de notre IA en illimité</li>
                        <li>Accès à toute notre bibliothèque de ressources</li>
                        <li>Accès gratuit à nos espaces de coworking partenaires</li>
                        <li>Accès aux espaces de coworking partenaires dans plus de 60 pays</li>
                        <li>Accès gratuit à 1 meet-up séminaire par mois organisé par Kollab</li>
                    </ul>
                    <Link href={""} className='w-30 border rounded-3xl grid justify-items-center items-center'>Commencer</Link>
                </div>
            </section>

            <section className='pt-20 grid grid-rows-2 h-screen'>
                <div className='h-full w-[90%] m-auto'>
                    <Carousel images={images}/> 
                </div>
                <div className='text-center pt-20 text-6xl font-bold'>
                    <h2>Déjà 10 000<br/> Kollaborateurs inscrits !</h2>
                </div>
            </section>

            <section className='h-screen bg-[#1A1B19] grid grid-rows-[100px_1fr] justify-items-center pt-20'>
                <div className='grid grid-cols-[45vw_1fr] w-[90%] text-white'>

                    <h2 className='text-5xl font-bold'>Qui est derrière Kollab ?</h2>
                    <p>Une équipe d’indépendants, comme toi, qui a connu l’isolement et la galère… et<br/> qui a décidé d’agir.<br/> Kollab est né d’un besoin simple : rester libre, sans être seul·e.</p>
                </div>
                <div className='h-[90%] w-[90%] grid justify-items-center'>
                    <video src="/video/explainer.mp4" controls className='w-300'></video>
                </div>
            </section>

            <section className='h-screen pt-20 grid grid-cols-[40vw_1fr] justify-items-center'>
                <div>
                    <h2 className='text-4xl font-bold'>Une question ?<br/> On a sûrement la<br/> réponse.</h2>
                    <p>Tu n’es pas le premier à te la poser (et tu ne seras pas le dernier).</p>
                </div>
                <div className='w-full'>
                    <FAQ/>
                </div>
            </section>

            <section className='w-[90%] h-[80vh] bg-[#1A1B19] m-auto grid justify-items-center grid-cols-[50vw_1fr] pt-20'>
                <div className='text-white grid grid-rows-[50px_100px_15px_50px] items-center'>
                    <div>
                        <p className='bg-[#32BF84] w-30 h-10 text-center text-white grid items-center rounded-3xl -rotate-1'>#JamaisSeul</p>
                    </div>

                    <h2 className='text-5xl font-bold'>Deviens Kollaber !</h2>
                    <p>Rencontre, échange, collabore.</p>
                    <div>
                        <p className='bg-white w-50 h-10 text-center grid items-center rounded-3xl text-black mt-100'>Je m’inscris maintenant</p>
                    </div>
                </div>
                <div className='grid justify-items-center w-[90%] overflow-hidden'>
                    <img src="/sec4img.png" alt="" />
                </div>
            </section>
        </>
    )
}
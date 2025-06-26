import Link from "next/link";
import Image from "next/image";

export default function homePageMobile(){
    return(
        <>
            <section className="bg-[url(/independanthero.png)] object-center h-screen">
                
            </section>

            <div className='lg:hidden flex flex-col min-h-screen'>
                    <div className='flex-1 flex flex-col justify-center px-6 py-16 text-white'>
                        <h2 className='font-bold text-6xl sm:text-7xl text-center mb-8'>
                            Kollab,<br/>c'est plus qu'une app
                        </h2>
                        
                        <div className='space-y-6 text-center'>
                            <p className='text-sm text-gray-300'>
                                C'est un espace complet pour mieux vivre l'indépendance.<br/>
                                Sur notre site, tu retrouves des ressources pratiques :
                            </p>
                            
                            <div className='space-y-3'>
                                <div className='flex items-center justify-center space-x-2'>
                                    <Image src='/guides.png' alt='Guides' width={16} height={16} />
                                    <p className='text-sm'>Guides</p>
                                </div>
                                <div className='flex items-center justify-center space-x-2'>
                                    <Image src='/meet.png' alt='Webinars' width={16} height={16} />
                                    <p className='text-sm'>Webinars inspirant</p>
                                </div>
                                <div className='flex items-center justify-center space-x-2'>
                                    <Image src='/conv.png' alt='Conseils' width={16} height={16} />
                                    <p className='text-sm'>Conseils</p>
                                </div>
                            </div>
                            
                            <p className='text-sm text-gray-300 pt-4'>
                                Et avec notre application, tu crées du lien, même à l'autre bout du monde :
                            </p>
                            
                            <div className='space-y-3'>
                                <div className='flex items-center justify-center space-x-2'>
                                    <Image src='/local.png' alt='Rencontres' width={16} height={16} />
                                    <p className='text-sm'>Rencontre près de toi</p>
                                </div>
                                <div className='flex items-center justify-center space-x-2'>
                                    <Image src='/echange.png' alt='Échanges' width={16} height={16} />
                                    <p className='text-sm'>Échange de services</p>
                                </div>
                                <div className='flex items-center justify-center space-x-2'>
                                    <Image src='/house.png' alt='Espaces' width={16} height={16} />
                                    <p className='text-sm'>Espaces de coworking</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='pt-8 px-4'>
                            <Link href="/signup" className='block w-full'>
                                <button className='bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors w-full'>
                                    Créer un compte
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* mobile */}
                    
                    <div className='bg-gray-50 px-6 py-12'>
                        <h2 className='font-bold text-6xl sm:text-7xl mb-6'>
                            Pourquoi Kollab est<br/>nécessaire aujourd'hui
                        </h2>
                        
                        <p className='text-gray-600 mb-8'>
                            La liberté a un prix : solitude, manque de cadre et de soutien.
                        </p>
                        
                        <div className='mb-8'>
                            <p className='text-gray-800 mb-4'>
                                Kollab est né pour répondre à ces besoins concrets :
                            </p>
                            <ul className='space-y-2 text-gray-600'>
                                <li className='flex items-start'>
                                    <span className='mr-2'>•</span>
                                    créer de vraies connexions humaines
                                </li>
                                <li className='flex items-start'>
                                    <span className='mr-2'>•</span>
                                    faciliter l'entraide entre indépendants
                                </li>
                                <li className='flex items-start'>
                                    <span className='mr-2'>•</span>
                                    rendre l'indépendance plus vivable, où que tu sois dans le monde
                                </li>
                            </ul>
                        </div>
                        
                        {/* Mobile Statistics Grid */}
                        <div className='grid grid-cols-2 gap-4'>
                            {/* Stat 1 */}
                            <div className='bg-white p-6 rounded-lg text-center'>
                                <h3 className='text-4xl font-bold mb-2'>72%</h3>
                                <p className='text-xs text-gray-600'>
                                    des freelances déclarent souffrir de solitude
                                </p>
                            </div>
                            
                            {/* Stat 2 */}
                            <div className='bg-white p-6 rounded-lg text-center'>
                                <h3 className='text-4xl font-bold mb-2'>35%</h3>
                                <p className='text-xs text-gray-600'>
                                    des digital nomades arrêtent ce mode de vie en moins d'un an
                                </p>
                            </div>
                            
                            {/* Stat 3 */}
                            <div className='bg-white p-6 rounded-lg text-center'>
                                <h3 className='text-4xl font-bold mb-2'>80%</h3>
                                <p className='text-xs text-gray-600'>
                                    des freelances veulent plus d'échanges
                                </p>
                            </div>
                            
                            {/* Stat 4 */}
                            <div className='bg-white p-6 rounded-lg text-center'>
                                <h3 className='text-4xl font-bold mb-2'>58%</h3>
                                <p className='text-xs text-gray-600'>
                                    manquent de ressources concrètes
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Mobile Images */}
                    <div className='relative h-48'>
                        <img 
                            src="/sec2img2.jpg" 
                            alt="Work environment" 
                            className='absolute inset-0 w-full h-full object-cover'
                        />
                    </div>
                </div>

            {/* Mobile Layout */}
            {/* Mobile Image */}
            <div className='relative h-64 bg-gray-100 rounded-lg overflow-hidden max-w-md mx-auto'>
                <img 
                    src="/sec4img.png" 
                    alt="Rencontres" 
                    className='absolute inset-0 w-full h-full object-cover'
                />
            </div>

            <div className='bg-gray-50 px-6 py-12'>
                <div className='inline-block mb-6'>
                    <p className='bg-[#247AFD] text-white text-xs font-medium px-4 py-2 rounded-full'>
                        RENCONTRES AFFINITAIRES
                    </p>
                </div>
                
                <h2 className='font-bold text-3xl sm:text-3xl mb-6'>
                    Rencontres entre<br/>
                    indépendants,<br/>
                    sans pression
                </h2>
                
                <p className='text-gray-600 mb-8 mx-auto max-w-md'>
                    Meet-up organisé pour la communauté et rythmé par divers activités, nous croyons en la puissance des liens humain.<br/>
                    Rencontrez, réseautez, tissez des liens.
                </p>
                
                <Link href="/signup" className='block mb-8'>
                    <button className='w-full max-w-sm mx-auto bg-black text-white font-medium py-4 rounded-full hover:bg-gray-800 transition-colors'>
                        Créer un compte
                    </button>
                </Link>
                
                
            </div>
                <div className='lg:hidden'>
                </div>
        </>
    )
}
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
            <section className="min-h-screen flex items-center relative overflow-hidden">
                {/* Mobile background image */}
                <div className="absolute inset-0 lg:hidden">
                    <img 
                        src="/independanthero.png" 
                        alt="" 
                        className="absolute bottom-0 right-0 w-[80%] opacity-20"
                    />
                </div>
                
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        
                        {/* Section gauche */}
                        <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                            
                            {/* Badge */}
                            <div className="flex justify-center lg:justify-start">
                                <p className="bg-[#32BF84] text-white text-xs lg:text-sm font-medium px-4 lg:px-6 py-2 rounded-full uppercase tracking-wide">
                                    LE TOUT EN UN PENSÉ DES INDÉPENDANTS
                                </p>
                            </div>
                            
                            {/* Heading */}
                            <div className="space-y-4">
                                <h1 className="font-bold text-4xl sm:text-5xl lg:text-7xl leading-tight">
                                    Indépendants mais<br/>jamais seul(e)s.
                                </h1>
                                <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-md lg:max-w-lg mx-auto lg:mx-0">
                                    La plateforme d'entraide pensée pour les digital nomades : partage, lien, équilibre.
                                </p>
                            </div>
                            
                            {/* CTA Button */}
                            <div className="pt-4 lg:pt-0">
                                <Link href="/signup" className="inline-block w-full lg:w-auto">
                                    <button className="bg-black text-white font-medium px-6 lg:px-8 py-3 lg:py-4 rounded-full hover:bg-gray-800 transition-colors w-full lg:w-auto">
                                        Créer un compte Kollab
                                    </button>
                                </Link>
                            </div>
                        </div>
                        
                        {/* Section droite - Phone mockup (Desktop only) */}
                        <div className="hidden lg:block relative lg:flex justify-center lg:justify-end">
                            <div className="relative">
                                <img 
                                    src="/independanthero.png" 
                                    alt="Kallab app mockup" 
                                    className="w-full max-w-md lg:max-w-lg xl:max-w-xl"
                                />
                                {/* Decorative elements */}
                                <div className="absolute -bottom-10 -right-10 flex gap-2">
                                    <div className="w-16 h-16 bg-[#32BF84] rounded-full"></div>
                                    <div className="w-16 h-16 bg-[#FFAB0F] rounded-full"></div>
                                </div>
                                <div className="absolute -top-10 -left-10">
                                    <div className="w-20 h-20 bg-black rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* Kollab, c'est plus qu'une Webapp */}
            <section className='bg-[#1A1B19] min-h-screen relative overflow-hidden'>
                {/* Desktop Layout */}
                <div className='hidden lg:grid lg:grid-cols-2 h-screen'>
                    {/* Left Content */}
                    <div className='flex flex-col justify-center px-16 space-y-6 text-white'>
                        <h2 className='font-bold text-6xl xl:text-7xl'>
                            Kollab,<br/>c'est plus qu'une Webapp
                        </h2>
                        
                        <div className='space-y-6'>
                            <p className='text-lg text-gray-300 max-w-xl'>
                                C'est un espace complet pour mieux vivre l'indépendance.<br/>
                                Sur notre site, tu retrouves des ressources pratiques pour avancer dans ta vie pro à ton rythme :
                            </p>
                            
                            <div className='grid grid-cols-3 gap-6 max-w-xl'>
                                <div className='flex items-center space-x-2'>
                                    <Image src='/guides.png' alt='Guides' width={20} height={20} />
                                    <p className='text-sm'>Guides</p>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <Image src='/meet.png' alt='Meet-up' width={20} height={20} />
                                    <p className='text-sm'>Meet-up</p>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <Image src='/conv.png' alt='Salon' width={20} height={20} />
                                    <p className='text-sm'>Salon conversationnel</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='space-y-6 pt-4'>
                            <p className='text-lg text-gray-300'>
                                Et avec notre application, tu crées du lien, où que tu sois dans le monde :
                            </p>
                            
                            <div className='grid grid-cols-3 gap-6 max-w-xl'>
                                <div className='flex items-center space-x-2'>
                                    <Image src='/local.png' alt='Rencontres' width={20} height={20} />
                                    <p className='text-sm'>Rencontre près de chez toi</p>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <Image src='/echange.png' alt='Échanges' width={20} height={20} />
                                    <p className='text-sm'>Échange de services</p>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <Image src='/house.png' alt='Espaces' width={20} height={20} />
                                    <p className='text-sm'>Espaces de coworking partenaires</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='pt-8'>
                            <Link href="/dashboard" className='inline-block'>
                                <button className='bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors'>
                                    Découvrir Kollab
                                </button>
                            </Link>
                        </div>
                    </div>
                    
                    {/* Right Image */}
                    <div className='relative'>
                        <img 
                            src="/sec2img.jpg" 
                            alt="Person working on laptop" 
                            className='absolute inset-0 w-full h-full object-cover'
                        />
                    </div>
                </div>
                
                {/* Mobile Layout */}
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
                    
                    {/* Mobile Images */}
                    <div className='relative h-48'>
                        <img 
                            src="/sec2img2.jpg" 
                            alt="Work environment" 
                            className='absolute inset-0 w-full h-full object-cover'
                        />
                    </div>
                </div>
            </section>
            <div className='bg-[#32BF84] h-2'></div>

            <section className='min-h-screen'>
                {/* Desktop Layout */}
                <div className='hidden lg:grid lg:grid-cols-2 h-screen'>
                    {/* Left Content */}
                    <div className='flex flex-col justify-center px-16'>
                        <div className='max-w-xl space-y-6'>
                            <h2 className='font-bold text-6xl xl:text-7xl'>
                                Pourquoi Kollab est<br/>nécessaire aujourd'hui
                            </h2>
                            
                            <p className='text-lg'>
                                <span className='font-semibold'>Le statut d'indépendant a un prix :</span> solitude, manque de cadre et de soutien.
                            </p>
                            
                            <div className='space-y-3'>
                                <p className='text-lg'>Kollab est né pour répondre à ces besoins concrets :</p>
                                <ul className='space-y-2 text-lg'>
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
                                        rendre l'expérience de l'indépendance agréable, où que tu sois dans le monde
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Statistics */}
                    <div className='bg-gray-50 flex items-center justify-center px-8 lg:px-12'>
                        <div className='grid grid-cols-2 gap-4 lg:gap-6 w-full max-w-4xl'>
                            {/* Stat 1 */}
                            <div className='bg-white p-6 lg:p-10 rounded-lg shadow-sm h-full flex flex-col justify-between'>
                                <div>
                                    <h3 className='text-5xl lg:text-6xl xl:text-7xl font-bold mb-4'>72%</h3>
                                    <p className='text-gray-600 text-sm lg:text-base'>
                                        des freelances déclarent souffrir de solitude
                                    </p>
                                </div>
                                <p className='text-xs text-gray-400 mt-4'>
                                    *Nom de l'enquête, Nom de l'enquêteur, date de publication
                                </p>
                            </div>
                            
                            {/* Stat 2 */}
                            <div className='bg-white p-6 lg:p-10 rounded-lg shadow-sm h-full flex flex-col justify-between'>
                                <div>
                                    <h3 className='text-5xl lg:text-6xl xl:text-7xl font-bold mb-4'>35%</h3>
                                    <p className='text-gray-600 text-sm lg:text-base'>
                                        des digital nomades arrêtent ce mode de vie en moins d'un an, souvent à cause du manque de stabilité et de cadre
                                    </p>
                                </div>
                                <p className='text-xs text-gray-400 mt-4'>
                                    *Nom de l'enquête, Nom de l'enquêteur, date de publication
                                </p>
                            </div>
                            
                            {/* Stat 3 */}
                            <div className='bg-white p-6 lg:p-10 rounded-lg shadow-sm h-full flex flex-col justify-between'>
                                <div>
                                    <h3 className='text-5xl lg:text-6xl xl:text-7xl font-bold mb-4'>80%</h3>
                                    <p className='text-gray-600 text-sm lg:text-base'>
                                        des freelances aimeraient avoir plus d'occasions d'échanger avec d'autres indépendants
                                    </p>
                                </div>
                                <p className='text-xs text-gray-400 mt-4'>
                                    *Nom de l'enquête, Nom de l'enquêteur, date de publication
                                </p>
                            </div>
                            
                            {/* Stat 4 */}
                            <div className='bg-white p-6 lg:p-10 rounded-lg shadow-sm h-full flex flex-col justify-between'>
                                <div>
                                    <h3 className='text-5xl lg:text-6xl xl:text-7xl font-bold mb-4'>58%</h3>
                                    <p className='text-gray-600 text-sm lg:text-base'>
                                        des indépendants disent manquer d'accès à des ressources fiables et concrètes pour se développer
                                    </p>
                                </div>
                                <p className='text-xs text-gray-400 mt-4'>
                                    *Nom de l'enquête, Nom de l'enquêteur, date de publication
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Mobile Layout */}
                <div className='lg:hidden'>
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
                </div>
            </section>

            {/* Rencontres en présentiel Section */}
            <section className='min-h-screen'>
                {/* Desktop Layout */}
                <div className='hidden lg:flex h-screen'>
                    {/* Left Content */}
                    <div className='w-1/2 flex flex-col justify-center items-center px-16 bg-white'>
                        <div className='max-w-xl space-y-6'>
                            <div className='inline-block'>
                                <p className='bg-[#247AFD] text-white text-sm font-medium px-6 py-2 rounded-full -rotate-1'>
                                    RENCONTRES EN PRÉSENTIEL
                                </p>
                            </div>
                            
                            <h2 className='font-bold text-6xl xl:text-7xl leading-tight'>
                                Rencontres entre<br/>
                                indépendants,<br/>
                                sans pression
                            </h2>
                            
                            <p className='text-gray-600 text-lg mx-auto'>
                                Meet-up organisé pour la communauté et rythmé par divers activités, nous croyons en la puissance des liens humain.<br/>
                                Rencontrez, réseautez, tissez des liens.
                            </p>
                            
                            <Link href="/signup" className='inline-block'>
                                <button className='bg-black text-white font-medium px-8 py-4 rounded-full hover:bg-gray-800 transition-colors'>
                                    Créer un compte
                                </button>
                            </Link>
                        </div>
                    </div>
                    
                    {/* Right Image */}
                    <div className='w-1/2 relative bg-gray-100'>
                        <img 
                            src="/sec4img.png" 
                            alt="Rencontres indépendants" 
                            className='absolute inset-0 w-full h-full object-cover'
                        />
                    </div>
                </div>
                
                {/* Mobile Layout */}
                <div className='lg:hidden'>
                    <div className='bg-gray-50 px-6 py-12'>
                        <div className='inline-block mb-6'>
                            <p className='bg-[#247AFD] text-white text-xs font-medium px-4 py-2 rounded-full'>
                                RENCONTRES AFFINITAIRES
                            </p>
                        </div>
                        
                        <h2 className='font-bold text-6xl sm:text-7xl mb-6'>
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
                        
                        {/* Mobile Image */}
                        <div className='relative h-64 bg-gray-100 rounded-lg overflow-hidden max-w-md mx-auto'>
                            <img 
                                src="/sec4img.png" 
                                alt="Rencontres" 
                                className='absolute inset-0 w-full h-full object-cover'
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Messagerie & échanges de services Section */}
            <section className='min-h-screen'>
                {/* Desktop Layout */}
                <div className='hidden lg:flex h-screen'>
                    {/* Left Image */}
                    <div className='w-1/2 relative bg-gray-100'>
                        <img 
                            src="/sec5img.png" 
                            alt="Messagerie app" 
                            className='absolute inset-0 w-full h-full object-cover'
                        />
                    </div>
                    
                    {/* Right Content */}
                    <div className='w-1/2 flex flex-col justify-center items-center px-16 bg-white'>
                        <div className='max-w-xl space-y-6'>
                            <div className='inline-block'>
                                <p className='bg-[#FFAB0F] text-white text-sm font-medium px-6 py-2 rounded-full rotate-1'>
                                    MESSAGERIE & ÉCHANGES DE SERVICES
                                </p>
                            </div>
                            
                            <h2 className='font-bold text-6xl xl:text-7xl leading-tight'>
                                Tu as besoin d'un<br/>
                                coup de main ?<br/>
                                Propose le tien.
                            </h2>
                            
                            <div className='space-y-4 text-gray-600 text-lg'>
                                <p>
                                    Un système de messagerie pensé pour être simple et intuitif dès la première utilisation.
                                </p>
                                <p>
                                    Échangement de service, paiement, c'est à vous de voir.
                                </p>
                                <p>
                                    Mais profitez des services d'experts de la communauté, un besoin ou une envie particulière ?
                                </p>
                                <p>
                                    Notre assistant IA Kollab, sera là pour vous guider à toute d'un simple échange textuel, trouvez la personne qui vous correspond humainement et professionnellement pour votre projet.
                                </p>
                            </div>
                            
                            <Link href="/signup" className='inline-block'>
                                <button className='bg-black text-white font-medium px-8 py-4 rounded-full hover:bg-gray-800 transition-colors'>
                                    Créer un compte
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                
                {/* Mobile Layout */}
                <div className='lg:hidden'>
                    <div className='bg-gray-50 px-6 py-12'>
                        <div className='inline-block mb-6'>
                            <p className='bg-[#FFAB0F] text-white text-xs font-medium px-4 py-2 rounded-full'>
                                MESSAGERIE & ÉCHANGES DE SERVICES
                            </p>
                        </div>
                        
                        <h2 className='font-bold text-6xl sm:text-7xl mb-6'>
                            Tu as besoin d'un coup<br/>
                            de main ?<br/>
                            Propose le tien.
                        </h2>
                        
                        <div className='space-y-4 text-gray-600 mb-8 max-w-md mx-auto'>
                            <p>
                                Un système de messagerie pensé pour être simple et intuitif dès la première utilisation.
                            </p>
                            <p>
                                Échangement de service, paiement, c'est à vous de voir.
                            </p>
                            <p>
                                Mais profitez des services d'experts de la communauté, un besoin ou une envie particulière ?
                            </p>
                            <p>
                                Notre assistant IA Kollab, sera là pour vous guider à toute d'un simple échange textuel, trouvez la personne qui vous correspond humainement et professionnellement pour votre projet.
                            </p>
                        </div>
                        
                        <Link href="/signup" className='block mb-8'>
                            <button className='w-full max-w-sm mx-auto bg-black text-white font-medium py-4 rounded-full hover:bg-gray-800 transition-colors'>
                                Créer un compte
                            </button>
                        </Link>
                        
                        {/* Mobile Image */}
                        <div className='relative h-64 bg-gray-100 rounded-lg overflow-hidden max-w-md mx-auto'>
                            <img 
                                src="/sec5img.png" 
                                alt="Messagerie" 
                                className='absolute inset-0 w-full h-full object-cover'
                            />
                        </div>
                    </div>
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
                    <h2 className='text-6xl font-bold'>Qui est derrière Kollab ?</h2>
                    <p>Une équipe d’indépendants, comme toi, qui a connu l’isolement et la galère… et<br/> qui a décidé d’agir.<br/> Kollab est né d’un besoin simple : rester libre, sans être seul·e.</p>
                </div>
                <div className='bg-[#D9D9D9] h-[90%] w-[90%]'>

                </div>
            </section>

            <section className='h-screen pt-20 grid grid-cols-[40vw_1fr] justify-items-center'>
                <div>
                    <h2 className='text-6xl font-bold'>Une question ?<br/> On a sûrement la<br/> réponse.</h2>
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
                    <h2 className='text-6xl font-bold'>Deviens Kollaber !</h2>
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
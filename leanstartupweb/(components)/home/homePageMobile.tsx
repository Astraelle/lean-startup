import Link from "next/link";
import Image from "next/image";
import { Carousel } from "../carrousel/carrousel";

const images = [
  "/carousel/carousel1.jpg",
  "/carousel/carousel2.jpg",
  "/carousel/carousel3.jpg",
  "/carousel/carousel4.jpg",
  "/carousel/carousel5.jpg",
];

export default function homePageMobile() {
  return (
    <>
      <section className="bg-[url(/independanthero.png)] object-center h-screen pt-20 m-auto">
        <div className="h-full bg-gradient-to-b from-white to-transparent ">
          <div className="w-[90%] m-auto grid grid-rows-[80px_80px_350px_100px]">
            <div className="grid items-center h-20 -rotate-1">
              <p className="bg-[#32BF84] text-white rounded-3xl text-center w-80 h-10 grid items-center text-[14px]">
                LE TOUT EN UN PENSÉ DES INDÉPENDANS
              </p>
            </div>
            <h1 className="font-bold text-3xl md:text-5xl xl:text-6xl">
              Indépendants mais <br />
              jamais seuls.
            </h1>
            <p>
              La plateforme d’entraide pensée pour les digital nomades :
              partage, lien, équilibre.
            </p>
            <div className="grid justify-items-center">
              <button className="rounded-3xl w-50 h-12 bg-[#1A1B19] text-white">
                <Link href={"/"}>Créer un compte Kollab</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1B19] h-[120vh] pt-10 text-white">
        <div className="w-[90%] m-auto">
          <h2 className="font-bold text-2xl ">
            Kollab,
            <br />
            c'est plus qu'une Webapp
          </h2>
          <p>
            C’est un espace complet pour mieux vivre
            <br /> l’indépendance.
            <br />
            Sur notre site, tu retrouves des ressources
            <br /> pratiques :
          </p>
          <p className="text-[12px] pt-5">
            C'est un espace complet pour mieux vivre l'indépendance.
            <br />
            Sur notre site, tu retrouves des ressources pratiques pour avancer
            dans ta vie pro à ton rythme :
          </p>
          <div className="grid grid-cols-[100px_100px_200px] justify-items-start items-center text-[12px]">
            <div className="grid grid-cols-[20px_1fr] justify-items-start items-center">
              <Image src={"/guides.png"} alt={""} width={15} height={5}></Image>
              <p className="">Guides</p>
            </div>
            <div className="grid grid-cols-[20px_1fr] justify-items-start items-center">
              <Image src={"/meet.png"} alt={""} width={15} height={5}></Image>
              <p className="">Meet-up</p>
            </div>
            <div className="grid grid-cols-[20px_1fr] justify-items-start items-center">
              <Image src={"/conv.png"} alt={""} width={15} height={5}></Image>
              <p className="">Salon conversiationnel</p>
            </div>
          </div>

          <div className="grid grid-rows-[50px_50px] xl:text-[16px] text-[12px] pt-5">
            <p>
              C'est un espace complet pour mieux vivre l'indépendance.
              <br />
              Sur notre site, tu retrouves des ressources pratiques pour avancer
              dans ta vie pro à ton rythme :
            </p>
            <div className="grid justify-items-start items-center pt-2">
              <div className="grid grid-cols-[20px_1fr] justify-items-start items-center">
                <Image
                  src={"/local.png"}
                  alt={""}
                  width={15}
                  height={5}
                ></Image>
                <p>Rencontres près de chez toi</p>
              </div>
              <div className="grid grid-cols-[20px_1fr] justify-items-start items-center">
                <Image
                  src={"/echange.png"}
                  alt={""}
                  width={15}
                  height={5}
                ></Image>
                <p>échanges de services</p>
              </div>
              <div className="grid grid-cols-[20px_1fr] justify-items-start items-center">
                <Image
                  src={"/house.png"}
                  alt={""}
                  width={15}
                  height={5}
                ></Image>
                <p>Salon conversiationnel</p>
              </div>
            </div>
          </div>
          <button className="rounded-3xl w-50 h-12 bg-white text-black mt-10">
            <Link href={"/"}>Créer un compte Kollab</Link>
          </button>
          <img
            src="/sec2img2.jpg"
            alt="Work environment"
            className="w-full h-full object-cover pt-5"
          />
        </div>
      </section>

      <div className="lg:hidden flex flex-col min-h-screen">
        <div className="bg-gray-50 px-6 py-12">
          <h2 className="font-bold text-3xl mb-6">
            Pourquoi Kollab est
            <br />
            nécessaire aujourd'hui
          </h2>

          <p className="text-gray-600 mb-8">
            La liberté a un prix : solitude, manque de cadre et de soutien.
          </p>

          <div className="mb-8">
            <p className="text-gray-800 mb-4">
              Kollab est né pour répondre à ces besoins concrets :
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                créer de vraies connexions humaines
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                faciliter l'entraide entre indépendants
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                rendre l'indépendance plus vivable, où que tu sois dans le monde
              </li>
            </ul>
          </div>

          {/* Mobile Statistics Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Stat 1 */}
            <div className="bg-white p-6 rounded-lg text-center">
              <h3 className="text-4xl font-bold mb-2">72%</h3>
              <p className="text-xs text-gray-600">
                des freelances déclarent souffrir de solitude
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white p-6 rounded-lg text-center">
              <h3 className="text-4xl font-bold mb-2">35%</h3>
              <p className="text-xs text-gray-600">
                des digital nomades arrêtent ce mode de vie en moins d'un an
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white p-6 rounded-lg text-center">
              <h3 className="text-4xl font-bold mb-2">80%</h3>
              <p className="text-xs text-gray-600">
                des freelances veulent plus d'échanges
              </p>
            </div>

            {/* Stat 4 */}
            <div className="bg-white p-6 rounded-lg text-center">
              <h3 className="text-4xl font-bold mb-2">58%</h3>
              <p className="text-xs text-gray-600">
                manquent de ressources concrètes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      {/* Mobile Image */}
      <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden max-w-md mx-auto">
        <img
          src="/sec4img.png"
          alt="Rencontres"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="bg-gray-50 px-6 py-12">
        <div className="inline-block mb-6">
          <p className="bg-[#247AFD] text-white text-xs font-medium px-4 py-2 rounded-full">
            RENCONTRES AFFINITAIRES
          </p>
        </div>

        <h2 className="font-bold text-3xl sm:text-3xl mb-6">
          Rencontres entre
          <br />
          indépendants,
          <br />
          sans pression
        </h2>

        <p className="text-gray-600 mb-8 mx-auto max-w-md">
          Meet-up organisé pour la communauté et rythmé par divers activités,
          nous croyons en la puissance des liens humain.
          <br />
          Rencontrez, réseautez, tissez des liens.
        </p>

        <Link href="/signup" className="block mb-8">
          <button className="w-full max-w-sm mx-auto bg-black text-white font-medium py-4 rounded-full hover:bg-gray-800 transition-colors">
            Créer un compte
          </button>
        </Link>
      </div>

      <section>
        <img src="sec5img.png" alt="" />
        <div className="w-[90%] m-auto">
          <div className="grid items-center h-20 rotate-1">
            <p className="bg-[#FFAB0F] text-white rounded-3xl text-center w-80 h-10 grid items-center text-[14px]">
              MESSAGERIE & ÉCHANGES DE SERVICES
            </p>
          </div>
          <h2 className="text-2xl">
            Tu as besoin d’un coup
            <br /> de main ?<br /> Propose le tien.
          </h2>
          <p className="pt-5">
            Un système de messagerie pensé pour être simple et intuitif dés la
            première utilisation. <br />
            Échangement de service, paiement, c’est à vous de voir. <br />
            Mais profitez des services d’experts de la communauté, un besoin ou{" "}
            <br />
            une envie particulière ?<br />
            Notre assistant IA Kollab, sera là pour vous guider à l’aide d’un{" "}
            <br />
            simple échange textuel, trouvez la personne qui vous correspond{" "}
            <br />
            humainement et professionnellement pour votre projet.
          </p>

          <Link href="/signup" className="block mb-8 pt-5">
            <button className="w-full max-w-sm mx-auto bg-black text-white font-medium py-4 rounded-full hover:bg-gray-800 transition-colors">
              Créer un compte
            </button>
          </Link>
        </div>
      </section>

      <section>
        <img src="sec6img.png" alt="" />
        <div className="w-[90%] m-auto">
          <div className="grid items-center h-20 -rotate-1">
            <p className="bg-[#32BF84] text-white rounded-3xl text-center w-60 h-10 grid items-center text-[14px]">
              COWORKINGS AUTOUR DE TOI
            </p>
          </div>
          <h2 className="text-3xl">Trouve ton spot, où que tu sois.</h2>
          <p className="pt-5 text-[15px]">
            Notre large réseau mondial de coworking vous
            <br /> permettra, à moindre frais, de profitez d’endroits
            <br /> “comme à la maison”.
            <br />
            Une map intéractive vous permettra de trouver
            <br /> vos coworkings, voir quels membres sont présents
            <br /> et bien plus à découvrir sur notre application.
          </p>

          <Link href="/signup" className="block mb-8 pt-5">
            <button className="w-full max-w-sm mx-auto bg-black text-white font-medium py-4 rounded-full hover:bg-gray-800 transition-colors">
              Créer un compte
            </button>
          </Link>
        </div>
      </section>

      <section>
        <div className="w-[90%] m-auto">
          <h2 className="text-3xl">
            Devenez Kollab +,
            <br /> choisissez selon vos
            <br /> besoins
          </h2>
          <div className="h-screen bg-[#1A1B19] mt-10 relative">
            <div className="grid items-center h-20 -rotate-1 absolute -top-10 ">
              <p className="bg-[#32BF84] text-white rounded-3xl text-center w-80 h-10 grid items-center text-[14px]">
                L'ABONNEMENT DONT TU AS BESOINS
              </p>
            </div>
            <div className="p-12 text-white">
              <h2 className="text-3xl">Kollab +</h2>
              <p className="text-[12px]">
                Profitez de la pleine puissance de Kollab
              </p>
              <p className="text-6xl font-bold pt-10">19.99€</p>
              <ul className="list-disc pl-4 pt-5">
                <li>Accès complet à l’application</li>
                <li>Utilisation de notre IA en illimité</li>
                <li>Accès à toute notre bibliothèque de ressources</li>
                <li>Accès gratuit à nos espaces de coworking partenaires</li>
                <li>
                  Accès aux espaces de coworking partenaires dans plus de 60
                  pays
                </li>
                <li>
                  Accès gratuit à 1 meet-up séminaire par mois organisé par
                  Kollab
                </li>
              </ul>
            </div>
            <div className="grid justify-items-center pt-5">
              <Link
                href={"/offres"}
                className="w-70 h-10 rounded-3xl grid justify-items-center items-center bg-white text-black"
              >
                Passer à kollab+
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="w-[90%] m-auto grid justify-items-center">
            <Carousel images={images} />
            <p className="pt-5">REJOINS</p>
            <h2 className="text-center text-4xl mb-5">Déjà 10 000 <br/>Kollaborateurs<br/> inscrits !</h2>
            <Carousel images={images} />
        </div>
      </section>

      <section className="h-[60vh] bg-[#1A1B19] mt-10">
        <div className="p-5 text-white">
            <h2 className="text-3xl">Qui est derrière Kollab ?</h2>
            <p className="text-[14px] pt-2">Une équipe d’indépendants, comme toi, qui a<br /> connu l’isolement et la galère… et qui a décidé<br /> d’agir.<br />Kollab est né d’un besoin simple : rester libre, sans<br /> être seul·e.</p>
            <div className="grid justify-items-center pt-5">
                <iframe src="/video/explainer.mp4"></iframe>
            </div>
        </div>
      </section>
    </>
  );
}

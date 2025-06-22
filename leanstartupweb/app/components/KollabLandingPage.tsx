"use client";

import React, { useState } from 'react';

const KollabLandingPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleFaqToggle = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setIsEmailValid(true);
      alert('Merci pour votre inscription !');
      setEmail('');
    } else {
      setIsEmailValid(false);
    }
  };

  const faqItems = [
    {
      question: 'Kollab est fait pour moi si je suis ou ne suis pas freelance ?',
      answer: 'Kollab s\'adresse à tous les indépendants : freelances, consultants, entrepreneurs, digital nomades... Que vous soyez débutant ou expérimenté, notre plateforme vous accompagne dans votre parcours professionnel.'
    },
    {
      question: 'Rejoindre Kollab est payant ?',
      answer: 'Non ! Kollab propose un plan gratuit "Essentiel" qui vous donne accès aux fonctionnalités de base. Vous pouvez ensuite choisir Kollab+ pour débloquer toutes les fonctionnalités premium.'
    },
    {
      question: 'Qu\'est-ce que Kollab va m\'apporter en tant qu\'indépendant ?',
      answer: 'Kollab vous apporte une communauté, des ressources pratiques, des opportunités de networking, l\'accès à des espaces de coworking, et surtout la fin de l\'isolement professionnel.'
    },
    {
      question: 'Suis-je restreint par ma localisation pour utiliser Kollab ?',
      answer: 'Pas du tout ! Kollab est conçu pour les nomades digitaux. Avec plus de 60 pays couverts par notre réseau de coworkings partenaires, vous pouvez utiliser Kollab partout dans le monde.'
    },
    {
      question: 'Comment contacter Kollab ?',
      answer: 'Vous pouvez nous contacter via notre formulaire de contact sur le site, par email à contact@kollab.com, ou directement via l\'application une fois inscrit.'
    }
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInLeft {
          from { 
            opacity: 0; 
            transform: translateX(-50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes slideInRight {
          from { 
            opacity: 0; 
            transform: translateX(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes slideInUp {
          from { 
            opacity: 0; 
            transform: translateY(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }
        
        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out;
        }
        
        .animate-bounce-slow {
          animation: bounceIn 2s ease-out;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .hover-pause:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <header className="w-full h-20 bg-white border-b border-gray-100 relative z-50 sticky top-0 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-10">
          {/* Navigation Left */}
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2 cursor-pointer group">
              <span className="text-black font-medium transition-colors duration-200 group-hover:text-green-500">Ressources</span>
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 16 16" fill="none">
                <path d="M2.5 5.5L8 11L13.5 5.5" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </div>
            <div className="flex items-center gap-2 cursor-pointer group">
              <span className="text-black font-medium transition-colors duration-200 group-hover:text-green-500">Nos Offres</span>
            </div>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center cursor-pointer group">
            <div className="flex items-center gap-1">
              <div className="w-4 h-8 bg-blue-500 rounded-sm transition-transform duration-300 group-hover:scale-110"></div>
              <div className="w-4 h-8 bg-green-500 rounded-sm transition-transform duration-300 group-hover:scale-110 delay-75"></div>
              <div className="w-2 h-2 bg-orange-400 rounded-full mt-6 transition-transform duration-300 group-hover:scale-110 delay-150"></div>
              <span className="text-2xl font-bold text-black ml-2 transition-colors duration-300 group-hover:text-green-500">KOLLAB</span>
            </div>
          </div>

          {/* Buttons Right */}
          <div className="flex items-center gap-4">
            <button className="px-6 py-3 bg-kollab-white border border-kollab-black rounded-full font-medium text-kollab-black transition-all duration-300 hover:bg-kollab-gray-light hover:border-kollab-green hover:text-kollab-green hover:scale-105 active:scale-95">
              S'inscrire
            </button>
            <button className="px-6 py-3 bg-kollab-black text-kollab-white rounded-full font-medium transition-all duration-300 hover:bg-kollab-green hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
              Se connecter
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-10 overflow-hidden">
        <div className="max-w-4xl animate-fade-in">
          <div className="mb-10">
            <div className="inline-block px-6 py-3 bg-kollab-green rounded-full text-kollab-white font-bold uppercase text-sm transform -rotate-1 mb-10 transition-all duration-300 hover:rotate-0 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
              Le tout en un pensé des indépendants
            </div>
            
            <h1 className="text-7xl font-bold text-kollab-black mb-2 leading-tight animate-slide-in-left">
              Indépendants mais jamais seuls.
            </h1>
            
            <p className="text-xl text-kollab-black mb-10 leading-relaxed animate-slide-in-left delay-200">
              La plateforme d'entraide pensée pour les freelances et digital nomades :<br/>
              partage, lien, équilibre.
            </p>
            
            <button className="px-8 py-4 bg-kollab-black text-kollab-white rounded-full font-medium transition-all duration-300 hover:bg-kollab-green hover:scale-110 active:scale-95 shadow-lg hover:shadow-2xl animate-slide-in-left delay-300 group">
              <span className="group-hover:animate-pulse">Créer un compte Kollab</span>
            </button>
          </div>
        </div>
        
        {/* Hero Image Placeholder */}
        <div className="absolute right-20 top-40 w-96 h-96 bg-kollab-gray-medium rounded-3xl animate-slide-in-right shadow-2xl transition-transform duration-500 hover:scale-105"></div>
        
        {/* Decorative Elements */}
        <div className="absolute right-0 top-80 animate-float">
          <div className="w-16 h-16 bg-kollab-green rounded-full transform rotate-45 transition-all duration-500 hover:rotate-90 hover:scale-110 shadow-lg"></div>
          <div className="w-24 h-6 bg-kollab-orange rounded-full mt-4 transform rotate-45 transition-all duration-500 hover:rotate-90 hover:scale-110 shadow-lg"></div>
          <div className="w-12 h-12 bg-kollab-black rounded-full mt-2 transition-all duration-500 hover:scale-110 shadow-lg"></div>
        </div>
      </section>

      {/* Black Section */}
      <section className="bg-black py-20 border-b-8 border-green-500 transition-all duration-500 hover:border-b-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-20 items-center">
            <div className="text-white animate-slide-in-left">
              <h2 className="text-6xl font-bold mb-8 transition-colors duration-300 hover:text-green-400">
                Kollab,<br/>c'est plus qu'une app
              </h2>
              
              <div className="mb-8">
                <p className="text-base mb-6 transition-opacity duration-300 hover:opacity-80">
                  C'est un espace complet pour mieux vivre l'indépendance.<br/>
                  Sur notre site, tu retrouves des ressources pratiques pour avancer dans ta vie pro à ton rythme :
                </p>
                
                <div className="flex gap-7 mb-8">
                  {['Guides', 'Meet-up', 'Salon conversationnel'].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 group cursor-pointer">
                      <div className="w-4 h-4 border border-white rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-green-500 group-hover:border-green-500">
                        <div className="w-2 h-2 bg-white rounded-sm transition-all duration-300 group-hover:bg-white"></div>
                      </div>
                      <span className="transition-colors duration-300 group-hover:text-green-400">{item}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-base mb-6 transition-opacity duration-300 hover:opacity-80">
                  Et avec notre application, tu crées du lien, où que tu sois dans le monde :
                </p>
                
                <div className="flex gap-7">
                  {['Rencontre près de chez toi', 'Échange de services', 'Espaces de coworking partenaires'].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 group cursor-pointer">
                      <div className="w-4 h-4 border border-white rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-orange-400 group-hover:border-orange-400">
                        <div className="w-2 h-2 bg-white rounded-sm"></div>
                      </div>
                      <span className="transition-colors duration-300 group-hover:text-orange-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="px-6 py-4 bg-white text-black rounded-full font-medium transition-all duration-300 hover:bg-green-500 hover:text-white hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                Créer un compte
              </button>
            </div>
            
            <div className="flex justify-center animate-slide-in-right">
              <div className="w-96 h-80 bg-gray-300 rounded-3xl transition-transform duration-500 hover:scale-105 shadow-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-32 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-16">
            <div className="animate-slide-in-left">
              <h2 className="text-6xl font-bold text-black mb-8 transition-colors duration-300 hover:text-green-500">
                Pourquoi Kollab est nécessaire aujourd'hui
              </h2>
              <div className="space-y-5">
                <p className="text-base text-black transition-opacity duration-300 hover:opacity-80">
                  <span className="font-bold">Le statut d'indépendant a un prix</span> : solitude, manque de cadre et de soutien.
                </p>
                <p className="text-base text-black transition-opacity duration-300 hover:opacity-80">
                  Kollab est né pour répondre à ces besoins concrets :<br/>
                  créer de vraies connexions humaines,<br/>
                  faciliter l'entraide entre indépendants,<br/>
                  rendre l'expérience de l'indépendance agréable, où que tu sois dans le monde.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-5 animate-slide-in-right">
              {[
                { stat: '72%', text: 'des freelances déclarent souffrir de solitude' },
                { stat: '35%', text: 'des digital nomades arrêtent ce mode de vie en moins d\'un an, souvent à cause du manque de stabilité et de cadre' },
                { stat: '80%', text: 'des freelances aimeraient avoir plus d\'occasions d\'échanger avec d\'autres indépendants' },
                { stat: '58%', text: 'des indépendants disent manquer d\'accès à des ressources fiables et concrètes pour se développer' }
              ].map((item, index) => (
                <div key={index} className="border border-black p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-green-500 group cursor-pointer bg-white">
                  <div className="text-7xl font-bold text-black mb-2 transition-colors duration-300 group-hover:text-green-500">{item.stat}</div>
                  <p className="text-base text-black mb-2 transition-opacity duration-300 group-hover:opacity-80">
                    {item.text}
                  </p>
                  <p className="text-xs text-gray-600">
                    *Nom de l'enquête, Nom de l'enquêteur, date de publication
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Redesigned based on Figma */}
      <section className="py-20 px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-kollab-black mb-8 font-urbanist animate-slide-in-left transition-colors duration-300 hover:text-kollab-green">
              Choisissez votre plan Kollab
            </h2>
            <p className="text-xl text-gray-600 font-urbanist max-w-2xl mx-auto">
              Rejoignez notre communauté d'indépendants avec le plan qui vous correspond
            </p>
          </div>
          
          <div className="flex justify-center items-center gap-10">
            {/* Free Plan Card */}
            <div className="bg-white border-2 border-kollab-dark-gray p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-kollab-green group animate-slide-in-left max-w-md">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-kollab-green rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-kollab-black mb-2 font-urbanist transition-colors duration-300 group-hover:text-kollab-green">
                  Essentiel
                </h3>
                <p className="text-gray-600 font-urbanist font-medium">Rejoignez gratuitement</p>
              </div>
              
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-6xl font-bold text-kollab-black font-urbanist transition-colors duration-300 group-hover:text-kollab-green">0</span>
                  <span className="text-2xl text-gray-500 ml-1">€</span>
                </div>
                <p className="text-gray-500 mt-2 font-urbanist">par mois</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {[
                  'Accès limité aux ressources',
                  '5 utilisations IA/mois',
                  '5% réduction coworkings',
                  'Accès restreint application'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-kollab-green rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-kollab-green rounded-full"></div>
                    </div>
                    <span className="font-urbanist text-kollab-black font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full px-6 py-4 bg-white border-2 border-kollab-dark-gray text-kollab-black rounded-full font-urbanist font-semibold transition-all duration-300 hover:bg-kollab-green hover:text-white hover:border-kollab-green hover:scale-105 active:scale-95">
                Commencer gratuitement
              </button>
            </div>

            {/* Premium Plan Card */}
            <div className="bg-kollab-black text-white p-8 relative rounded-3xl transition-all duration-300 hover:shadow-2xl hover:scale-105 group animate-slide-in-right max-w-md">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="px-6 py-2 bg-kollab-orange rounded-full text-white font-urbanist font-bold text-sm uppercase tracking-wide shadow-lg">
                  Populaire
                </div>
              </div>
              
              <div className="text-center mb-8 mt-4">
                <div className="w-16 h-16 bg-kollab-orange rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-2 font-urbanist transition-colors duration-300 group-hover:text-kollab-orange">
                  Kollab+
                </h3>
                <p className="text-gray-300 font-urbanist font-medium">Pleine puissance de Kollab</p>
              </div>
              
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-6xl font-bold font-urbanist transition-colors duration-300 group-hover:text-kollab-orange">19.99</span>
                  <span className="text-2xl text-gray-300 ml-1">€</span>
                </div>
                <p className="text-gray-300 mt-2 font-urbanist">par mois</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {[
                  'Accès complet à l\'application',
                  'IA illimitée',
                  'Toutes les ressources',
                  'Coworkings gratuits',
                  { text: 'Accès dans plus de ', highlight: '60 pays' },
                  '1 meet-up gratuit/mois'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-kollab-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-kollab-orange rounded-full"></div>
                    </div>
                    <span className="font-urbanist text-gray-200 font-medium">
                      {typeof feature === 'string' ? (
                        feature
                      ) : (
                        <>
                          {feature.text}
                          <span className="text-kollab-orange font-bold">{feature.highlight}</span>
                        </>
                      )}
                    </span>
                  </div>
                ))}
              </div>
              
              <button className="w-full px-6 py-4 bg-kollab-orange text-white rounded-full font-urbanist font-semibold transition-all duration-300 hover:bg-white hover:text-kollab-black hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                Commencer maintenant
              </button>
              
              {/* Decorative elements */}
              <div className="absolute bottom-8 right-8 opacity-20">
                <div className="flex flex-col gap-2">
                  <div className="w-3 h-3 bg-kollab-orange rounded-full"></div>
                  <div className="w-3 h-3 bg-kollab-green rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="text-center mt-16">
            <p className="text-gray-500 font-urbanist text-sm mb-4">Déjà plus de 10 000 professionnels nous font confiance</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-10">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Feature 1 */}
          <div className="grid grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-block px-6 py-3 bg-blue-500 rounded-full text-white font-bold uppercase text-sm transform -rotate-1 mb-6 transition-all duration-300 hover:rotate-0 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                Rencontres en présentiel
              </div>
              <h3 className="text-6xl font-bold text-black mb-6 transition-colors duration-300 hover:text-blue-500">
                Rencontres entre indépendants,<br/>sans pression
              </h3>
              <p className="text-base text-black mb-6 transition-opacity duration-300 hover:opacity-80">
                Meet-up organisé pour la communauté et rythmé par divers activités, nous croyons en la puissance des liens humain. 
                La profondeur des liens est primordiale pour un sincère épanouissement dans son activité d'indépendant. 
                Rencontrez, réseautez, tissez des liens.
              </p>
              <button className="px-6 py-4 bg-black text-white rounded-full font-medium transition-all duration-300 hover:bg-blue-500 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                Créer un compte
              </button>
            </div>
            <div className="w-full h-96 bg-gray-200 rounded-3xl animate-slide-in-right transition-transform duration-500 hover:scale-105 shadow-2xl"></div>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-2 gap-16 items-center">
            <div className="w-full h-96 bg-gray-200 rounded-3xl animate-slide-in-left transition-transform duration-500 hover:scale-105 shadow-2xl"></div>
            <div className="animate-slide-in-right">
              <div className="inline-block px-6 py-3 bg-orange-400 rounded-full text-white font-bold uppercase text-sm transform rotate-1 mb-6 transition-all duration-300 hover:rotate-0 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                Messagerie & échanges de services
              </div>
              <h3 className="text-6xl font-bold text-black mb-6 transition-colors duration-300 hover:text-orange-400">
                Tu as besoin d'un coup de main ? Propose le tien.
              </h3>
              <p className="text-base text-black mb-6 transition-opacity duration-300 hover:opacity-80">
                Un système de messagerie pensé pour être simple et intuitif dés la première utilisation. 
                Discutez et profitez d'un système de dépôt/réponse à une offre de service. 
                Échangement de service, paiement, c'est à vous de voir. Mais profitez des services d'experts de la communauté, 
                un besoin ou une envie particulière ?<br/><br/>
                Notre assistant IA Kollab, sera là pour vous guider à l'aide d'un simple échange textuel, 
                trouvez la personne qui vous correspond humainement et professionnellement pour votre projet.
              </p>
              <button className="px-6 py-4 bg-black text-white rounded-full font-medium transition-all duration-300 hover:bg-orange-400 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                En savoir plus
              </button>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-block px-6 py-3 bg-green-500 rounded-full text-white font-bold uppercase text-sm transform -rotate-1 mb-6 transition-all duration-300 hover:rotate-0 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                Coworkings autour de toi
              </div>
              <h3 className="text-6xl font-bold text-black mb-6 transition-colors duration-300 hover:text-green-500">
                Trouve ton spot,<br/>où que tu sois.
              </h3>
              <p className="text-base text-black mb-6 transition-opacity duration-300 hover:opacity-80">
                Notre large réseau mondial de coworking vous permettra, à moindre frais (inexistants pour les abonnés Kollab+), 
                de profitez d'endroits "comme à la maison". Nos partenaires vous acceuilles dans des lieux avec des repères, 
                une ambiance propre à Kollab. Une map intéractive vous permettra de trouver vos coworkings, 
                voir quels membres sont présents et bien plus à découvrir sur notre application.
              </p>
              <button className="px-6 py-4 bg-black text-white rounded-full font-medium transition-all duration-300 hover:bg-green-500 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                En savoir plus
              </button>
            </div>
            <div className="w-full h-96 bg-gray-200 rounded-3xl animate-slide-in-right transition-transform duration-500 hover:scale-105 shadow-2xl"></div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-black font-medium uppercase text-base mb-5 animate-slide-in-up">Rejoins</p>
          <h2 className="text-7xl font-bold text-black mb-12 animate-slide-in-up delay-200 transition-colors duration-300 hover:text-green-500">
            Déjà 10 000 Kollaborateurs inscrits !
          </h2>
          
          {/* Image carousel placeholder */}
          <div className="overflow-hidden h-96 mb-8 rounded-3xl">
            <div className="flex gap-5 animate-scroll hover-pause">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-80 h-96 bg-gray-300 flex-shrink-0 rounded-3xl transition-transform duration-300 hover:scale-105"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-black py-20 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-20 items-center mb-20">
            <h2 className="text-6xl font-bold text-white leading-tight animate-slide-in-left transition-colors duration-300 hover:text-green-400">
              Qui est derrière Kollab ?
            </h2>
            <p className="text-white text-base animate-slide-in-right transition-opacity duration-300 hover:opacity-80">
              Une équipe d'indépendants, comme toi, qui a connu l'isolement et la galère… et qui a décidé d'agir. 
              Kollab est né d'un besoin simple : rester libre, sans être seul·e.
            </p>
          </div>
          
          <div className="h-96 bg-gray-300 relative rounded-3xl transition-transform duration-500 hover:scale-105 shadow-2xl animate-slide-in-up">
            {/* Team image placeholder with overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border-8 border-black bg-transparent rounded-2xl transition-transform duration-300 hover:scale-110">
                <div className="w-20 h-24 border-8 border-black bg-transparent mt-16 mx-auto rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-16">
            <div className="animate-slide-in-left">
              <h2 className="text-6xl font-bold text-black mb-5 transition-colors duration-300 hover:text-green-500">
                Une question ?<br/>On a sûrement la réponse.
              </h2>
              <p className="text-base text-black transition-opacity duration-300 hover:opacity-80">
                Tu n'es pas le premier à te la poser (et tu ne seras pas le dernier).
              </p>
            </div>
            
            <div className="space-y-6 animate-slide-in-right">
              {faqItems.map((item, index) => (
                <div key={index} className="border border-black rounded-2xl bg-white transition-all duration-300 hover:shadow-xl group">
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => handleFaqToggle(index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-medium text-black flex-1 pr-6 transition-colors duration-300 group-hover:text-green-500">{item.question}</h3>
                      <div className={`w-8 h-8 border-2 border-black rounded-lg flex items-center justify-center transition-all duration-300 group-hover:border-green-500 ${openFaq === index ? 'rotate-45' : ''}`}>
                        <div className="w-4 h-0.5 bg-black group-hover:bg-green-500 transition-colors duration-300 absolute"></div>
                        <div className={`w-0.5 h-4 bg-black group-hover:bg-green-500 absolute transition-all duration-300 ${openFaq === index ? 'rotate-90 opacity-0' : ''}`}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Answer */}
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-6 text-gray-700">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-20 px-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-6 py-3 bg-orange-400 rounded-full text-white font-bold uppercase text-sm transform -rotate-1 mb-6 transition-all duration-300 hover:rotate-0 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                #JamaisSeul
              </div>
              <h2 className="text-7xl font-bold text-white mb-6 transition-colors duration-300 hover:text-orange-400">Deviens Kollaber !</h2>
              <p className="text-xl text-white mb-8 transition-opacity duration-300 hover:opacity-80">Rencontre, échange, collabore.</p>
              <button className="px-6 py-4 bg-white text-black rounded-full font-medium transition-all duration-300 hover:bg-orange-400 hover:text-white hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                Je m'inscris maintenant
              </button>
            </div>
            
            <div className="w-96 h-96 bg-gray-300 rounded-3xl transition-transform duration-500 hover:scale-105 shadow-2xl"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-10 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-8 mb-12">
            {/* Logo and Newsletter */}
            <div className="col-span-2">
              <div className="flex items-center mb-8">
                <div className="flex items-center gap-1">
                  <div className="w-4 h-8 bg-blue-500 rounded-sm"></div>
                  <div className="w-4 h-8 bg-green-500 rounded-sm"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-6"></div>
                  <span className="text-2xl font-bold text-black ml-2">KOLLAB</span>
                </div>
              </div>
              
              <form onSubmit={handleEmailSubmit} className="mb-2">
                <div className="flex gap-4">
                  <input 
                    type="email" 
                    placeholder="Entrez votre email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`flex-1 px-4 py-3 border rounded-full focus:outline-none transition-all duration-300 ${
                      isEmailValid 
                        ? 'border-gray-300 focus:border-green-500' 
                        : 'border-red-500 focus:border-red-500'
                    }`}
                  />
                  <button 
                    type="submit"
                    className="px-6 py-3 bg-black text-white rounded-full font-medium transition-all duration-300 hover:bg-green-500 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                  >
                    S'inscrire
                  </button>
                </div>
              </form>
              <p className="text-sm text-gray-500">
                6000 indépendants qui n'ont plus le stress des actualités, et toi ?
              </p>
              {!isEmailValid && (
                <p className="text-red-500 text-sm mt-2">Veuillez entrer une adresse email valide.</p>
              )}
            </div>
            
            {/* Links */}
            <div>
              <h4 className="font-semibold text-black mb-4">Kollab</h4>
              <div className="space-y-3">
                <p className="text-gray-600 text-sm cursor-pointer transition-colors duration-300 hover:text-green-500">Tarifs</p>
                <p className="text-gray-600 text-sm cursor-pointer transition-colors duration-300 hover:text-green-500">Contactez-nous</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-black mb-4">Ressources</h4>
              <div className="space-y-3">
                <p className="text-gray-600 text-sm cursor-pointer transition-colors duration-300 hover:text-green-500">Blog</p>
                <p className="text-gray-600 text-sm cursor-pointer transition-colors duration-300 hover:text-green-500">FAQ</p>
                <p className="text-gray-600 text-sm cursor-pointer transition-colors duration-300 hover:text-green-500">Témoignage</p>
                <p className="text-gray-600 text-sm cursor-pointer transition-colors duration-300 hover:text-green-500">Newsletter</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8">
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-500 text-sm"> 2025 Kollab. Tous droits réservés.</p>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-black rounded flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-green-500 hover:scale-110">
                  <div className="w-3 h-4 bg-white rounded-sm"></div>
                </div>
                <div className="w-6 h-6 bg-black rounded flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-blue-500 hover:scale-110">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <div className="w-6 h-6 bg-black rounded flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-orange-400 hover:scale-110">
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                </div>
              </div>
            </div>
            
            {/* Additional Footer Links */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-black mb-4">Ressources</h4>
                <div className="space-y-3">
                  <p className="text-gray-600 text-sm cursor-pointer transition-colors duration-300 hover:text-green-500">Blog</p>
                  <p className="text-gray-600 text-sm cursor-pointer transition-colors duration-300 hover:text-green-500">FAQ</p>
                  <p className="text-gray-600 text-sm cursor-pointer transition-colors duration-300 hover:text-green-500">Témoignage</p>
                  <p className="text-gray-600 text-sm cursor-pointer transition-colors duration-300 hover:text-green-500">Newsletter</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-black mb-4">Les petites lignes</h4>
                <div className="space-y-3">
                  <p className="text-gray-600 text-sm cursor-pointer transition-colors duration-300 hover:text-green-500">Mentions légales</p>
                  <p className="text-gray-600 text-sm cursor-pointer transition-colors duration-300 hover:text-green-500">Politique de confidentialité</p>
                  <p className="text-gray-600 text-sm cursor-pointer transition-colors duration-300 hover:text-green-500">Politique de cookie</p>
                  <p className="text-gray-600 text-sm cursor-pointer transition-colors duration-300 hover:text-green-500">CGU</p>
                  <p className="text-gray-600 text-sm cursor-pointer transition-colors duration-300 hover:text-green-500">CGV</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KollabLandingPage;

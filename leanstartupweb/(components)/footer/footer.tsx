'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-gray-900 lg:bg-white text-white lg:text-gray-900">
            {/* Section principale */}
            <div className="px-6 py-12 lg:px-16 lg:py-20">
                <div className="max-w-7xl mx-auto">
                    {/* Mobile Layout */}
                    <div className="lg:hidden space-y-8">
                        {/* Logo et Newsletter */}
                        <div className="space-y-4">
                            <img 
                                src="/Kollab_logo_nobaseline.png" 
                                alt="Kollab" 
                                className="h-8 brightness-0 invert"
                            />
                            
                            {/* Newsletter Form */}
                            <div className="flex gap-2">
                                <input 
                                    type="email" 
                                    placeholder="Entrez votre email" 
                                    className="flex-1 px-4 py-3 bg-transparent border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-white"
                                />
                                <button className="px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors">
                                    S'inscrire
                                </button>
                            </div>
                            
                            <p className="text-sm text-gray-400">
                                6 000 indépendants déjà connectés à nos actus. Et toi ?
                            </p>
                        </div>

                        {/* Liens en colonnes sur mobile */}
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-bold mb-4">Kollab</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><Link href="/tarifs" className="text-gray-400 hover:text-white">Tarifs</Link></li>
                                    <li><Link href="/contact" className="text-gray-400 hover:text-white">Contactez-nous</Link></li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="font-bold mb-4">Ressources</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                                    <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
                                    <li><Link href="/temoignages" className="text-gray-400 hover:text-white">Témoignage</Link></li>
                                    <li><Link href="/newsletter" className="text-gray-400 hover:text-white">Newsletter</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold mb-4">Les petites lignes</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/" className="text-gray-400 hover:text-white">Mentions légales</Link></li>
                                <li><Link href="/" className="text-gray-400 hover:text-white">Politique de confidentialité</Link></li>
                                <li><Link href="/" className="text-gray-400 hover:text-white">Politique de cookie</Link></li>
                                <li><Link href="/" className="text-gray-400 hover:text-white">CGU</Link></li>
                                <li><Link href="/" className="text-gray-400 hover:text-white">CGV</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden lg:grid lg:grid-cols-[1fr_auto] gap-16">
                        {/* Colonne gauche - Logo et Newsletter */}
                        <div className="space-y-6">
                            <img 
                                src="/Kollab_logo_nobaseline.png" 
                                alt="Kollab" 
                                className="h-10"
                            />
                            
                            {/* Newsletter Form */}
                            <div className="flex gap-3 max-w-md">
                                <input 
                                    type="email" 
                                    placeholder="Entrez votre email" 
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none focus:border-gray-900"
                                />
                                <button className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                                    S'inscrire
                                </button>
                            </div>
                            
                            <p className="text-sm text-gray-600">
                                6000 indépendants qui n'ont plus le stress des actualités, et toi ?
                            </p>
                        </div>

                        {/* Colonnes de droite - Liens */}
                        <div className="grid grid-cols-3 gap-12">
                            <div>
                                <h3 className="font-bold mb-4">Kollab</h3>
                                <ul className="space-y-3">
                                    <li><Link href="/tarifs" className="text-gray-600 hover:text-gray-900">Tarifs</Link></li>
                                    <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contactez-nous</Link></li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="font-bold mb-4">Ressources</h3>
                                <ul className="space-y-3">
                                    <li><Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
                                    <li><Link href="/faq" className="text-gray-600 hover:text-gray-900">FAQ</Link></li>
                                    <li><Link href="/temoignages" className="text-gray-600 hover:text-gray-900">Témoignage</Link></li>
                                    <li><Link href="/newsletter" className="text-gray-600 hover:text-gray-900">Newsletter</Link></li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="font-bold mb-4">Les petites lignes</h3>
                                <ul className="space-y-3">
                                    <li><Link href="/" className="text-gray-600 hover:text-gray-900">Mentions légales</Link></li>
                                    <li><Link href="/" className="text-gray-600 hover:text-gray-900">Politique de confidentialité</Link></li>
                                    <li><Link href="/" className="text-gray-600 hover:text-gray-900">Politique de cookie</Link></li>
                                    <li><Link href="/" className="text-gray-600 hover:text-gray-900">CGU</Link></li>
                                    <li><Link href="/" className="text-gray-600 hover:text-gray-900">CGV</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ligne de séparation - Desktop uniquement */}
            <div className="hidden lg:block border-t border-gray-200"></div>

            {/* Section copyright et réseaux sociaux */}
            <div className="px-6 py-6 lg:px-16 lg:py-8">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                    <p className="text-sm text-gray-400 lg:text-gray-600">
                        2025 Kollab. Tous droits réservés.
                    </p>
                    
                    {/* Réseaux sociaux */}
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 lg:text-gray-600 hover:text-white lg:hover:text-gray-900 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 lg:text-gray-600 hover:text-white lg:hover:text-gray-900 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 lg:text-gray-600 hover:text-white lg:hover:text-gray-900 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
'use client';

import { Post } from "../../(types)";
import API from "../../(lib)/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "../../(components)/ui/Breadcrumb";

type WPPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: {
      source_url: string;
    }[];
  };
  date: string;
  categories?: number[];
};

export default function ArticlesPage() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [activeTab, setActiveTab] = useState<'all' | 'rencontre' | 'voyage' | 'finance'>('all');
  const perPage = 6;

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const url = `https://www.charlie-pierre.com/wordpressback/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${currentPage}`;
      const res = await fetch(url);
      const data: WPPost[] = await res.json();
      setPosts(data);
      setTotalPages(parseInt(res.headers.get("x-wp-totalpages") || "1"));
    } catch (error) {
      console.error("Erreur lors de la récupération des articles", error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryName = (post: WPPost) => {
    // Pour l'instant, on retourne des catégories aléatoires pour la démo
    const categories = ['Tendance', 'Lorem', 'Innovation', 'Tech'];
    return categories[post.id % categories.length];
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    };
    const formattedDate = date.toLocaleDateString('fr-FR', options);
    // Capitaliser la première lettre
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  };

  const getDefaultImage = (index: number) => {
    // Images de démonstration pour les articles
    const images = [
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=300&fit=crop'
    ];
    return images[index % images.length];
  };

  const tabs = [
    { id: 'all', label: 'Tout' },
    { id: 'rencontre', label: 'Rencontre' },
    { id: 'voyage', label: 'Voyage' },
    { id: 'finance', label: 'Finance' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <p className="text-gray-500">Chargement des articles...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Fil d'ariane */}
        <Breadcrumb className="mb-6" />
        
        {/* Titre */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Articles</h1>

        {/* Onglets */}
        <div className="flex gap-2 mb-6 sm:mb-8 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-teal-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grille d'articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          {posts.map((post, index) => {
            const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || getDefaultImage(index);
            return (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {/* Image */}
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img 
                    src={image} 
                    alt={post.title.rendered}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Contenu */}
                <div className="p-4 sm:p-5">
                  {/* Catégorie et date */}
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 mb-2">
                    <span className="font-semibold text-gray-700">{getCategoryName(post)}</span>
                    <span>{formatDate(post.date)}</span>
                  </div>

                  {/* Titre */}
                  <Link href={`/articles/${post.slug}`}>
                    <h2 
                      className="text-lg sm:text-xl font-bold mb-2 hover:text-teal-600 transition-colors line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                  </Link>

                  {/* Extrait */}
                  <div 
                    className="text-sm sm:text-base text-gray-600 mb-3 line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered.replace(/<[^>]*>/g, '') }}
                  />

                  {/* Lien lire l'article */}
                  <Link 
                    href={`/articles/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-teal-500 text-sm font-medium hover:text-teal-600 transition-colors group"
                  >
                    Lire l'article
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 border rounded transition-colors ${
                  page === currentPage 
                    ? "bg-teal-500 text-white border-teal-500" 
                    : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
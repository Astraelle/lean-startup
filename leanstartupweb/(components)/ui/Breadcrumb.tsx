'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { usePathname } from 'next/navigation';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  const pathname = usePathname();

  // Génération automatique du fil d'ariane basé sur l'URL si pas d'items fournis
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Accueil', href: '/' }
    ];

    // Mapping des routes vers des labels lisibles
    const routeLabels: Record<string, string> = {
      'dashboard': 'Tableau de bord',
      'articles': 'Articles',
      'services': 'Services',
      'coworkings': 'Coworkings',
      'profile': 'Profil',
      'login': 'Connexion',
      'register': 'Inscription',
      'reset-password': 'Réinitialisation mot de passe',
    };

    let currentPath = '';
    paths.forEach((path, index) => {
      currentPath += `/${path}`;
      const label = routeLabels[path] || path.charAt(0).toUpperCase() + path.slice(1);
      
      // Le dernier élément n'a pas de lien
      if (index === paths.length - 1) {
        breadcrumbs.push({ label });
      } else {
        breadcrumbs.push({ label, href: currentPath });
      }
    });

    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();

  // Ne pas afficher sur la page d'accueil
  if (pathname === '/') return null;

  return (
    <nav aria-label="Fil d'ariane" className={`flex items-center space-x-1 text-sm ${className}`}>
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && (
            <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
          )}
          
          {item.href ? (
            <Link 
              href={item.href}
              className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
            >
              {index === 0 && <Home className="h-4 w-4 mr-1" />}
              <span>{item.label}</span>
            </Link>
          ) : (
            <span className="flex items-center text-gray-900 font-medium">
              {index === 0 && <Home className="h-4 w-4 mr-1" />}
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}

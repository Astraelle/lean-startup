<<<<<<< Updated upstream
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuthUser } from '../../(utils)/auth';
import ArticleForm from '../../(components)/article/page';

export default function DashboardPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const user = getAuthUser();

    if (!user) {
      router.push('/login');
    } else if (user.role !== 'admin') {
      router.push('/login');
    } else {
      setAuthorized(true);
    }
  }, [router]);

  if (authorized === null) {
    return <p className="text-center mt-10">Chargement...</p>;
  }

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard Admin</h1>
      <p className="mb-4">Bienvenue, vous pouvez créer un article ici.</p>
      <ArticleForm />

    </main>
  );
}
=======
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PencilIcon, PlusIcon, XIcon, CheckIcon, CameraIcon, MapPinIcon, BriefcaseIcon, Bot } from 'lucide-react';
import API from '../../(lib)/api';
import Image from 'next/image';
import ChatbotInline from '../../(components)/chatbot/ChatbotInline';
import Breadcrumb from '../../(components)/ui/Breadcrumb';

interface UserProfile {
  id: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  bio?: string;
  profession?: string;
  status?: string;
  location?: string;
  experience?: number;
  rating?: number;
  reviewCount?: number;
  skills?: string[];
  parcours?: {
    id: string;
    type: 'education' | 'experience' | 'project';
    title: string;
    organization: string;
    startDate?: string;
    endDate?: string;
    description?: string;
  }[];
  profileImage?: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editMode, setEditMode] = useState<'profile' | 'parcours' | 'competences' | null>(null);
  const [activeTab, setActiveTab] = useState<'profile' | 'assistant' | 'messages'>('profile');
  const [isMobile, setIsMobile] = useState(false);
  
  // États pour l'édition
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    bio: '',
    profession: '',
    status: 'Freelance',
    location: ''
  });

  const [newParcours, setNewParcours] = useState({
    type: 'experience' as 'education' | 'experience' | 'project',
    title: '',
    organization: '',
    startDate: '',
    endDate: '',
    description: ''
  });

  const [skillSearch, setSkillSearch] = useState('');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }

      const userStr = localStorage.getItem('user');
      if (userStr && userStr !== 'undefined' && userStr !== 'null') {
        try {
          const userData = JSON.parse(userStr);
          // En attendant une vraie API, on utilise les données locales
          setUser({
            id: userData.id || '1',
            username: userData.username || 'User',
            email: userData.email || 'user@example.com',
            firstName: userData.username || 'Utilisateur',
            lastName: '',
            bio: 'Passionnée de design 🎨 pour échanger, co-worker et créer du lien autour du monde.',
            profession: 'Graphiste',
            status: 'Freelance',
            location: 'Paris',
            experience: 3,
            rating: 4.6,
            reviewCount: 144,
            skills: ['Design graphique', 'UX/UI Design', 'Photoshop/Illustrator'],
            parcours: [
              {
                id: '1',
                type: 'education',
                title: 'Bachelor en design graphique',
                organization: 'ISCV Bordeaux',
                startDate: '2018',
                endDate: '2021',
                description: ''
              },
              {
                id: '2',
                type: 'experience',
                title: 'Formation spécialisée',
                organization: 'UI/UX Design en ligne',
                startDate: '2021',
                endDate: '2021',
                description: ''
              },
              {
                id: '3',
                type: 'project',
                title: "Projet côté d'or",
                organization: 'Freelance',
                startDate: '2022',
                endDate: '',
                description: ''
              }
            ],
            profileImage: '/placeholder-avatar.jpg'
          });
          
          setFormData({
            firstName: userData.username || 'Utilisateur',
            lastName: '',
            bio: 'Passionnée de design 🎨 pour échanger, co-worker et créer du lien autour du monde.',
            profession: 'Graphiste',
            status: 'Freelance',
            location: 'Paris'
          });
        } catch (error) {
          console.error('Erreur lors du parsing des données utilisateur:', error);
          // Créer un profil par défaut même en cas d'erreur
          setUser({
            id: '1',
            username: 'Utilisateur',
            email: 'user@example.com',
            firstName: 'Utilisateur',
            lastName: '',
            bio: 'Bienvenue sur Kollab !',
            profession: 'Freelance',
            status: 'Freelance',
            location: 'Paris',
            experience: 1,
            rating: 0,
            reviewCount: 0,
            skills: [],
            parcours: [],
            profileImage: '/placeholder-avatar.jpg'
          });
        }
      } else {
        // Si aucune donnée utilisateur, créer un profil par défaut
        setUser({
          id: '1',
          username: 'Utilisateur',
          email: 'user@example.com',
          firstName: 'Utilisateur',
          lastName: '',
          bio: 'Bienvenue sur Kollab !',
          profession: 'Freelance',
          status: 'Freelance',
          location: 'Paris',
          experience: 1,
          rating: 0,
          reviewCount: 0,
          skills: [],
          parcours: [],
          profileImage: '/placeholder-avatar.jpg'
        });
      }
    } catch (error) {
      console.error('Erreur lors du chargement du profil:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProfile = async () => {
    try {
      // Simuler la sauvegarde
      setUser(prev => prev ? {
        ...prev,
        ...formData
      } : null);
      setEditMode(null);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
    }
  };

  const handleAddParcours = () => {
    if (!newParcours.title || !newParcours.organization) return;
    
    const newItem = {
      id: Date.now().toString(),
      ...newParcours
    };
    
    setUser(prev => prev ? {
      ...prev,
      parcours: [...(prev.parcours || []), newItem]
    } : null);
    
    setNewParcours({
      type: 'experience',
      title: '',
      organization: '',
      startDate: '',
      endDate: '',
      description: ''
    });
  };

  const handleAddSkill = (skill: string) => {
    if (!skill || user?.skills?.includes(skill)) return;
    
    setUser(prev => prev ? {
      ...prev,
      skills: [...(prev.skills || []), skill]
    } : null);
    
    setSkillSearch('');
  };

  const handleRemoveSkill = (skill: string) => {
    setUser(prev => prev ? {
      ...prev,
      skills: prev.skills?.filter(s => s !== skill) || []
    } : null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Chargement...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Fil d'ariane */}
      <div className="max-w-6xl mx-auto px-4 py-2">
        <Breadcrumb className="mb-4" />
      </div>
      
      {/* Système d'onglets */}
      <div className={`max-w-6xl mx-auto px-4 ${isMobile ? 'py-2' : 'py-4'}`}>
        <div className={`flex space-x-1 bg-gray-100 rounded-lg p-1 ${isMobile ? 'mb-3' : 'mb-6'}`}>
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 py-2 px-4 rounded-md transition-colors ${
              activeTab === 'profile'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Mon Profil
          </button>
          
          {/* Sur mobile, afficher l'onglet Assistant IA séparément */}
          {isMobile && (
            <button
              onClick={() => setActiveTab('assistant')}
              className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                activeTab === 'assistant'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Assistant IA
            </button>
          )}
          
          <button
            onClick={() => setActiveTab('messages')}
            className={`flex-1 py-2 px-4 rounded-md transition-colors ${
              activeTab === 'messages'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Messagerie
          </button>
        </div>
      </div>

      {/* Contenu des onglets */}
      {activeTab === 'profile' ? (
        <div className="max-w-6xl mx-auto px-4">
          {/* Mode édition overlay */}
          {editMode && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20 px-4">
              <div className="bg-white rounded-2xl max-w-md w-full max-h-[80vh] overflow-y-auto">
                {/* Header du modal */}
                <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
                  <button
                    onClick={() => setEditMode(null)}
                    className="p-2"
                  >
                    <XIcon className="h-5 w-5" />
                  </button>
                  <h2 className="text-lg font-semibold">
                    {editMode === 'profile' && 'Modifier le profil'}
                    {editMode === 'parcours' && 'Modifier mon parcours'}
                    {editMode === 'competences' && 'Modifier mes compétences'}
                  </h2>
                  <div className="w-9" />
                </div>

                {/* Contenu du modal */}
                <div className="p-4">
                  {editMode === 'profile' && (
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                        <textarea
                          value={formData.bio}
                          onChange={(e) => setFormData({...formData, bio: e.target.value})}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Métier</label>
                        <select
                          value={formData.profession}
                          onChange={(e) => setFormData({...formData, profession: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        >
                          <option value="Graphiste">Graphiste</option>
                          <option value="Développeur">Développeur</option>
                          <option value="Designer">Designer</option>
                          <option value="Marketing">Marketing</option>
                          <option value="Autre">Autre</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
                        <select
                          value={formData.status}
                          onChange={(e) => setFormData({...formData, status: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        >
                          <option value="Freelance">Freelance</option>
                          <option value="Entrepreneur">Entrepreneur</option>
                          <option value="Salarié">Salarié</option>
                        </select>
                      </div>
                    </form>
                  )}

                  {editMode === 'parcours' && (
                    <div className="space-y-4">
                      <button
                        onClick={() => {}}
                        className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-teal-500 hover:text-teal-600 transition-colors flex items-center justify-center gap-2"
                      >
                        <PlusIcon className="h-5 w-5" />
                        Ajouter une expérience
                      </button>

                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-700">Pour ajouter</h3>
                        <button className="w-full p-3 bg-gray-100 rounded-lg text-left text-sm hover:bg-gray-200 transition-colors">
                          Rédaction & Copywriting
                        </button>
                        <button className="w-full p-3 bg-gray-100 rounded-lg text-left text-sm hover:bg-gray-200 transition-colors">
                          Développement web
                        </button>
                        <button className="w-full p-3 bg-gray-100 rounded-lg text-left text-sm hover:bg-gray-200 transition-colors">
                          Création de contenu
                        </button>
                        <button className="w-full p-3 bg-gray-100 rounded-lg text-left text-sm hover:bg-gray-200 transition-colors">
                          Gestion de projet
                        </button>
                        <button className="w-full p-3 bg-gray-100 rounded-lg text-left text-sm hover:bg-gray-200 transition-colors">
                          No-code
                        </button>
                        <button className="w-full p-3 bg-gray-100 rounded-lg text-left text-sm hover:bg-gray-200 transition-colors">
                          Marketing digital
                        </button>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-700">Ce que vous avez déjà</h3>
                        {user.parcours?.map((item) => (
                          <div key={item.id} className="p-3 bg-teal-500 text-white rounded-lg text-sm">
                            {item.title} - {item.organization}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {editMode === 'competences' && (
                    <div className="space-y-4">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Rechercher une compétence"
                          value={skillSearch}
                          onChange={(e) => setSkillSearch(e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleAddSkill(skillSearch);
                            }
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent pl-10"
                        />
                        <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-700">Pour graphiste</h3>
                        {['Rédaction & Copywriting', 'Développement web', 'Création de contenu', 'Gestion de projet', 'No-code', 'Marketing digital'].map((skill) => (
                          <button
                            key={skill}
                            onClick={() => handleAddSkill(skill)}
                            className="w-full p-3 bg-gray-100 rounded-lg text-left text-sm hover:bg-gray-200 transition-colors"
                            disabled={user.skills?.includes(skill)}
                          >
                            {skill}
                          </button>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-700">Ce que vous avez déjà</h3>
                        <div className="flex flex-wrap gap-2">
                          {user.skills?.map((skill) => (
                            <div
                              key={skill}
                              className="px-3 py-1 bg-teal-500 text-white rounded-full text-sm flex items-center gap-1"
                            >
                              {skill}
                              <button
                                onClick={() => handleRemoveSkill(skill)}
                                className="ml-1 hover:text-teal-200"
                              >
                                <XIcon className="h-3 w-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer du modal */}
                <div className="sticky bottom-0 bg-white border-t p-4">
                  <button
                    onClick={() => {
                      if (editMode === 'profile') {
                        handleSaveProfile();
                      } else {
                        setEditMode(null);
                      }
                    }}
                    className="w-full py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                  >
                    Sauvegarder les modifications
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Contenu principal */}
          <div className="max-w-6xl mx-auto px-4 py-8 lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Colonne de gauche - Info utilisateur */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                {/* Photo de profil et bouton modifier */}
                <div className="flex flex-col items-center mb-6">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                      {user.firstName?.[0]}{user.lastName?.[0]}
                    </div>
                    <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow">
                      <CameraIcon className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  
                  <h1 className="text-2xl font-bold text-gray-900">
                    {user.firstName} {user.lastName}
                  </h1>
                  
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <span className="font-semibold">{user.reviewCount}</span> utilisateurs
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="font-semibold">{user.experience}</span> ans
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="font-semibold">{user.rating}</span> Note Kollab
                    </span>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                      {user.profession}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                      {user.status}
                    </span>
                  </div>

                  {user.location && (
                    <div className="flex items-center gap-1 mt-3 text-sm text-gray-600">
                      <MapPinIcon className="h-4 w-4" />
                      {user.location}
                    </div>
                  )}

                  <button
                    onClick={() => setEditMode('profile')}
                    className="mt-6 w-full py-2 bg-black text-white rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                  >
                    <PencilIcon className="h-4 w-4" />
                    Modifier le profil
                  </button>
                </div>

                {/* Bio */}
                {user.bio && (
                  <div className="border-t pt-4">
                    <p className="text-gray-700">{user.bio}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Colonne de droite - Parcours et compétences */}
            <div className="lg:col-span-2 mt-6 lg:mt-0 space-y-6">
              {/* Mon parcours */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <BriefcaseIcon className="h-5 w-5" />
                    Mon parcours
                  </h2>
                  <button
                    onClick={() => setEditMode('parcours')}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <PencilIcon className="h-4 w-4 text-gray-600" />
                  </button>
                </div>

                <div className="space-y-3">
                  {user.parcours?.map((item) => (
                    <div key={item.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="flex-shrink-0 w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.organization}</p>
                        {(item.startDate || item.endDate) && (
                          <p className="text-xs text-gray-500 mt-1">
                            {item.startDate} {item.endDate && `- ${item.endDate}`}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mes compétences */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Mes compétences</h2>
                  <button
                    onClick={() => setEditMode('competences')}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <PencilIcon className="h-4 w-4 text-gray-600" />
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {user.skills?.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-teal-500 text-white rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : activeTab === 'assistant' && isMobile ? (
        /* Sur mobile, afficher le chatbot seul */
        <div className="h-[calc(100vh-4rem-3.5rem)] overflow-hidden">
          <ChatbotInline isMobile={true} />
        </div>
      ) : activeTab === 'messages' ? (
        /* Sur desktop, intégrer le chatbot dans la messagerie */
        <div className="bg-white rounded-xl shadow-sm">
          {!isMobile ? (
            <ChatbotInline isMobile={false} />
          ) : (
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Messagerie</h2>
              <p className="text-gray-600">La messagerie sera bientôt disponible.</p>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
>>>>>>> Stashed changes

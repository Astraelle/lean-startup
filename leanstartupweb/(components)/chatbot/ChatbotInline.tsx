'use client'

import { useState, useRef, useEffect } from 'react'
import { Bot, Send, User, ArrowLeft, Mic, Image } from 'lucide-react'

interface ChatbotInlineProps {
  isMobile?: boolean;
}

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  options?: string[] // Pour les boutons d'action
}

interface Profile {
  name: string
  location: string
  experience: string
  speciality: string
  rating: number
}

interface ConversationContext {
  currentFlow?: 'contact' | 'search' | null
  selectedProfile?: Profile
  contactStep?: 'initial' | 'project' | 'budget' | 'availability' | 'confirm'
  searchProfession?: string
  searchLocation?: string
  projectDescription?: string
  budget?: string
  availability?: string
}

interface ChatbotInlineProps {
  isMobile?: boolean;
}

// Base de connaissances du chatbot pour les freelances et digital nomades
const knowledgeBase = {
  greetings: [
    "👋 Bienvenue sur Kollab ! Je suis ton assistant virtuel, conçu spécialement pour accompagner les freelances et digital nomades comme toi. Je peux t'aider avec l'organisation de tes missions, trouver des espaces de coworking, gérer ton stress ou simplement discuter. Comment puis-je t'aider aujourd'hui ?",
    "Salut ! Je suis Kollab Assistant, ton compagnon virtuel dédié aux freelances et digital nomades. Comment puis-je t'aider aujourd'hui ?",
    "Hello ! Je suis là pour t'accompagner dans ton parcours d'indépendant. Qu'est-ce qui t'amène ?"
  ],
  anxiety: {
    keywords: ['stress', 'anxiété', 'anxieux', 'inquiet', 'peur', 'angoisse', 'nerveux', 'préoccupé'],
    responses: [
      "Je comprends que la vie de freelance peut être stressante. 68% des indépendants ressentent de l'anxiété. Tu n'es pas seul(e). Veux-tu parler de ce qui te préoccupe ?",
      "Les périodes d'incertitude sont normales dans notre métier. Respire profondément. Notre communauté est là pour te soutenir. Qu'est-ce qui te cause de l'anxiété ?",
      "L'anxiété est courante chez les indépendants. Notre module Home peut t'aider à mieux organiser tes missions et réduire le stress. Veux-tu que je t'en parle ?"
    ]
  },
  isolation: {
    keywords: ['seul', 'isolé', 'solitude', 'isolement', 'lonely', 'déprimé'],
    responses: [
      "73% des freelances ressentent l'isolement. Tu n'es pas seul(e) ! As-tu exploré nos coworkings éco-responsables pour rencontrer d'autres Kollabers ?",
      "L'isolement est un défi majeur pour nous. Notre communauté compte déjà de nombreux membres près de chez toi. Veux-tu que je te suggère des contacts ?",
      "Je comprends ce sentiment. Kollab est justement conçu pour briser cet isolement. Tu peux rejoindre des espaces de coworking ou échanger avec d'autres freelances."
    ]
  },
  services: {
    keywords: ['service', 'échanger', 'troc', 'compétence', 'offre', 'recherche', 'besoin'],
    responses: [
      "Kollab facilite les échanges de services ! Tu peux proposer tes compétences et bénéficier de celles des autres. Veux-tu explorer les services disponibles ou proposer les tiens ?",
      "Le troc de compétences est au cœur de Kollab. Dis-moi ce que tu recherches ou ce que tu proposes, et je t'aide à trouver les bonnes connexions.",
      "Notre système d'échange est basé sur le partage et la réciprocité. Tu veux rechercher un talent spécifique ou proposer tes services ?"
    ]
  },
  coworking: {
    keywords: ['coworking', 'espace', 'bureau', 'travailler', 'lieu', 'workspace'],
    responses: [
      "Nos espaces de coworking sont éco-responsables et favorisent la collaboration. Dans quelle ville cherches-tu un espace ?",
      "Les coworkings Kollab sont plus que des bureaux - ce sont des communautés vivantes. Je peux te montrer les espaces disponibles près de chez toi.",
      "Travailler dans un espace Kollab, c'est retrouver l'énergie du collectif. Tu veux voir les espaces disponibles ou en savoir plus sur les services proposés ?"
    ]
  },
  talent_search: {
    keywords: ['recherche', 'cherche', 'besoin', 'trouve', 'profil'],
    professions: {
      développeur: ['développeur', 'dev', 'developer', 'programmeur', 'codeur', 'coder'],
      designer: ['designer', 'graphiste', 'ux', 'ui', 'web designer', 'créatif'],
      rédacteur: ['rédacteur', 'copywriter', 'content', 'écriture', 'journaliste'],
      marketing: ['marketing', 'marketeur', 'growth', 'seo', 'sea', 'community manager'],
      photographe: ['photographe', 'photo', 'vidéaste', 'vidéo', 'cameraman']
    },
    profiles: {
      développeur: [
        { name: "Thomas Dubois", location: "Paris", experience: "7 ans", speciality: "Full-Stack & React", rating: 4.9 },
        { name: "Léa Chen", location: "Lyon", experience: "5 ans", speciality: "Frontend Vue.js", rating: 4.8 },
        { name: "Maxime Lambert", location: "Marseille", experience: "10 ans", speciality: "Backend Node.js", rating: 5.0 }
      ],
      designer: [
        { name: "Sophie Martin", location: "Paris", experience: "6 ans", speciality: "UX/UI Design", rating: 4.9 },
        { name: "Alex Moreau", location: "Bordeaux", experience: "4 ans", speciality: "Design System", rating: 4.7 },
        { name: "Julie Petit", location: "Toulouse", experience: "8 ans", speciality: "Product Design", rating: 4.8 }
      ],
      rédacteur: [
        { name: "Pierre Rousseau", location: "Paris", experience: "5 ans", speciality: "Copywriting SEO", rating: 4.8 },
        { name: "Emma Bernard", location: "Lyon", experience: "3 ans", speciality: "Content Strategy", rating: 4.7 },
        { name: "Lucas Girard", location: "Nantes", experience: "7 ans", speciality: "Brand Content", rating: 4.9 }
      ],
      marketing: [
        { name: "Sarah Cohen", location: "Paris", experience: "6 ans", speciality: "Growth Marketing", rating: 4.9 },
        { name: "David Martin", location: "Lyon", experience: "4 ans", speciality: "Marketing Digital", rating: 4.7 },
        { name: "Clara Dubois", location: "Bordeaux", experience: "5 ans", speciality: "Social Media", rating: 4.8 }
      ]
    }
  }
}

export default function ChatbotInline({ isMobile = false }: ChatbotInlineProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [context, setContext] = useState<ConversationContext>({})
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Message d'accueil au chargement
  useEffect(() => {
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text: knowledgeBase.greetings[0],
      sender: 'bot',
      timestamp: new Date()
    }
    setMessages([welcomeMessage])
  }, [])

  // Auto-scroll vers le bas uniquement dans le container des messages
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }, [messages])

  // Fonction pour convertir le markdown basique en HTML
  const renderMarkdown = (text: string): string => {
    return text
      // Gras
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      // Listes à puces
      .replace(/^• (.+)$/gm, '<li>$1</li>')
      // Retours à la ligne
      .replace(/\n/g, '<br/>')
      // Entourer les listes
      .replace(/(<li>[\s\S]*?<\/li>)/g, (match) => {
        const items = match.split('<br/>').filter(item => item.includes('<li>'))
        return '<ul class="list-disc list-inside space-y-1">' + items.join('') + '</ul>'
      })
  }

  const analyzeAndRespond = (userMessage: string): { text: string; options?: string[] } => {
    const lowerMessage = userMessage.toLowerCase()

    // Gestion du flux de contact
    if (context.currentFlow === 'contact' && context.selectedProfile) {
      return handleContactFlow(userMessage)
    }

    // Gestion du flux de recherche
    if (context.currentFlow === 'search') {
      // Si on attend la localisation
      if (context.searchProfession && !context.searchLocation) {
        setContext({ ...context, searchLocation: userMessage })
        return searchTalents(context.searchProfession, userMessage)
      }
    }

    // Détection de recherche de talents
    const searchKeywords = ['recherche', 'cherche', 'besoin', 'trouve']
    const hasSearchKeyword = searchKeywords.some(keyword => lowerMessage.includes(keyword))
    
    if (hasSearchKeyword) {
      // Chercher la profession mentionnée
      for (const [professionKey, aliases] of Object.entries(knowledgeBase.talent_search.professions)) {
        if (aliases.some(alias => lowerMessage.includes(alias))) {
          setContext({ currentFlow: 'search', searchProfession: professionKey })
          return {
            text: `🔍 Je peux t'aider à trouver un excellent ${professionKey} ! Dans quelle ville cherches-tu ?`,
            options: ['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Toulouse', 'Peu importe']
          }
        }
      }
    }

    // Si l'utilisateur mentionne directement un nom (ex: "Thomas Dubois")
    const allProfiles = Object.values(knowledgeBase.talent_search.profiles).flat()
    const mentionedProfile = allProfiles.find(profile => 
      lowerMessage.includes(profile.name.toLowerCase())
    )

    if (mentionedProfile) {
      if (lowerMessage.includes('contact') || lowerMessage.includes('parler')) {
        setContext({
          currentFlow: 'contact',
          selectedProfile: mentionedProfile,
          contactStep: 'initial'
        })
        return {
          text: `👋 Excellent choix ! **${mentionedProfile.name}** est un${mentionedProfile.name.includes('Sophie') || mentionedProfile.name.includes('Sarah') || mentionedProfile.name.includes('Léa') || mentionedProfile.name.includes('Julie') || mentionedProfile.name.includes('Emma') || mentionedProfile.name.includes('Clara') ? 'e' : ''} ${mentionedProfile.speciality.split(' ')[0]} très apprécié${mentionedProfile.name.includes('Sophie') || mentionedProfile.name.includes('Sarah') || mentionedProfile.name.includes('Léa') || mentionedProfile.name.includes('Julie') || mentionedProfile.name.includes('Emma') || mentionedProfile.name.includes('Clara') ? 'e' : ''} avec ${mentionedProfile.experience} d'expérience.\n\nPour faciliter la mise en relation, j'ai besoin de quelques informations :\n\n**1. Quel type de projet avez-vous en tête ?**\n(Ex: refonte de site web, création d'identité visuelle, développement d'application...)`
        }
      }
    }

    // Détection des autres mots-clés
    for (const category of ['anxiety', 'isolation', 'services', 'coworking']) {
      const categoryData = knowledgeBase[category as keyof typeof knowledgeBase] as { keywords: string[], responses: string[] }
      if (categoryData.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return { 
          text: categoryData.responses[Math.floor(Math.random() * categoryData.responses.length)],
          options: getOptionsForCategory(category)
        }
      }
    }

    // Réponses par défaut
    return { 
      text: "Je suis là pour t'aider dans ton parcours de freelance. Tu peux me parler de tes défis, chercher des talents, ou explorer nos services.",
      options: ["Trouver un talent", "Explorer les coworkings", "Gérer mon stress", "Autre chose"]
    }
  }

  const searchTalents = (profession: string, location: string): { text: string; options?: string[] } => {
    const profiles = knowledgeBase.talent_search.profiles[profession as keyof typeof knowledgeBase.talent_search.profiles] || []
    
    // Filtrer par localisation si ce n'est pas "Peu importe"
    let matchingProfiles = location.toLowerCase() !== 'peu importe' 
      ? profiles.filter(p => p.location.toLowerCase() === location.toLowerCase())
      : profiles

    // Si aucun profil dans cette ville, prendre tous les profils
    if (matchingProfiles.length === 0) matchingProfiles = profiles

    // Prendre les 3 premiers
    const selectedProfiles = matchingProfiles.slice(0, 3)

    let response = `🎯 J'ai trouvé ${selectedProfiles.length} ${profession}s qui correspondent à ta recherche à ${location} :\n\n`
    
    selectedProfiles.forEach((profile, index) => {
      response += `**${index + 1}. ${profile.name}** - ${profile.location}\n`
      response += `   • ${profile.experience} d'expérience\n`
      response += `   • Spécialité : ${profile.speciality}\n`
      response += `   • Note : ${profile.rating}/5 ⭐\n\n`
    })
    
    response += `💬 Veux-tu que je te mette en relation avec l'un d'entre eux ?`

    // Créer les options avec les noms des profils
    const options = selectedProfiles.map(p => `Contacter ${p.name}`)
    options.push('Voir d\'autres profils', 'Nouvelle recherche')

    setContext({ currentFlow: null, searchProfession: undefined, searchLocation: undefined })
    
    return { text: response, options }
  }

  const handleContactFlow = (userMessage: string): { text: string; options?: string[] } => {
    const profile = context.selectedProfile!
    
    switch (context.contactStep) {
      case 'initial':
        setContext(prev => ({ ...prev, contactStep: 'project', projectDescription: userMessage }))
        return {
          text: `✅ Parfait ! Je note votre projet.\n\n**2. Quel est votre budget approximatif pour ce projet ?**\n(Ex: moins de 1000€, 1000€ - 3000€, 3000€ - 5000€, plus de 5000€, budget à définir ensemble)`,
          options: ['Moins de 1000€', '1000€ - 3000€', '3000€ - 5000€', 'Plus de 5000€', 'Budget à définir ensemble']
        }
        
      case 'project':
        setContext(prev => ({ ...prev, contactStep: 'availability', budget: userMessage }))
        return {
          text: `💰 Budget noté.\n\n**3. Quelle est votre disponibilité pour démarrer ?**`,
          options: ['Immédiatement', 'Dans les 2 prochaines semaines', 'Dans le mois', 'Date flexible']
        }
        
      case 'availability':
        setContext(prev => ({ ...prev, contactStep: 'confirm', availability: userMessage }))
        return {
          text: `📅 Excellent !\n\n**Récapitulatif de votre demande :**\n• Freelance : **${profile.name}** (${profile.location})\n• Spécialité : ${profile.speciality}\n• Note : ${profile.rating}/5 ⭐\n• Votre projet : ${context.projectDescription}\n• Budget : ${context.budget}\n• Disponibilité : ${userMessage}\n\n**4. Comment souhaitez-vous être contacté ?**`,
          options: ['Par message sur Kollab', 'Par email', 'Par téléphone', 'Visioconférence']
        }
        
      case 'confirm':
        setContext({ currentFlow: null })
        return {
          text: `🎉 **Demande de contact envoyée !**\n\n${profile.name} recevra votre demande et vous répondra dans les 24h.\n\n📧 Vous recevrez une notification dès sa réponse.\n\n💡 **En attendant**, pourquoi ne pas :\n• Consulter son portfolio complet\n• Regarder ses dernières réalisations\n• Préparer vos questions pour le premier échange\n\nBesoin d'autre chose ?`,
          options: ['Chercher un autre talent', 'Explorer les services', 'Terminer']
        }
        
      default:
        return { text: "Je suis là pour vous aider. Que souhaitez-vous faire ?" }
    }
  }

  const getOptionsForCategory = (category: string): string[] => {
    switch (category) {
      case 'anxiety':
        return ["Parler de mes défis", "Voir les solutions Home", "Rejoindre la communauté"]
      case 'isolation':
        return ["Trouver un coworking", "Voir les Kollabers près de moi", "Parler à quelqu'un"]
      case 'services':
        return ["Proposer mes services", "Rechercher un service", "Comment ça marche ?"]
      case 'coworking':
        return ["Voir les espaces", "Tarifs et services", "Réserver une visite"]
      default:
        return []
    }
  }

  const handleOptionClick = async (option: string) => {
    // Gérer les options spéciales
    if (option.startsWith('Contacter ')) {
      const profileName = option.replace('Contacter ', '')
      const allProfiles = Object.values(knowledgeBase.talent_search.profiles).flat()
      const selectedProfile = allProfiles.find(p => p.name === profileName)
      
      if (selectedProfile) {
        setContext({
          currentFlow: 'contact',
          selectedProfile: selectedProfile,
          contactStep: 'initial'
        })
      }
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: option,
      sender: 'user',
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])

    setIsTyping(true)
    setTimeout(() => {
      const response = analyzeAndRespond(option)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        options: response.options
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || isTyping) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simuler le temps de réflexion du bot
    setTimeout(() => {
      const response = analyzeAndRespond(inputValue)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        options: response.options
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  return (
    <div className={isMobile 
      ? "flex flex-col h-full bg-white"
      : "flex h-[calc(100vh-250px)] min-h-[600px] max-h-[800px] bg-gray-50 rounded-2xl shadow-lg overflow-hidden"
    }>
      {/* Version Mobile */}
      {isMobile ? (
        <div className="flex flex-col h-full">
          {/* Header Mobile */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <button className="p-2">
              <ArrowLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">pour vous !</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">IA</span>
              <span className="text-xl font-semibold">Kollab</span>
            </div>
            <div className="w-10"></div>
          </div>

          {/* Messages Mobile */}
          <div 
            ref={messagesContainerRef}
            className="flex-1 overflow-y-auto px-4 py-4 space-y-4"
          >
            {messages.map((message) => (
              <div key={message.id} className="space-y-2">
                {message.sender === 'bot' && (
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="text-2xl font-bold text-teal-500">IA.</span>
                      <div className="flex-1">
                        <p className="text-gray-800 text-base leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: renderMarkdown(message.text) }}
                        />
                      </div>
                    </div>
                    {message.options && message.options.length > 0 && (
                      <div className="ml-12 space-y-2">
                        {message.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className={`w-full py-3 px-6 rounded-full font-medium transition-all ${
                              option.includes('développeur') || option.includes('talent')
                                ? 'bg-teal-500 hover:bg-teal-600'
                                : 'bg-transparent border-2 border-gray-300 text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                {message.sender === 'user' && (
                  <div className="flex justify-end">
                    <div className="bg-gray-100 px-4 py-2 rounded-2xl max-w-[80%]">
                      <p className="text-gray-800">{message.text}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start gap-2">
                <span className="text-2xl font-bold text-teal-500">IA.</span>
                <div className="bg-gray-100 rounded-2xl px-4 py-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Zone de saisie Mobile */}
          <div className="border-t bg-white px-4 py-3">
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2"
            >
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Écris ton message"
                  className="w-full px-4 py-3 pr-20 bg-gray-100 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none"
                  disabled={isTyping}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <button type="button" className="p-2 text-gray-500 hover:text-gray-700">
                    <Mic size={20} />
                  </button>
                  <button type="button" className="p-2 text-gray-500 hover:text-gray-700">
                    <Image size={20} />
                  </button>
                </div>
              </div>
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="p-3 bg-gray-400 text-white rounded-full hover:bg-gray-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Envoyer"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      ) : (
        /* Version Desktop */
        <>
          <div className="w-80 bg-white border-r border-gray-200">
            {/* Header */}
            <div className="h-16 bg-black text-white px-4 flex items-center">
              <h2 className="font-semibold">Messagerie</h2>
            </div>
            
            {/* Liste des contacts */}
            <div className="overflow-y-auto h-[calc(100%-4rem)]">
              <div className="p-2">
                <button className="w-full text-left p-3 bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between">
                        <h4 className="font-medium text-gray-900 truncate">Assistant IA</h4>
                        <span className="text-xs text-gray-500">En ligne</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">Prêt à vous aider</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Zone de chat principale Desktop */}
          <div className="flex-1 flex flex-col bg-white">
            {/* Header du chat */}
            <div className="h-16 bg-black text-white px-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Kollab Assistant</h3>
                  <p className="text-xs text-gray-300">Actif maintenant</p>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>

            {/* Messages Desktop */}
            <div 
              ref={!isMobile ? messagesContainerRef : undefined}
              className="flex-1 overflow-y-auto px-6 py-4 space-y-4"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'bot' && (
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                      <Bot size={16} className="text-white" />
                    </div>
                  )}
                  <div className={`max-w-[60%] ${message.sender === 'user' ? 'order-1' : 'order-2'}`}>
                    <div
                      className={`px-4 py-2 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-black text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                      dangerouslySetInnerHTML={{ __html: renderMarkdown(message.text) }}
                    />
                    {message.options && message.options.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {message.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className="block w-full text-left px-4 py-2 text-sm bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {message.sender === 'user' && (
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center order-2">
                      <User size={16} className="text-gray-700" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl px-4 py-2">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
              {!isMobile && <div ref={messagesEndRef} />}
            </div>

            {/* Actions rapides Desktop */}
            <div className="px-6 py-2">
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => handleOptionClick("Trouver un talent")}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                >
                  🔍 Trouver un talent
                </button>
                <button
                  onClick={() => handleOptionClick("Explorer les coworkings")}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                >
                  🏢 Espaces de coworking
                </button>
                <button
                  onClick={() => handleOptionClick("Gérer mon stress")}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                >
                  🧘 Gérer mon stress
                </button>
              </div>
            </div>

            {/* Zone de saisie Desktop */}
            <div className="border-t px-6 py-4">
              <form
                onSubmit={handleSubmit}
                className="flex gap-2"
              >
                <input
                  ref={!isMobile ? inputRef : undefined}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Écrivez votre message..."
                  className="flex-1 px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-gray-200 transition-all"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="p-3 bg-black hover:bg-gray-800 text-white rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Envoyer le message"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

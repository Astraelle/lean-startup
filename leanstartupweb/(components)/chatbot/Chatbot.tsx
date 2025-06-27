'use client'

import { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

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
}

// Base de connaissances du chatbot pour les freelances et digital nomades
const knowledgeBase = {
  greetings: [
    "Salut ! Je suis Kollab Assistant, ton compagnon virtuel dédié aux freelances et digital nomades. Comment puis-je t'aider aujourd'hui ?",
    "Hello ! Je suis là pour t'accompagner dans ton parcours d'indépendant. Qu'est-ce qui t'amène ?",
    "Bienvenue ! Je suis ton assistant Kollab, spécialement conçu pour répondre aux besoins des freelances. En quoi puis-je t'aider ?"
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
      "Notre marketplace te permet d'échanger tes compétences avec d'autres freelances. C'est un système de troc professionnel unique ! Quel service proposes-tu ou recherches-tu ?",
      "L'échange de services est au cœur de Kollab. Tu peux proposer tes compétences et trouver ce dont tu as besoin sans transaction monétaire. Intéressé(e) ?",
      "Super ! Notre module Services facilite les échanges entre indépendants. Tu peux publier une annonce ou parcourir les offres existantes."
    ]
  },
  coworking: {
    keywords: ['coworking', 'bureau', 'espace', 'travailler', 'lieu', 'workspace'],
    responses: [
      "Nous référençons des coworkings éco-responsables partout en France. Ils sont parfaits pour rencontrer d'autres Kollabers ! Dans quelle région cherches-tu ?",
      "Les espaces de coworking sont essentiels pour briser l'isolement. Notre carte interactive te montre tous les lieux disponibles près de toi.",
      "Excellente idée ! Nos coworkings partenaires offrent des espaces inspirants et éco-responsables. Je peux t'aider à trouver celui qui te convient."
    ]
  },
  talent_search: {
    keywords: ['cherche', 'recherche', 'besoin', 'trouve', 'profil', 'freelance', 'développeur', 'designer', 'webdesign', 'marketing', 'rédacteur', 'consultant'],
    patterns: {
      profession: ['développeur', 'designer', 'webdesigner', 'webdesign', 'graphiste', 'rédacteur', 'copywriter', 'consultant', 'chef de projet', 'marketeur', 'community manager', 'ux designer', 'ui designer', 'data analyst', 'photographe', 'vidéaste', 'traducteur'],
      experience: ['\\d+\\s*an', '\\d+\\s*mois', 'junior', 'senior', 'confirmé', 'débutant', 'expert', 'expérimenté']
    },
    // Base de profils fictifs pour simulation
    profiles: {
      webdesign: [
        { name: 'Sophie Martin', location: 'Lyon', experience: '3 ans', speciality: 'UI/UX Design & Webflow', rating: 4.8 },
        { name: 'Thomas Dubois', location: 'Paris', experience: '2 ans', speciality: 'Design responsive & Figma', rating: 4.6 },
        { name: 'Léa Chen', location: 'Bordeaux', experience: '5 ans', speciality: 'Branding & Design systems', rating: 4.9 }
      ],
      développeur: [
        { name: 'Maxime Lambert', location: 'Toulouse', experience: '4 ans', speciality: 'Full-stack JavaScript', rating: 4.7 },
        { name: 'Sarah Cohen', location: 'Marseille', experience: '6 ans', speciality: 'React & Node.js', rating: 4.9 },
        { name: 'Alex Moreau', location: 'Nantes', experience: '2 ans', speciality: 'Front-end & Vue.js', rating: 4.5 }
      ],
      marketing: [
        { name: 'Julie Petit', location: 'Nice', experience: '3 ans', speciality: 'Growth Marketing & SEO', rating: 4.8 },
        { name: 'Pierre Rousseau', location: 'Lille', experience: '5 ans', speciality: 'Content Marketing & Stratégie', rating: 4.7 }
      ],
      rédacteur: [
        { name: 'Emma Bernard', location: 'Strasbourg', experience: '4 ans', speciality: 'Copywriting & SEO', rating: 4.9 },
        { name: 'Lucas Girard', location: 'Montpellier', experience: '2 ans', speciality: 'Articles tech & blog', rating: 4.6 }
      ]
    } as Record<string, Profile[]>,
    generateResponse: (profession: string, experience: string) => {
      // Normaliser la profession pour correspondre aux clés
      let professionKey = profession
      if (profession === 'webdesigner' || profession === 'designer') professionKey = 'webdesign'
      
      // Récupérer les profils correspondants
      const profiles = knowledgeBase.talent_search.profiles[professionKey] || []
      
      // Filtrer par expérience si spécifiée
      let matchingProfiles = profiles
      if (experience && experience.match(/\d+/)) {
        const experienceMatch = experience.match(/\d+/)
        if (experienceMatch) {
          const years = parseInt(experienceMatch[0])
          matchingProfiles = profiles.filter((p: Profile) => {
            const profileMatch = p.experience.match(/\d+/)
            if (profileMatch) {
              const profileYears = parseInt(profileMatch[0])
              return Math.abs(profileYears - years) <= 1 // Tolérance de ±1 an
            }
            return false
          })
        }
      }
      
      // Si pas de profils correspondants, utiliser tous les profils
      if (matchingProfiles.length === 0) matchingProfiles = profiles
      
      // Sélectionner jusqu'à 3 profils
      const selectedProfiles = matchingProfiles.slice(0, 3)
      
      if (selectedProfiles.length > 0) {
        let response = `🎯 J'ai trouvé ${selectedProfiles.length} ${profession}s qui correspondent à ta recherche${experience ? ` (${experience} d'expérience)` : ''} :\n\n`
        
        selectedProfiles.forEach((profile: Profile, index: number) => {
          response += `${index + 1}. **${profile.name}** - ${profile.location}\n`
          response += `   • ${profile.experience} d'expérience\n`
          response += `   • Spécialité : ${profile.speciality}\n`
          response += `   • Note : ${profile.rating}/5 ⭐\n\n`
        })
        
        response += `💬 Veux-tu que je te mette en relation avec l'un d'entre eux ? Je peux aussi affiner la recherche selon d'autres critères (localisation, budget, disponibilité).`
        
        return response
      } else {
        return `🔍 Je recherche des ${profession}s${experience ? ` avec ${experience} d'expérience` : ''} dans notre communauté. Je reviens vers toi rapidement avec des profils correspondants !`
      }
    }
  },
  profile: {
    keywords: ['profil', 'présentation', 'description', 'compétences', 'expertise'],
    responses: [
      "Ton profil est ta vitrine professionnelle sur Kollab. Un profil complet augmente tes chances de connexions pertinentes de 80% !",
      "Le module Profil te permet de mettre en avant tes compétences et d'obtenir des recommandations. C'est essentiel pour te démarquer !",
      "Bien remplir ton profil est crucial. N'oublie pas d'ajouter tes compétences, ton expertise et de demander des recommandations à tes Kollabers."
    ]
  },
  missions: {
    keywords: ['mission', 'projet', 'deadline', 'tâche', 'calendrier', 'rappel', 'organisation'],
    responses: [
      "La gestion des missions est cruciale pour réduire le stress. Notre calendrier intégré et système de rappels t'aide à ne rien oublier !",
      "Je comprends, jongler entre plusieurs projets est complexe. Le module Home centralise toutes tes missions avec des rappels automatiques.",
      "L'organisation est la clé ! Notre système te permet de visualiser ta charge de travail et d'anticiper les périodes creuses."
    ]
  },
  wellbeing: {
    keywords: ['santé', 'mental', 'équilibre', 'burnout', 'fatigue', 'épuisé'],
    responses: [
      "Ta santé mentale est notre priorité. Kollab est conçu pour préserver ton équilibre en réduisant l'isolement et l'anxiété des freelances.",
      "Prendre soin de sa santé mentale est essentiel. As-tu pensé à utiliser notre système de notes pour externaliser tes pensées et réduire la charge cognitive ?",
      "Je suis là pour t'aider à maintenir un équilibre sain. N'hésite pas à te connecter avec d'autres Kollabers qui comprennent tes défis."
    ]
  }
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [conversationContext, setConversationContext] = useState<ConversationContext>({})
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Scroll automatique vers le bas
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Focus sur l'input à l'ouverture
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Message de bienvenue
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "👋 Bienvenue sur Kollab ! Je suis ton assistant virtuel, conçu spécialement pour accompagner les freelances et digital nomades comme toi. Je peux t'aider avec l'organisation de tes missions, trouver des espaces de coworking, gérer ton stress ou simplement discuter. Comment puis-je t'aider aujourd'hui ?",
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, messages.length])

  // Analyse du message et génération de réponse
  const analyzeAndRespond = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    // Gestion du contexte de contact
    if (conversationContext.currentFlow === 'contact' && conversationContext.selectedProfile) {
      return handleContactFlow(userMessage)
    }
    
    // Détection d'intention de contact direct - plus flexible
    const contactPatterns = ['contacter', 'contact', 'parler', 'discuter', 'rencontrer', 'échanger avec', 'joindre', 'appeler', 'écrire']
    const profileNames = ['thomas dubois', 'sophie martin', 'léa chen', 'maxime lambert', 'sarah cohen', 'alex moreau', 'julie petit', 'pierre rousseau', 'emma bernard', 'lucas girard']
    
    // Vérifier si le message contient un nom de profil
    let foundProfile = null
    let foundName = ''
    
    for (const name of profileNames) {
      if (lowerMessage.includes(name)) {
        foundName = name
        const allProfiles = Object.values(knowledgeBase.talent_search.profiles).flat()
        foundProfile = allProfiles.find(p => p.name.toLowerCase() === name)
        break
      }
    }
    
    // Si on a trouvé un nom et une intention de contact
    if (foundProfile && (contactPatterns.some(pattern => lowerMessage.includes(pattern)) || lowerMessage.includes(foundName))) {
      setConversationContext({
        currentFlow: 'contact',
        selectedProfile: foundProfile,
        contactStep: 'initial'
      })
      return `👋 Excellent choix ! **${foundProfile.name}** est un${foundProfile.name.includes('Sophie') || foundProfile.name.includes('Sarah') || foundProfile.name.includes('Léa') || foundProfile.name.includes('Julie') || foundProfile.name.includes('Emma') ? 'e' : ''} ${foundProfile.speciality.split(' ')[0]} très apprécié${foundProfile.name.includes('Sophie') || foundProfile.name.includes('Sarah') || foundProfile.name.includes('Léa') || foundProfile.name.includes('Julie') || foundProfile.name.includes('Emma') ? 'e' : ''} avec ${foundProfile.experience} d'expérience.\n\nPour faciliter la mise en relation, j'ai besoin de quelques informations :\n\n**1. Quel type de projet avez-vous en tête ?**\n(Ex: refonte de site web, création d'identité visuelle, développement d'application...)`
    }
    
    // Si on mentionne seulement "Thomas Dubois" sans mot de contact explicite
    if (foundProfile && !contactPatterns.some(pattern => lowerMessage.includes(pattern))) {
      return `Je vois que vous êtes intéressé par **${foundProfile.name}** ! C'est un excellent ${foundProfile.speciality.split(' & ')[0]} basé à ${foundProfile.location} avec ${foundProfile.experience} d'expérience.\n\n**Que souhaitez-vous faire ?**\n• Voir son portfolio\n• Le contacter pour un projet\n• Consulter ses disponibilités\n• Voir d'autres profils similaires\n\nDites-moi simplement ce que vous voulez faire, par exemple : "Je veux contacter Thomas Dubois"`
    }
    
    // Vérifier les salutations
    const greetingWords = ['bonjour', 'salut', 'hello', 'bonsoir', 'coucou', 'hey', 'bjr']
    if (greetingWords.some(word => lowerMessage.includes(word))) {
      return knowledgeBase.greetings[Math.floor(Math.random() * knowledgeBase.greetings.length)]
    }

    // Analyse intelligente pour la recherche de talents
    const talentSearch = knowledgeBase.talent_search
    if (talentSearch.keywords.some(keyword => lowerMessage.includes(keyword))) {
      // Extraire la profession
      let foundProfession = ''
      for (const profession of talentSearch.patterns.profession) {
        if (lowerMessage.includes(profession)) {
          foundProfession = profession
          break
        }
      }

      // Extraire l'expérience
      let foundExperience = ''
      // Recherche de patterns numériques (ex: "2 ans", "3 mois")
      const experienceMatch = lowerMessage.match(/(\d+)\s*(an|ans|mois)/)
      if (experienceMatch) {
        foundExperience = experienceMatch[0]
      } else {
        // Recherche de mots-clés d'expérience
        for (const exp of ['junior', 'senior', 'confirmé', 'débutant', 'expert', 'expérimenté']) {
          if (lowerMessage.includes(exp)) {
            foundExperience = exp
            break
          }
        }
      }

      // Si on a trouvé une profession, générer une réponse spécifique
      if (foundProfession) {
        return talentSearch.generateResponse(foundProfession, foundExperience)
      }
    }

    // Parcourir les autres catégories pour trouver une correspondance
    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (category === 'greetings' || category === 'talent_search') continue
      
      const categoryData = data as { keywords: string[], responses: string[] }
      if (categoryData.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return categoryData.responses[Math.floor(Math.random() * categoryData.responses.length)]
      }
    }

    // Réponses par défaut si aucune catégorie ne correspond
    const defaultResponses = [
      "Je suis là pour t'aider ! Peux-tu me donner plus de détails sur ta question ?",
      "Intéressant ! Dis-m'en plus pour que je puisse mieux t'orienter.",
      "Je comprends. N'hésite pas à explorer nos modules : Home pour l'organisation, Services pour les échanges, et notre réseau de coworkings !",
      "Hmm, peux-tu reformuler ta question ? Je suis spécialisé dans l'accompagnement des freelances sur Kollab."
    ]
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  // Gestion du parcours de contact
  const handleContactFlow = (userMessage: string): string => {
    const profile = conversationContext.selectedProfile!
    
    switch (conversationContext.contactStep) {
      case 'initial':
        setConversationContext(prev => ({ ...prev, contactStep: 'project' }))
        return `✅ Parfait ! Je note votre projet.\n\n**2. Quel est votre budget approximatif pour ce projet ?**\n\n• Moins de 1000€\n• 1000€ - 3000€\n• 3000€ - 5000€\n• Plus de 5000€\n• Budget à définir ensemble`
        
      case 'project':
        setConversationContext(prev => ({ ...prev, contactStep: 'availability' }))
        return `💰 Budget noté.\n\n**3. Quelle est votre disponibilité pour démarrer ?**\n\n• Immédiatement\n• Dans les 2 prochaines semaines\n• Dans le mois\n• Date flexible`
        
      case 'availability':
        setConversationContext(prev => ({ ...prev, contactStep: 'confirm' }))
        return `📅 Excellent !\n\n**Récapitulatif de votre demande :**\n• Freelance : **${profile.name}** (${profile.location})\n• Spécialité : ${profile.speciality}\n• Note : ${profile.rating}/5 ⭐\n• Votre projet : ${userMessage}\n\n**4. Comment souhaitez-vous être contacté ?**\n\n• Par message sur Kollab\n• Par email\n• Par téléphone\n• Visioconférence`
        
      case 'confirm':
        setConversationContext({ currentFlow: null })
        return `🎉 **Demande de contact envoyée !**\n\n${profile.name} recevra votre demande et vous répondra dans les 24h.\n\n📧 Vous recevrez une notification dès sa réponse.\n\n💡 **En attendant**, pourquoi ne pas :\n• Consulter son portfolio complet\n• Regarder ses dernières réalisations\n• Préparer vos questions pour le premier échange\n\nBesoin d'autre chose ?`
        
      default:
        return "Je suis là pour vous aider. Que souhaitez-vous faire ?"
    }
  }

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

  // Envoi du message
  const handleSendMessage = () => {
    if (inputValue.trim() === '') return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simuler le temps de réponse du bot
    setTimeout(() => {
      const botResponse = analyzeAndRespond(inputValue)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 z-50 ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        aria-label="Ouvrir l'assistant Kollab"
      >
        <MessageCircle size={24} />
      </button>

      {/* Fenêtre du chatbot */}
      <div
        className={`fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-6rem)] bg-white rounded-2xl shadow-2xl flex flex-col transition-all duration-300 z-50 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Kollab Assistant</h3>
                <p className="text-xs opacity-90">Ton compagnon freelance 24/7</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Fermer l'assistant"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Zone des messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[350px]">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-2 ${
                message.sender === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`p-2 rounded-full flex-shrink-0 ${
                  message.sender === 'user'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {message.sender === 'user' ? <User size={20} /> : <Bot size={20} />}
              </div>
              <div
                className={`max-w-[80%] p-3 rounded-xl ${
                  message.sender === 'user'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                } break-words`}
              >
                <div 
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(message.text) }}
                  className="space-y-2"
                />
                <span className={`text-xs block mt-2 ${
                  message.sender === 'user' ? 'text-teal-200' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString('fr-FR', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </span>
              </div>
            </div>
          ))}
          
          {/* Indicateur de frappe */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center text-white shadow-md">
                  <Bot size={16} />
                </div>
                <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-md border border-gray-100">
                  <div className="flex gap-1 items-center">
                    <span className="text-sm text-gray-600 mr-2">Kollab réfléchit</span>
                    <span className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Zone de saisie */}
        <div className="p-4 border-t bg-white rounded-b-2xl">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSendMessage()
            }}
            className="flex gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Pose-moi une question..."
              className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="p-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
              aria-label="Envoyer le message"
            >
              <Send size={20} />
            </button>
          </form>
          <p className="text-xs text-gray-500 text-center mt-2">
            💚 Conçu pour accompagner les freelances
          </p>
        </div>
      </div>
    </>
  )
}
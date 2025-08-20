'use client'
import { useEffect, useState } from 'react'

const N8nChatbot = () => {
  const [chatLoaded, setChatLoaded] = useState(false)
  
  useEffect(() => {
    const loadN8nChat = async () => {
      try {
        // Load CSS
        const link = document.createElement('link')
        link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css'
        link.rel = 'stylesheet'
        document.head.appendChild(link)
        
        // Load and initialize chat
        const { createChat } = await import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js')
        
        createChat({
          webhookUrl: process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL,
          initialMessages: [
            'Hello! I\'m your AI assistant.',
            'How can I help you today?'
          ],
          showWelcomeScreen: true,
          mode: 'window', // popup mode
          i18n: {
            en: {
              title: 'AI Assistant',
              subtitle: 'Powered by N8N',
              inputPlaceholder: 'Ask me anything...'
            }
          }
        })
        
        setChatLoaded(true)
      } catch (error) {
        console.error('Failed to load n8n chat:', error)
      }
    }
    
    if (process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL) {
      loadN8nChat()
    }
  }, [])
  
  return chatLoaded ? null : <div>Loading chat...</div>
}

export default N8nChatbot

'use client'

import { useState, useEffect, KeyboardEvent } from 'react'
import { CheckCircle, Clock, Mail, Building, MessageCircle, X } from 'lucide-react'

interface ContactSubmission {
  id: string
  name: string
  email: string
  company: string
  service: string
  message: string
  timestamp: string
  status: string
}

interface Message {
  sender: string
  text: string
}

export default function AdminPage() {
  // Existing submission state and logic
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Chatbot state
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/contact')
      if (response.ok) {
        const data = await response.json()
        setSubmissions(data.submissions || [])
      } else {
        setError('Failed to fetch submissions')
      }
    } catch {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString()
  }

  // Chatbot send message logic
  const sendMessage = async () => {
    if (!input.trim()) return
    setMessages((msgs) => [...msgs, { sender: 'You', text: input }])
    const userInput = input
    setInput('')

    try {
      const res = await fetch('https://cursortot.app.n8n.cloud/webhook/2fe1cef9-0049-4bd2-ab6c-6374433c0557', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput }),
      })
      const data = await res.json()
      setMessages((msgs) => [...msgs, { sender: 'Bot', text: data.reply }])
    } catch {
      setMessages((msgs) => [...msgs, { sender: 'Error', text: 'Failed to get response' }])
    }
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cheesh-dark via-gray-900 to-black relative">
      <div className="container mx-auto px-4 py-8">
        {/* Existing Contact Submission UI */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Form Submissions</h1>
          <p className="text-gray-300">Manage and view all contact form submissions</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {loading ? (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cheesh-orange mx-auto mb-4"></div>
              <h2 className="text-white text-xl font-semibold">Loading Submissions...</h2>
            </div>
          </div>
        ) : submissions.length === 0 ? (
          <div className="bg-gray-800/30 backdrop-blur-custom rounded-2xl p-8 border border-gray-700/50 text-center">
            <MessageCircle className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No Submissions Yet</h3>
            <p className="text-gray-400">Contact form submissions will appear here once users start sending messages.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {submissions.map((submission) => (
              <div
                key={submission.id}
                className="bg-gray-800/30 backdrop-blur-custom rounded-2xl p-6 border border-gray-700/50"
              >
                {/* Existing submission display code here (your current detailed layout) */}
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <button onClick={fetchSubmissions} className="btn-secondary">
            Refresh Submissions
          </button>
        </div>
      </div>

      {/* Chatbot toggle button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 bg-cheesh-orange text-black px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow font-semibold z-50"
        aria-label="Toggle Chatbot"
      >
        {chatOpen ? 'Close Chat' : 'Chat'}
      </button>

      {/* Chatbot window */}
      {chatOpen && (
        <div
          className="fixed bottom-20 right-6 w-80 max-h-[500px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl flex flex-col overflow-hidden z-50"
          style={{ boxShadow: '0 8px 20px rgb(0 0 0 / 0.8)' }}
        >
          <div className="flex items-center justify-between bg-cheesh-orange px-4 py-2">
            <h3 className="text-black font-bold">Chatbot</h3>
            <button onClick={() => setChatOpen(false)} aria-label="Close Chat" className="text-black">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-900 text-gray-200">
            {messages.length === 0 && (
              <p className="italic text-sm text-gray-400">Start the conversation by typing a message below.</p>
            )}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[80%] p-2 rounded-md ${
                  msg.sender === 'You'
                    ? 'bg-cheesh-orange text-black self-end'
                    : msg.sender === 'Bot'
                    ? 'bg-gray-700 text-gray-200 self-start'
                    : 'bg-red-600 text-white self-start'
                }`}
              >
                <strong>{msg.sender}: </strong>
                <span>{msg.text}</span>
              </div>
            ))}
          </div>

          <input
            type="text"
            aria-label="Type a message"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="border-t border-gray-700 px-3 py-2 bg-gray-900 text-white focus:outline-none"
          />
        </div>
      )}
    </div>
  )
}

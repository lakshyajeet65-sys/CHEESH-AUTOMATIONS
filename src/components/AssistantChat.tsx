'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { MessageSquare, Send, X, Bot, Sparkles } from 'lucide-react'

type ChatMessage = {
  id: string
  role: 'user' | 'bot'
  text: string
  ts: number
}

const serviceSummaries: Record<string, string> = {
  'workflow automation':
    'We map your processes, remove bottlenecks, and automate approvals and tracking. Typical results: 50-70% faster cycle-times.',
  'marketing automation':
    'We set up lead scoring, emails, social scheduling, and analytics so you nurture prospects automatically and convert more.',
  'crm automation':
    'We automate data capture, pipeline updates, and follow-ups so your team always acts on fresh insights, not stale info.',
  'customer support automation':
    'We add smart chatbots, ticket routing, and knowledge base flows to reduce response time by up to 80%.',
  'custom automation solutions':
    'Have a unique workflow? We design tailor-made automations with scalability, observability, and security built-in.',
}

const quickReplies = [
  'Workflow Automation',
  'Marketing Automation',
  'CRM Automation',
  'Customer Support Automation',
  'Custom Automation Solutions',
]

function normalize(text: string): string {
  return text.toLowerCase().trim()
}

function getBotReply(input: string): string {
  const q = normalize(input)
  // Direct matches
  for (const key in serviceSummaries) {
    if (q.includes(key)) return serviceSummaries[key]
  }
  // Heuristics
  if (q.includes('price') || q.includes('cost') || q.includes('pricing')) {
    return 'Pricing depends on scope and integrations. Share your use case and we’ll send a tailored quote within 24 hours.'
  }
  if (q.includes('time') || q.includes('timeline')) {
    return 'Most pilots go live in 2-4 weeks. Full rollouts vary by complexity and number of systems to integrate.'
  }
  if (q.includes('contact') || q.includes('talk') || q.includes('call')) {
    return 'Happy to connect! Tap “Get Started” in the header or scroll to Contact — we typically reply within 2–4 hours.'
  }
  // Default answer with options
  return 'I can help with Workflow, Marketing, CRM, Customer Support, or Custom automations. Which area would you like to explore?'
}

export default function AssistantChat() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const listRef = useRef<HTMLDivElement | null>(null)

  // Welcome message once
  useEffect(() => {
    setMessages([
      {
        id: 'm-welcome',
        role: 'bot',
        text: 'Hi! I’m your automation assistant. Ask me about Workflow, Marketing, CRM, Customer Support, or Custom automations.',
        ts: Date.now(),
      },
    ])
  }, [])

  // Auto-scroll
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages, open])

  const placeholder = useMemo(
    () => 'Ask about any automation service…',
    []
  )

  function send(text: string) {
    if (!text.trim()) return
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      text: text.trim(),
      ts: Date.now(),
    }
    setMessages((prev) => [...prev, userMsg])

    // Simulate bot thinking
    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        role: 'bot',
        text: getBotReply(text),
        ts: Date.now(),
      }
      setMessages((prev) => [...prev, botMsg])

      // Try to focus the relevant service card and scroll to details
      const name = Object.keys(serviceSummaries).find((k) => normalize(text).includes(k))
      if (name) {
        const el = document.querySelector(`[data-service="${name.replace(/(^.|\s.)./g, (s)=>s.toUpperCase())}"]`)
        // Fallback: try capitalized forms
        const fallback = document.querySelector(`[data-service]`)
        if (el) (el as HTMLElement).click()
        else if (fallback) (fallback as HTMLElement).click()
        // Scroll to details
        const details = document.querySelector('#service-details')
        if (details) {
          setTimeout(() => {
            details.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }, 150)
        }
      }
    }, 400)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const txt = input
    setInput('')
    send(txt)
  }

  return (
    <div className="fixed bottom-4 right-4 z-[60]">
      {/* Bubble */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="group relative flex items-center gap-2 rounded-full px-4 py-3 shadow-2xl backdrop-blur-custom border border-gray-700/50 bg-gradient-to-r from-cheesh-orange to-cheesh-red hover:from-cheesh-red hover:to-cheesh-orange transition-all duration-300 hover:scale-105"
          aria-label="Open chat"
        >
          <MessageSquare className="w-5 h-5 text-white" />
          <span className="text-white font-semibold">LiveChat</span>
          <span className="absolute -top-2 -right-2 inline-flex items-center gap-1 rounded-full bg-cheesh-blue text-white text-xs px-2 py-0.5 shadow">
            <Sparkles className="w-3 h-3" /> AI
          </span>
        </button>
      )}

      {/* Panel */}
      {open && (
        <div className="w-[92vw] max-w-sm h-[60vh] sm:h-[64vh] rounded-2xl shadow-2xl border border-gray-700/50 bg-gray-900/95 backdrop-blur-custom overflow-hidden animate-[fadeIn_0.25s_ease]">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-gradient-to-r from-cheesh-orange/20 via-cheesh-red/10 to-cheesh-blue/10">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-cheesh-orange" />
              <span className="text-white font-semibold">CHEESH Assistant</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={listRef} className="px-3 py-3 h-[calc(100%-132px)] overflow-y-auto space-y-3">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={
                    m.role === 'user'
                      ? 'max-w-[85%] rounded-2xl rounded-br-none px-4 py-2 bg-gradient-to-r from-cheesh-orange to-cheesh-red text-white shadow'
                      : 'max-w-[85%] rounded-2xl rounded-bl-none px-4 py-2 bg-gray-800 text-gray-100 border border-gray-700/60 shadow'
                  }
                >
                  <p className="text-sm leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick replies */}
          <div className="px-3 pb-2 flex flex-wrap gap-2">
            {quickReplies.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                className="text-xs px-3 py-1.5 rounded-full border border-cheesh-orange/40 text-cheesh-orange hover:bg-cheesh-orange/10 transition"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="px-3 pb-3 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-3 py-2 rounded-xl bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cheesh-orange focus:border-transparent"
            />
            <button
              type="submit"
              className="h-10 w-10 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cheesh-orange to-cheesh-red text-white shadow hover:scale-105 transition"
              aria-label="Send"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}




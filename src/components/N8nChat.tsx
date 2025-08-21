'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

type ChatMessage = {
  id: string
  role: 'user' | 'bot'
  text: string
  ts: number
}

type N8nResponse = {
  reply?: string
  quickReplies?: string[]
}

function getSessionId(): string {
  if (typeof window === 'undefined') return ''
  const key = 'chat_session_id'
  let id = window.localStorage.getItem(key)
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36)
    window.localStorage.setItem(key, id)
  }
  return id
}

export default function N8nChat() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [quickReplies, setQuickReplies] = useState<string[]>([])
  const listRef = useRef<HTMLDivElement | null>(null)

  const proxyUrl = '/api/chat'
  const sessionId = useMemo(() => getSessionId(), [])

  useEffect(() => {
    setMessages([
      {
        id: 'welcome',
        role: 'bot',
        text: 'Hi! How can I help you with automations today?',
        ts: Date.now(),
      },
    ])
  }, [])

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages, open])

  async function send(text: string) {
    if (!text.trim()) return
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      text: text.trim(),
      ts: Date.now(),
    }
    setMessages((prev) => [...prev, userMsg])
    setInput('')

    try {
      setSending(true)
      const payload = {
        sessionId,
        text: userMsg.text,
        url: typeof window !== 'undefined' ? window.location.href : '',
        timestamp: new Date().toISOString(),
        meta: {
          ua: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        },
      }

      const res = await fetch(proxyUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      let replyText = ''
      let quicks: string[] = []

      if (res.ok) {
        const contentType = res.headers.get('Content-Type') || ''

        if (contentType.includes('application/json')) {
          const data = (await res.json()) as N8nResponse | string
          if (typeof data === 'string') {
            replyText = data
          } else {
            replyText = data.reply || 'Okay.'
            if (Array.isArray(data.quickReplies)) {
              quicks = data.quickReplies
            }
          }
        } else {
          replyText = await res.text()
        }
      } else {
        replyText = `Received ${res.status}. Please try again.`
      }

      setQuickReplies(quicks)
      setMessages((prev) => [
        ...prev,
        {
          id: `b-${Date.now()}`,
          role: 'bot',
          text: replyText,
          ts: Date.now(),
        },
      ])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: `b-${Date.now()}`,
          role: 'bot',
          text: 'Network error. Please try again.',
          ts: Date.now(),
        },
      ])
    } finally {
      setSending(false)
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    send(input)
  }

  return (
    <div className="fixed bottom-4 right-4 z-[60]">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="group flex items-center gap-2 rounded-full px-4 py-3 shadow-2xl backdrop-blur-custom border border-gray-700/50 bg-gradient-to-r from-cheesh-orange to-cheesh-red hover:from-cheesh-red hover:to-cheesh-orange transition-all duration-300 hover:scale-105"
          aria-label="Open chat"
        >
          <span className="w-2 h-2 rounded-full bg-cheesh-green animate-pulse" />
          <span className="text-white font-semibold">Chat</span>
        </button>
      )}

      {open && (
        <div className="w-[92vw] max-w-sm h-[60vh] sm:h-[64vh] rounded-2xl shadow-2xl border border-gray-700/50 bg-gray-900/95 backdrop-blur-custom overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-gradient-to-r from-cheesh-orange/20 via-cheesh-red/10 to-cheesh-blue/10">
            <span className="text-white font-semibold">Automation Chat</span>
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div ref={listRef} className="px-3 py-3 h-[calc(100%-120px)] overflow-y-auto space-y-3">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={
                    m.role === 'user'
                      ? 'max-w-[85%] rounded-2xl rounded-br-none px-4 py-2 bg-gradient-to-r from-cheesh-orange to-cheesh-red text-white shadow'
                      : 'max-w-[85%] rounded-2xl rounded-bl-none px-4 py-2 bg-gray-800 text-gray-100 border border-gray-700/60 shadow'
                  }
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</p>
                </div>
              </div>
            ))}
          </div>

          {quickReplies.length > 0 && (
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
          )}

          <form onSubmit={handleSubmit} className="px-3 pb-3 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={'Type your message…'}
              className="flex-1 px-3 py-2 rounded-xl bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cheesh-orange focus:border-transparent"
            />
            <button
              type="submit"
              disabled={sending}
              className={`h-10 px-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cheesh-orange to-cheesh-red text-white shadow ${
                sending ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105 transition'
              }`}
              aria-label="Send"
            >
              {sending ? '…' : 'Send'}
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

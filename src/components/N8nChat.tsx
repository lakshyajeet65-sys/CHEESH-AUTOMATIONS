'use client'

import React, { useState, useEffect, useRef } from 'react'

export default function N8nChat() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([{ id: 'welcome', role: 'bot', text: 'Hi! How can I help?', ts: Date.now() }])
  const listRef = useRef(null)

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages, open])

  async function send(text: string) {
    if (!text.trim()) return

    setMessages((prev) => [...prev, { id: `u-${Date.now()}`, role: 'user', text, ts: Date.now() }])
    setInput('')

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })

      let replyText = 'No response'
      if (res.ok) {
        const data = await res.json()
        if (Array.isArray(data) && data.length > 0 && data[0].output) {
          replyText = data.output
        }
      }

      setMessages((prev) => [...prev, { id: `b-${Date.now()}`, role: 'bot', text: replyText, ts: Date.now() }])
    } catch {
      setMessages((prev) => [...prev, { id: `b-${Date.now()}`, role: 'bot', text: 'Network error.', ts: Date.now() }])
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    send(input)
  }

  return (
    <div>
      {!open && <button onClick={() => setOpen(true)}>Open Chat</button>}
      {open && (
        <div>
          <div ref={listRef} style={{ height: 200, overflowY: 'auto' }}>
            {messages.map((m) => (
              <div key={m.id} style={{ textAlign: m.role === 'user' ? 'right' : 'left' }}>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  )
}

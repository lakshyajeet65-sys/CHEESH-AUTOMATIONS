'use client'

import { useState } from 'react'

const CHAT_WEBHOOK_URL = process.env.NEXT_PUBLIC_CHAT_WEBHOOK_URL || ''

const ChatWidget = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([])
  const [input, setInput] = useState('')

  const sendMessage = async () => {
    if (!input.trim()) return

    setMessages((prev) => [...prev, { sender: 'user', text: input }])

    try {
      const res = await fetch(CHAT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      })

      console.log('Response status:', res.status, res.statusText)

      const text = await res.text()
      console.log('Response body:', text)

      setMessages((prev) => [...prev, { sender: 'bot', text: text || 'No response from bot.' }])
    } catch (err) {
      console.error('Fetch error:', err)
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Error sending message.' }])
    }

    setInput('')
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        width: 300,
        border: '1px solid #ddd',
        borderRadius: 8,
        background: '#fff',
        padding: 12,
        fontFamily: 'Arial, sans-serif',
        fontSize: 14,
      }}
    >
      <div style={{ maxHeight: 200, overflowY: 'auto', marginBottom: 8 }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', margin: '4px 0' }}>
            <span
              style={{
                background: msg.sender === 'user' ? '#e0f7fa' : '#eeeeee',
                padding: 6,
                borderRadius: 4,
                display: 'inline-block',
                maxWidth: '80%',
                wordWrap: 'break-word',
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          style={{
            width: '80%',
            padding: 6,
            borderRadius: 4,
            border: '1px solid #ccc',
            boxSizing: 'border-box',
          }}
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          style={{
            width: '18%',
            marginLeft: '2%',
            padding: 6,
            cursor: 'pointer',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
          }}
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default ChatWidget

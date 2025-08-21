'use client'

import { useState } from 'react'

const CHAT_WEBHOOK_URL = process.env.NEXT_PUBLIC_CHAT_WEBHOOK_URL || '' // Replace or set in env

const ChatWidget = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([])
  const [input, setInput] = useState('')

  const sendMessage = async () => {
    if (!input.trim()) return

    // Add user's message to chat
    setMessages((prev) => [...prev, { sender: 'user', text: input }])

    try {
      // Send user message to n8n webhook
      const res = await fetch(CHAT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      })

      // Read plain text response from bot
      const botReply = await res.text()

      // Add bot reply to chat
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply || 'No response from bot.' }])
    } catch (err) {
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Error sending message.' }])
    }

    // Clear input box
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

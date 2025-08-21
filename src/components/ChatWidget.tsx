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

      const text =

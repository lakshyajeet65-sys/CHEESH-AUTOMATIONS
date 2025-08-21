import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function POST(req: NextRequest) {
  try {
    const webhookUrl = process.env.CHAT_WEBHOOK_URL
    const debug = (process.env.DEBUG_CHAT_PROXY || '').toString() === '1'
    if (!webhookUrl) {
      return NextResponse.json(
        { error: 'CHAT_WEBHOOK_URL is not configured' },
        { status: 500 }
      )
    }

    const body = await req.json()

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    }
    const token = process.env.CHAT_WEBHOOK_TOKEN
    if (token) headers['Authorization'] = `Bearer ${token}`

    const upstream = await fetch(webhookUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })

    const text = await upstream.text()
    console.log('Upstream response text:', text) // Debug log to check actual webhook reply
    let json: any
    try {
      json = JSON.parse(text)
    } catch {
      json = { reply: text }
    }

    if (!upstream.ok && debug) {
      return NextResponse.json(
        {
          error: true,
          upstreamStatus: upstream.status,
          upstreamBody: text,
        },
        { status: upstream.status }
      )
    }

    return NextResponse.json(json, { status: upstream.status })
  } catch (err) {
    console.error('Chat proxy error:', err)
    return NextResponse.json(
      { error: 'Chat proxy error' },
      { status: 500 }
    )
  }
}

export const maxDuration = 10

import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function POST(req: NextRequest) {
  try {
    const webhookUrl = process.env.CHAT_WEBHOOK_URL
    if (!webhookUrl) {
      return NextResponse.json({ error: 'CHAT_WEBHOOK_URL is not configured' }, { status: 500 })
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

    const responseBody = await upstream.text()

    console.log('Upstream response status:', upstream.status)
    console.log('Upstream response text:', responseBody)

    // Send raw text response with matching status and plain text content-type
    return new NextResponse(responseBody, {
      status: upstream.status,
      headers: {
        'Content-Type': 'text/plain'
      }
    })
  } catch (err) {
    console.error('Chat proxy error:', err)
    return NextResponse.json({ error: 'Chat proxy error' }, { status: 500 })
  }
}

export const maxDuration = 10

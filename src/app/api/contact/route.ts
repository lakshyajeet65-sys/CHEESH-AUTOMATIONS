import { NextRequest, NextResponse } from 'next/server'
import { createHmac } from 'crypto'

// In-memory storage (replace with database in production)
let contactSubmissions: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, service, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Create submission object
    const submission = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company?.trim() || '',
      service: service || '',
      message: message.trim(),
      timestamp: new Date().toISOString(),
      status: 'new'
    }

    // Store the submission (in production, save to database)
    contactSubmissions.push(submission)

    // Log the submission
    console.log('New contact submission:', submission)

    // Send to generic webhook if configured
    try {
      const webhookUrl = process.env.GOOGLE_SHEETS_WEBAPP_URL
      if (webhookUrl) {
        const payload = {
          type: 'contact.submission',
          data: submission,
        }

        const headers: Record<string, string> = {
          'Content-Type': 'application/json',
        }

        const secret = process.env.CONTACT_WEBHOOK_SECRET
        if (secret) {
          const signature =
            'sha256=' + createHmac('sha256', secret).update(JSON.stringify(payload)).digest('hex')
          headers['X-Signature-256'] = signature
        }

        const res = await fetch(webhookUrl, {
          method: 'POST',
          headers,
          body: JSON.stringify(payload),
        })

        if (!res.ok) {
          console.warn('Webhook returned non-OK status:', res.status)
        } else {
          console.log('Webhook delivered successfully')
        }
      }
    } catch (error) {
      console.error('Error sending to webhook:', error)
    }

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We will get back to you soon.',
        submissionId: submission.id
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to retrieve submissions (for admin purposes)
export async function GET() {
  return NextResponse.json(
    { submissions: contactSubmissions },
    { status: 200 }
  )
}


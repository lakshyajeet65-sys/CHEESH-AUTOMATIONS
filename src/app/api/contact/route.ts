import { NextRequest, NextResponse } from 'next/server'

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

    // Log the submission (in production, send email notification)
    console.log('New contact submission:', submission)

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

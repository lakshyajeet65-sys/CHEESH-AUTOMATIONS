'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, Clock, Mail, Building, MessageCircle } from 'lucide-react'

interface ContactSubmission {
  id: string
  name: string
  email: string
  company: string
  service: string
  message: string
  timestamp: string
  status: string
}

export default function AdminPage() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/contact')
      if (response.ok) {
        const data = await response.json()
        setSubmissions(data.submissions || [])
      } else {
        setError('Failed to fetch submissions')
      }
    } catch (error) {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cheesh-dark via-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cheesh-orange mx-auto mb-4"></div>
          <h2 className="text-white text-xl font-semibold">Loading Submissions...</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cheesh-dark via-gray-900 to-black">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Form Submissions</h1>
          <p className="text-gray-300">Manage and view all contact form submissions</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {submissions.length === 0 ? (
          <div className="bg-gray-800/30 backdrop-blur-custom rounded-2xl p-8 border border-gray-700/50 text-center">
            <MessageCircle className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No Submissions Yet</h3>
            <p className="text-gray-400">Contact form submissions will appear here once users start sending messages.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {submissions.map((submission) => (
              <div key={submission.id} className="bg-gray-800/30 backdrop-blur-custom rounded-2xl p-6 border border-gray-700/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-cheesh-orange rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {submission.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{submission.name}</h3>
                      <p className="text-gray-400 text-sm">{submission.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">{formatDate(submission.timestamp)}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {submission.company && (
                    <div className="flex items-center space-x-2">
                      <Building className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300 text-sm">{submission.company}</span>
                    </div>
                  )}
                  {submission.service && (
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-cheesh-green" />
                      <span className="text-gray-300 text-sm">{submission.service}</span>
                    </div>
                  )}
                </div>

                <div className="bg-gray-700/30 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Message:</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{submission.message}</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-500">ID: {submission.id}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    submission.status === 'new' 
                      ? 'bg-cheesh-orange/20 text-cheesh-orange' 
                      : 'bg-gray-600/20 text-gray-400'
                  }`}>
                    {submission.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <button 
            onClick={fetchSubmissions}
            className="btn-secondary"
          >
            Refresh Submissions
          </button>
        </div>
      </div>
    </div>
  )
}

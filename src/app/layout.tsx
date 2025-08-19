import type { Metadata } from 'next'
import './globals.css'
// Remove or keep other widgets as needed
// import ChatWidget from '@/components/ChatWidget'
// import AssistantChat from '@/components/AssistantChat'
import N8nChat from '@/components/N8nChat'

export const metadata: Metadata = {
  title: 'CHEESH AUTOMATIONS - Professional Automation Solutions',
  description: 'Transform your business with cutting-edge automation solutions. We specialize in workflow automation, marketing automation, CRM automation, and custom automation solutions for businesses of all sizes.',
  keywords: 'automation, workflow automation, marketing automation, CRM automation, business automation, process optimization',
  authors: [{ name: 'CHEESH AUTOMATIONS' }],
  robots: 'index, follow',
  openGraph: {
    title: 'CHEESH AUTOMATIONS - Professional Automation Solutions',
    description: 'Transform your business with cutting-edge automation solutions.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {/* <ChatWidget /> */}
        {/* <AssistantChat /> */}
        <N8nChat />
      </body>
    </html>
  )
} 

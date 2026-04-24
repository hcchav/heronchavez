'use client'

import { trackEvent } from '@/lib/posthog'

export default function CTAButtons() {
  const handleContactClick = () => {
    trackEvent('cta_clicked', { type: 'contact', location: 'hero' })
  }

  const handleScheduleClick = () => {
    trackEvent('cta_clicked', { type: 'schedule_call', location: 'hero' })
  }

  return (
    <div className="flex flex-wrap gap-3 mt-8">
      <a
        href="mailto:heroncchavez@gmail.com"
        onClick={handleContactClick}
        className="bg-stone-900 text-stone-100 px-6 py-3 text-xs uppercase tracking-wider hover:bg-lime-500 hover:text-stone-900 transition-colors font-bold"
      >
        GET IN TOUCH →
      </a>
      <a
        href="https://calendly.com/heroncchavez"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleScheduleClick}
        className="brutalist-btn px-6 py-3"
      >
        SCHEDULE A CALL →
      </a>
    </div>
  )
}

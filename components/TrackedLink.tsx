'use client'

import { trackEvent } from '@/lib/posthog'
import Link from 'next/link'

interface TrackedLinkProps {
  href: string
  eventName: string
  eventProperties?: Record<string, unknown>
  children: React.ReactNode
  className?: string
  external?: boolean
}

export default function TrackedLink({
  href,
  eventName,
  eventProperties = {},
  children,
  className,
  external = false,
}: TrackedLinkProps) {
  const handleClick = () => {
    trackEvent(eventName, { href, ...eventProperties })
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  )
}

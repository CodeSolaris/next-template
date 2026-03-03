import Image from 'next/image'
import Link from 'next/link'

import authBgVapor from '@/shared/assets/images/design/dark/auth_bg_vapor.png'

export function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen w-full bg-background font-sans text-foreground">
      {/* Left side: Form */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center p-8 lg:w-1/2">
        <div className="absolute top-8 left-8">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-80"
          >
            NeoDesk
          </Link>
        </div>
        <div className="w-full max-w-md">{children}</div>
      </div>

      {/* Right side: Generated Hero Image */}
      <div className="relative hidden overflow-hidden bg-surface lg:block lg:w-1/2">
        <Image
          src={authBgVapor}
          alt="NeoDesk Aesthetic"
          fill
          className="object-cover opacity-80"
          priority
        />
        {/* Noise overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E\')',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 dark:from-[#0A0A0F]" />
      </div>
    </div>
  )
}

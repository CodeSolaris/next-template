import { baseMetadata } from '@/app/config'
import { BaseLayout } from '@/app/layouts'

export const metadata = baseMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <BaseLayout>{children}</BaseLayout>
}

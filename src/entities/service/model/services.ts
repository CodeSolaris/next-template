import type { ServiceList } from './types'
import aiDark from '@/shared/assets/images/design/dark/ai.png'
import bookingDark from '@/shared/assets/images/design/dark/booking.png'
import meetingsDark from '@/shared/assets/images/design/dark/meetings.png'
import servicesDark from '@/shared/assets/images/design/dark/services.png'
import aiLight from '@/shared/assets/images/design/light/ai.png'
import bookingLight from '@/shared/assets/images/design/light/booking.png'
import meetingsLight from '@/shared/assets/images/design/light/meetings.png'
import servicesLight from '@/shared/assets/images/design/light/services.png'

export const services: ServiceList = [
  {
    id: 'booking',
    title: 'Seamless Scheduling',
    description:
      'Send a scheduling link and let clients choose the perfect time without endless back-and-forth emails. Your available slots sync automatically.',
    imageDark: bookingDark,
    imageLight: bookingLight,
    reverse: false,
    accent: 'text-primary',
  },
  {
    id: 'meetings',
    title: 'Native Meetings',
    description:
      'Create rooms and host live sessions directly in your browser. No downloads, no third-party applications required.',
    imageDark: meetingsDark,
    imageLight: meetingsLight,
    reverse: true,
    accent: 'text-blue-400',
  },
  {
    id: 'services',
    title: 'Productize Your Knowledge',
    description:
      'Package your consultations into ready-made digital products and accept payments in one click natively via Stripe.',
    imageDark: servicesDark,
    imageLight: servicesLight,
    reverse: false,
    accent: 'text-green-400',
  },
  {
    id: 'ai',
    title: 'AI Adviser & Data Analytics',
    description:
      'Converse with your data. Ask the digital assistant to analyze statistics, generate sales charts, or summarize meeting outcomes.',
    imageDark: aiDark,
    imageLight: aiLight,
    reverse: true,
    accent: 'text-purple-400',
  },
]

import type { PricingTiers } from './types'

export const pricingTiers: PricingTiers = [
  {
    name: 'Essential',
    price: '$29',
    desc: 'For small teams starting up.',
    features: ['5 Team Members', 'Smart Booking', 'Basic Analytics'],
    featured: false,
  },
  {
    name: 'Performance',
    price: '$99',
    desc: 'For scaling companies needing power.',
    features: [
      'Unlimited Members',
      'Command Palette AI',
      'Advanced Analytics',
      'Priority Support',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'For large organizations with security needs.',
    features: [
      'Dedicated Server',
      'Custom Integrations',
      'SSO & Directory Sync',
      'SLA Guarantee',
    ],
    featured: false,
  },
]

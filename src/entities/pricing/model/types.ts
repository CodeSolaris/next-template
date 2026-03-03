export interface PricingTier {
  name: string
  price: string
  desc: string
  features: string[]
  featured: boolean
}

export type PricingTiers = PricingTier[]

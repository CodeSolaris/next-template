import type { StaticImageData } from 'next/image'

export interface Service {
  id: string
  title: string
  description: string
  imageDark: StaticImageData
  imageLight: StaticImageData
  reverse: boolean
  accent: string
}

export type ServiceList = Service[]

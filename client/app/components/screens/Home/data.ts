import { BestRatesIcon, FastTrasnactionsIcon, SecurityGuaranteedIcon } from '@/assets/icons/ui'

export const data = {
  reasons: [
    {
      id: 0,
      icon: {
        src: SecurityGuaranteedIcon,
        alt: 'security-guaranteed',
      },
      title: 'Security Guaranteed',
      text: 'Security is guaranteed. We always maintain privacy and maintain the quality of our product.',
    },
    {
      id: 1,
      icon: {
        src: BestRatesIcon,
        alt: 'Best-rates',
      },
      title: 'Best exchange rates',
      text: 'Best exchange rates We always maintain privacy and maintain the quality of our product.',
    },
    {
      id: 2,
      icon: {
        src: FastTrasnactionsIcon,
        alt: 'Fastest-transactions',
      },
      title: 'Fastest transactions',
      text: 'Fastest transactions. We always maintain privacy and maintain the quality of our product.',
    },
  ],
}

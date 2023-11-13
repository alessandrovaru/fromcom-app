import { Inter, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'



const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'The F* Rom Com Pictures',
  description: 'We create content for the largest minority: WOMEN',
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Productora', 'Women', 'Next.js', 'React', 'JavaScript',],
  authors: [{ name: 'Alessandro Varuzza' }, { name: 'Alessandro', url: 'https://www.alessandrovaru.com' }],
  creator: 'Verónica Guillén',
  publisher: 'Alessandro Varuzza',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}

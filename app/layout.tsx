import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shopify Inventory Liquidation Calculator',
  description: 'Calculate optimal liquidation prices for dead inventory. Analyze aging, storage costs, and demand to maximize recovery on slow-moving Shopify stock.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3ae5f048-8681-469e-bd33-a6cefdea2f86"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}

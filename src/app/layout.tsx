import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
//import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FlapCart',
  description: 'you say we provide',
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     navigator.serviceWorker
  //       .register("/service-worker.js")
  //       .then((registration) => console.log("scope is: ", registration.scope));
  //   }
  // }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className='m-auto min-w-[300px] max-w-7xl p-4'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

'use client';

import { Inter } from '@next/font/google'
import NFTs from './nfts';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <NFTs />
    </div>
  )
}

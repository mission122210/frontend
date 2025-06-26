// components/AdsenseAd.js
'use client'

import { useEffect } from 'react'

const AdsenseAd = () => {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (e) {
      console.error('Adsense Error:', e)
    }
  }, [])

  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <h2>Ads by google</h2>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '280px' }}
        data-ad-client="ca-pub-3940256099942544"
data-ad-slot="6300978190"

        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  )
}

export default AdsenseAd

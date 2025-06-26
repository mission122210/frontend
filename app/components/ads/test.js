// components/AdsenseAd.js
'use client'
import { useEffect, useRef } from 'react'

export default function AdsenseAd() {
  const adRef = useRef(false)

  useEffect(() => {
    const loadAd = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (e) {
        console.error('Adsense error:', e)
        setTimeout(loadAd, 500)
      }
    }

    if (!adRef.current) {
      loadAd()
      adRef.current = true
    }
    
    // re-run on navigation if needed
    window.addEventListener('pushAd', loadAd)
    return () => window.removeEventListener('pushAd', loadAd)
  }, [])

  return (
    <div className="text-center my-8">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '728px', height: '280px', margin: 'auto' }}
        data-ad-client="ca-pub-1353425195701604"
        data-ad-slot="5852860777"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}

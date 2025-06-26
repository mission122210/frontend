// components/AdsenseAd.js
'use client'; // if using App Router (Next.js 13+)

import React, { useEffect } from 'react';
import Script from 'next/script';

const AdsenseAd = () => {
    useEffect(() => {
        try {
            if (window && window.adsbygoogle) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (e) {
            console.error('Adsense error:', e);
        }
    }, []);

    return (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
            {/* Ad container */}
            <ins className="adsbygoogle"
                style={{ display: 'block', width: '728px', height: '280px', margin: 'auto' }}
                data-ad-client="ca-pub-1353425195701604"
                data-ad-slot="5852860777"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>

            {/* Adsense script */}
            <Script
                id="adsbygoogle-init"
                strategy="afterInteractive"
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                crossOrigin="anonymous"
            />
        </div>
    );
};

export default AdsenseAd;

// https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-1353425195701604&amp;h=280&amp;slotname=5852860777&amp;w=728&amp;rafmt=11&amp;format=728x280&amp;url=https://e11.site/&amp;host=ca-host-pub-6246782973042873&amp
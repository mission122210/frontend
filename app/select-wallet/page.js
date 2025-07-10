import React from 'react'
import Wallets from '@/app/components/wallet/Index'

const page = () => {
    return (
        <>
            <Wallets />
        </>
    )
}

export default page

export const generateMetadata = () => {
    return {
        title: "Manage Your Wallets | Secure & Easy Access",
        description: "View and manage all your wallets in one place. Secure, fast, and easy access to your digital funds and transactions.",
        keywords: "Wallets, Digital Wallet, Crypto Wallet, Payment Methods, Manage Wallets, Finance Dashboard",
        robots: "index, follow",
        openGraph: {
            title: "Manage Your Wallets",
            description: "Securely manage your wallets and view transaction history in one place.",
            url: "https://faqnexxen.vercel.app/wallets",
            type: "website",
            images: [
                {
                    url: "https://faqnexxen.vercel.app/images/og-wallets.jpg", // Replace with an actual wallet-related image
                    width: 1200,
                    height: 630,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Manage Your Wallets",
            description: "Securely manage your wallets and view transaction history in one place.",
        },
    }
}


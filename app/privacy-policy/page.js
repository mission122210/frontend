import React from 'react'
import PrivacyPolicy from '@/app/components/privacy/Index'

const page = () => {
    return (
        <>
            <PrivacyPolicy />
        </>
    )
}

export default page

export const metadata = {
    title: "Privacy Policy | Our Company",
    description: "Learn how we collect, use, and protect your personal information when you use our website and services.",
    keywords: "Privacy Policy, Data Protection, Personal Information, User Privacy, GDPR, Data Collection, Online Privacy",
    robots: "index, follow",
    openGraph: {
        title: "Privacy Policy | Our Company",
        description: "Read about how we handle your personal information and ensure your data privacy.",
        url: "https://faqnexxen.vercel.app/privacy-policy",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | Our Company",
        description: "Read about how we handle your personal information and ensure your data privacy.",
    },
}



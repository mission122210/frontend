import React from 'react'
import TermsConditions from '@/app/components/terms/Index'

const page = () => {
    return (
        <>
            <TermsConditions />
        </>
    )
}

export default page

export const metadata = {
    title: "Terms and Conditions | Our Company",
    description: "Read the Terms and Conditions of using our website and services. Stay informed about your rights and responsibilities.",
    keywords: "Terms and Conditions, User Agreement, Legal, Website Terms, Company Policies, Usage Terms",
    robots: "index, follow",
    openGraph: {
        title: "Terms and Conditions | Our Company",
        description: "Understand the rules and guidelines for using our website and services.",
        url: "https://faqnexxen.vercel.app/terms-conditions", // Make sure this URL reflects your actual route
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Terms and Conditions | Our Company",
        description: "Understand the rules and guidelines for using our website and services.",
    },
}


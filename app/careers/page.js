import React from 'react'
import Careers from '@/app/components/careers/Index'

const page = () => {
  return (
    <>
      <Careers />
    </>
  )
}

export default page

export const generateMetadata = () => {
  return {
    title: "Careers at Our Company | Join the Team",
    description: "Explore exciting career opportunities and join a passionate, innovative team that's shaping the future. Apply today!",
    keywords: "Careers, Jobs, Hiring, Tech Jobs, Join Our Team, Open Positions, Work With Us",
    robots: "index, follow",
    openGraph: {
      title: "Careers at Our Company",
      description: "Explore exciting job opportunities and grow your career with us.",
      url: "https://faqnexxen.vercel.app/careers",
      type: "website",
      images: [
        {
          url: "https://faqnexxen.vercel.app/images/og-careers.jpg", // Make sure this is a publicly accessible image
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Careers at Our Company",
      description: "Explore exciting job opportunities and grow your career with us.",
    },
  }
}

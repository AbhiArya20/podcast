import React from 'react'
import PageError from '@/components/page-error/page-error'

export default function PrivacyPolicy() {
  return (
    <PageError error={
        {
            message: 'Privacy Policy',
            description: "This is a personal project developed and maintained independently, not affiliated with any organization or company. The goal of this project is to address a specific need or challenge that I identified, utilizing my skills in software development and design."
        }
    } />
  )
}





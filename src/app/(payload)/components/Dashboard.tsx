'use client'

import '../custom.scss'
import { Banner, Button, Card, Gutter, RenderTitle, SetStepNav, StepNavItem } from '@payloadcms/ui'

import React from 'react'

const stepNav: StepNavItem[] = [
  {
    label: 'Dashboard',
    url: '/admin',
  },
]

const Dashboard = () => {
  return (
    <Gutter>
      <SetStepNav nav={stepNav} />
      <RenderTitle title="Dashboard" />
      <div className="flex flex-row mt-10 gap-4">
        <Banner type="default" className=" p-6">
          <h2>Welcome to Payload CMS</h2>
          <p className="mt-2">
            Here you can manage the content of your website, add new pages, edit existing ones,
            upload media, and much more. Use the navigation menu to explore all the features and
            customize your website the way you want.
          </p>
        </Banner>
      </div>
    </Gutter>
  )
}

export default Dashboard

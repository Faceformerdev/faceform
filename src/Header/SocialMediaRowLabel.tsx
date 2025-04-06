import React from 'react'

interface SocialMediaRowLabelProps {
  data: {
    platform?: string
  }
}

export const SocialMediaRowLabel: React.FC<SocialMediaRowLabelProps> = ({ data }) => {
  return <>{data?.platform || 'Social Media Link'}</>
}

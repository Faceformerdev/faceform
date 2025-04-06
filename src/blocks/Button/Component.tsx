import React from 'react'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import type { ButtonBlock as ButtonBlockProps } from '@/payload-types'

export const ButtonBlock: React.FC<ButtonBlockProps> = (props) => {
  const {
    label,
    link,
    color,
    customColor,
    size,
    variant,
    borderRadius,
    textColor,
    customTextColor,
  } = props

  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  }

  const colorClasses = {
    primary: {
      solid: 'bg-primary text-primary-foreground hover:bg-primary/90',
      outline: 'border-2 border-primary text-primary hover:bg-primary/10',
      ghost: 'text-primary hover:bg-primary/10',
    },
    secondary: {
      solid: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
      outline: 'border-2 border-secondary text-secondary hover:bg-secondary/10',
      ghost: 'text-secondary hover:bg-secondary/10',
    },
    accent: {
      solid: 'bg-accent text-accent-foreground hover:bg-accent/90',
      outline: 'border-2 border-accent text-accent hover:bg-accent/10',
      ghost: 'text-accent hover:bg-accent/10',
    },
    custom: {
      solid: '',
      outline: '',
      ghost: '',
    },
  }

  const borderRadiusClasses = {
    none: 'rounded-none',
    xs: 'rounded-xs',
    small: 'rounded-sm',
    medium: 'rounded-md',
    large: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  }

  const textColorClasses = {
    default: '',
    white: 'text-white',
    black: 'text-black',
    custom: '',
  }

  const getCustomColorStyle = () => {
    if (color === 'custom' && customColor) {
      switch (variant) {
        case 'solid':
          return { backgroundColor: customColor }
        case 'outline':
          return { borderColor: customColor, color: customColor }
        case 'ghost':
          return { color: customColor }
        default:
          return {}
      }
    }
    return {}
  }

  const getCustomTextColorStyle = () => {
    if (textColor === 'custom' && customTextColor) {
      return { color: customTextColor }
    }
    return {}
  }

  return (
    <Link
      href={link?.url || '#'}
      target={link?.newTab ? '_blank' : undefined}
      rel={link?.newTab ? 'noopener noreferrer' : undefined}
      className={cn(
        'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
        sizeClasses[size],
        color !== 'custom' && colorClasses[color][variant],
        borderRadiusClasses[borderRadius],
        textColor !== 'custom' && textColorClasses[textColor],
      )}
      style={{
        ...getCustomColorStyle(),
        ...getCustomTextColorStyle(),
      }}
    >
      {label}
    </Link>
  )
}

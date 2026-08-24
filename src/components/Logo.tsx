import type { ImgHTMLAttributes } from 'react'
import { useTheme } from '../ThemeContext.tsx'

type LogoVariant = 'lockup' | 'mark' | 'stacked'

const sources: Record<LogoVariant, { light: string; dark?: string }> = {
  lockup: {
    light: '/brand/nuvo-lockup-color.svg',
    dark: '/brand/nuvo-lockup-on-dark.svg',
  },
  mark: {
    light: '/brand/nuvo-mark.svg',
    dark: '/brand/nuvo-mark-on-dark.svg',
  },
  stacked: {
    light: '/brand/nuvo-lockup-stacked.svg',
  },
}

type LogoProps = {
  variant: LogoVariant
} & Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'>

export function Logo({ variant, alt = 'nuvō', ...props }: LogoProps) {
  const { theme } = useTheme()
  const { light, dark } = sources[variant]
  const src = theme === 'dark' && dark ? dark : light

  return <img src={src} alt={alt} {...props} />
}

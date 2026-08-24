export type SiteApp = {
  id: string
  name: string
  pitch: string
  bullets: readonly string[]
  platforms: readonly string[]
  /** Platforms from `platforms` that aren't shipped yet; their chips read “coming soon”. */
  platformsSoon?: readonly string[]
  accent: string
  /** App Store screenshot for the card well. Omit for a same-height placeholder. */
  screenshot?: string
  /** App icon shown beside the name. */
  icon?: string
  /** When set, the App Store chip becomes a link. */
  storeUrl?: string
  /** When set, the Google Play chip (shown for apps with Android in platforms) becomes a link. */
  playUrl?: string
}

export const site = {
  name: 'nuvō',
  email: 'hello@nuvo-software.com',
  url: 'https://nuvo-software.com',
  tagline: 'Custom software, DevOps, and products we ship ourselves.',
  description:
    'nuvō builds custom software and DevOps for teams that need a real product partner — and ships its own apps alongside that work.',
  nav: [
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#apps', label: 'Apps' },
    { href: '#contact', label: 'Contact' },
  ],
  services: [
    {
      id: 'engineering',
      title: 'Full-stack product engineering',
      body: 'Web, iOS, Android, macOS, and visionOS. APIs, data models, and interfaces that hold up in production — not just in a demo.',
    },
    {
      id: 'devops',
      title: 'Cloud and DevOps',
      body: 'AWS, CI/CD, storage, billing, and the unglamorous work that keeps a product running after launch day.',
    },
    {
      id: 'product',
      title: 'From engagement to product',
      body: 'We take on client work and we ship our own apps. Same craft, both directions — you get a partner who actually builds.',
    },
  ],
  work: {
    eyebrow: 'Featured work',
    name: 'GridTrx',
    role: 'Software development services',
    summary:
      'A utility billing and tenant-management platform: meters, readings, occupancy, and invoicing in one system.',
    body: 'Built as a full-stack engagement — React web app, Node API, and AWS for meter photos and production ops. Role-based portals for management, admin, and tenants.',
    highlights: [
      'Meter readings and usage across buildings, units, and tenants',
      'Billing, payments, and Stripe',
      'Portals for management, admin, and tenants',
    ],
    stack: ['React', 'Node.js', 'AWS', 'Stripe'],
    logo: '/work/gridtrx-logo.svg',
    logoMark: '/work/gridtrx-icon.svg',
  },
  appsIntro: 'Products we build for ourselves — and for anyone who needs them.',
  apps: [
    {
      id: 'turns',
      name: 'Turns',
      pitch: 'Mix Apple Music playlists in rotation — one for you, one for me.',
      bullets: [
        'Shuffle each playlist on its own, then rotate tracks',
        'Save favorite mixes with Turns Pro',
        'Listening stays on your device',
      ],
      platforms: ['iOS', 'Android', 'Mac', 'visionOS'],
      platformsSoon: ['Mac', 'visionOS'],
      accent: '#7ee0b8',
      screenshot: '/apps/turns.png',
      icon: '/apps/turns-icon.png',
      storeUrl: 'https://apps.apple.com/us/app/turns-everyone-gets-a-song/id6779756400',
    },
    {
      id: 'buckaroo',
      name: 'Buckaroo',
      pitch: 'Personal finance with an on-device first mate — not a cloud that owns your books.',
      bullets: [
        'Accounts, budgets, investments, and reports',
        'First Mate drafts transactions on-device',
        'Lock the app; iCloud sync is optional',
      ],
      platforms: ['iOS', 'Mac', 'visionOS'],
      accent: '#34c759',
      icon: '/apps/buckaroo-icon.png',
    },
    {
      id: 'stable',
      name: 'Stable',
      pitch: 'Vehicle maintenance for the garage you actually have — cars, bikes, whatever’s in the stall.',
      bullets: [
        'Track vehicles (Stalls) across garages (Stables)',
        'Service history, parts, and photos',
        'Share a Stable with family via iCloud',
      ],
      platforms: ['iOS', 'Mac'],
      accent: '#ef3b3b',
      icon: '/apps/stable-icon.png',
    },
  ] satisfies readonly SiteApp[],
  contact: {
    title: "Let's build it.",
    body: "Tell us what you're building.",
    cta: 'Email hello@nuvo-software.com',
  },
} as const

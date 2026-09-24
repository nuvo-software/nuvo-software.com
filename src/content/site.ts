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
  /** Transparent stacked lockup for the card well when there is no screenshot yet. */
  mark?: { light: string; dark: string }
  /** When set, the App Store chip becomes a link. */
  storeUrl?: string
  /** When set, the Google Play chip (shown for apps with Android in platforms) becomes a link. */
  playUrl?: string
}

export const site = {
  name: 'nuvō',
  email: 'hello@nuvo-software.com',
  url: 'https://nuvo-software.com',
  tagline: 'Custom software and DevOps for other teams, and apps we ship ourselves.',
  description:
    'nuvō builds web and native products for clients, runs the cloud work that keeps them up, and makes its own apps the same way.',
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
      body: 'Web, iOS, Android, Mac, and visionOS. APIs, data, and interfaces meant to hold up after launch.',
    },
    {
      id: 'devops',
      title: 'Cloud and DevOps',
      body: 'AWS, continuous delivery, storage, and billing — the work that keeps a product running once it’s live.',
    },
    {
      id: 'product',
      title: 'Client work and our own apps',
      body: 'Engagements for other teams, and products we ship ourselves. Same people, same standard.',
    },
  ],
  work: {
    eyebrow: 'Featured work',
    name: 'GridTrx',
    role: 'Utility billing platform',
    summary:
      'Meters, readings, occupancy, and invoices for buildings and the people who live in them.',
    body: 'A React web app and Node API, hosted on AWS with the database and the rest of the stack. Separate portals for administrators, management companies, and tenants. Payments go through Stripe.',
    highlights: [
      'Meter readings and usage across buildings, units, and tenants',
      'Billing, payments, and Stripe',
      'Portals for management, admin, and tenants',
    ],
    stack: ['React', 'Node.js', 'AWS', 'Stripe'],
    logo: '/work/gridtrx-logo.svg',
    logoMark: '/work/gridtrx-icon.svg',
  },
  appsIntro: 'Apps we build for ourselves, and ship for everyone else.',
  apps: [
    {
      id: 'turns',
      name: 'Turns',
      pitch: 'Apple Music playlists that take turns — and a party where everyone gets a song.',
      bullets: [
        'Shuffle two or more playlists, then alternate songs',
        'Pass the phone, or invite people nearby, and take turns picking songs',
        'Save mixes with Turns Pro. Listening stays on the device',
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
      pitch: 'Personal finance that lives on your devices, with an assistant that drafts the bookkeeping.',
      bullets: [
        'Accounts, budgets, investments, and reports',
        'First Mate drafts transactions on your device, and you review them before they save',
        'Lock the app, and turn on iCloud sync only if you want it',
      ],
      platforms: ['iOS', 'Mac', 'visionOS'],
      accent: '#34c759',
      icon: '/apps/buckaroo-icon.png',
    },
    {
      id: 'stable',
      name: 'Stable',
      pitch: 'Service records for the cars, bikes, and other vehicles you actually keep.',
      bullets: [
        'Each vehicle is a Stall, and a garage of them is a Stable',
        'Service history, parts, mileage, photos, and reminders',
        'Share a Stable with family through iCloud',
      ],
      platforms: ['iOS', 'Mac'],
      accent: '#ef3b3b',
      icon: '/apps/stable-icon.png',
    },
    {
      id: 'vortex',
      name: 'Vortex',
      pitch: 'Live TV you already pay for, and your Plex library, in one player.',
      bullets: [
        'A guide, channels, and restart for shows that already aired, from IPTV accounts you connect',
        'Movies and shows from Plex, and on-demand from those TV sources',
        'One player on iPhone, Mac, Apple TV, and Vision Pro',
      ],
      platforms: ['iOS', 'Mac', 'Apple TV', 'visionOS'],
      accent: '#6d4dff',
      icon: '/apps/vortex-icon.png',
      mark: {
        light: '/apps/vortex-mark-light.png',
        dark: '/apps/vortex-mark-dark.png',
      },
    },
  ] satisfies readonly SiteApp[],
  contact: {
    title: "Let's build it.",
    body: "Tell us what you're building.",
    cta: 'Email hello@nuvo-software.com',
  },
} as const

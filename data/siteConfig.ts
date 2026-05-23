export const SITE = {
  name: 'VoltX Resources',
  tagline: 'AI-Powered Battery Intelligence & Circular Energy Infrastructure',
  url: 'https://voltxresources.com',
  email: 'contact@voltxresources.com',
  emails: ['Rahul23418@iiitd.ac.in', 'saksham23576@iiitd.ac.in'],
  phone: '+91 99901 93405',
  location: 'IIIT Delhi, New Delhi, India',
  description:
    'VoltX Resources builds an AI-powered second-life lithium-ion battery ecosystem — EV battery repurposing, BESS, AI diagnostics, black mass recycling, and circular economy infrastructure in India.',
  social: {
    linkedin: 'https://linkedin.com/company/voltx-resources',
    twitter: 'https://twitter.com/voltxresources',
  },
} as const;

export const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/technology', label: 'Technology' },
  { path: '/#solution', label: 'Solutions' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
] as const;

export const SEO_LINKS = [
  { path: '/lithium-ion-battery-recycling', label: 'Li-ion Battery Recycling' },
  { path: '/second-life-batteries', label: 'Second-Life Batteries' },
  { path: '/battery-energy-storage-system', label: 'BESS India' },
  { path: '/ev-battery-recycling-india', label: 'EV Battery Recycling India' },
  { path: '/battery-repurposing', label: 'Battery Repurposing' },
  { path: '/ai-battery-diagnostics', label: 'AI Battery Diagnostics' },
  { path: '/battery-circular-economy', label: 'Battery Circular Economy' },
] as const;

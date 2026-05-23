import { InquiryType } from '../types';

export type PartnershipCategory = 'csr' | 'oem' | 'energy' | 'research';

export interface PartnershipCard {
  id: PartnershipCategory;
  icon: string;
  title: string;
  description: string;
  highlights: string[];
  ctaPrimary: string;
  ctaSecondary?: string;
  inquiryType: InquiryType;
  accent: string;
  glow: string;
}

export const PARTNERSHIP_CATEGORIES: PartnershipCard[] = [
  {
    id: 'csr',
    icon: 'Leaf',
    title: 'CSR & Sustainability Partnerships',
    description:
      'Support high-impact battery reuse and recycling initiatives aligned with ESG initiatives, sustainability goals, and environmental responsibility programs.',
    highlights: [
      'Battery waste reduction at scale',
      'Clean energy transition enablement',
      'Circular economy initiatives',
      'Measurable environmental impact',
      'Sustainable infrastructure development',
      'Green innovation & skill development',
    ],
    ctaPrimary: 'Explore CSR Collaboration',
    ctaSecondary: 'Partner for Sustainability Impact',
    inquiryType: 'csr',
    accent: 'text-neon-400',
    glow: 'hover:border-neon-500/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.08)]',
  },
  {
    id: 'oem',
    icon: 'Car',
    title: 'EV & Battery OEM Partnerships',
    description:
      'Collaborate on responsible battery lifecycle management — from collection and AI diagnostics to repurposing, second-life deployment, and material recovery.',
    highlights: [
      'End-of-life battery collection',
      'AI-powered diagnostics integration',
      'Second-life routing optimization',
      'Regulatory & EPR compliance',
      'ESG reporting support',
    ],
    ctaPrimary: 'Discuss OEM Collaboration',
    inquiryType: 'oem',
    accent: 'text-electric-400',
    glow: 'hover:border-electric-500/40 hover:shadow-[0_0_40px_rgba(14,165,233,0.08)]',
  },
  {
    id: 'energy',
    icon: 'Zap',
    title: 'Energy Storage & Infrastructure Partners',
    description:
      'Deploy second-life Battery Energy Storage Systems (BESS) for EV charging, renewable energy storage, telecom, and industrial backup systems.',
    highlights: [
      'Second-life BESS deployment',
      'Solar + storage hybrid systems',
      'EV charging infrastructure support',
      'Grid ancillary services',
      'Industrial backup power',
    ],
    ctaPrimary: 'Explore BESS Deployment',
    inquiryType: 'pilot',
    accent: 'text-amber-400',
    glow: 'hover:border-amber-500/40 hover:shadow-[0_0_40px_rgba(245,158,11,0.08)]',
  },
  {
    id: 'research',
    icon: 'FlaskConical',
    title: 'Research & Innovation Partnerships',
    description:
      'Collaborate with universities, R&D labs, climate-tech accelerators, and innovation programs on sustainable development and circular economy research.',
    highlights: [
      'Joint R&D initiatives',
      'Climate-tech accelerator programs',
      'Academic collaboration',
      'Pilot deployment research',
      'Green innovation programs',
    ],
    ctaPrimary: 'Propose Research Collaboration',
    inquiryType: 'research',
    accent: 'text-purple-400',
    glow: 'hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.08)]',
  },
];

export const ESG_IMPACT_METRICS = [
  { label: 'EV Batteries Diverted from Waste', value: 10000, suffix: '+', prefix: '', icon: 'Battery' },
  { label: 'Battery Lifecycle Extended', value: 10, suffix: ' yrs', prefix: '+', icon: 'RefreshCw' },
  { label: 'CO₂ Emissions Reduced', value: 847, suffix: 't', prefix: '', icon: 'Leaf' },
  { label: 'Energy Storage Enabled', value: 50, suffix: ' MWh', prefix: '', icon: 'Zap' },
  { label: 'Recyclable Materials Recovered', value: 98, suffix: '%', prefix: '', icon: 'Recycle' },
];

export const TRUST_PILLARS = [
  { title: 'AI-Powered Diagnostics', desc: '95%+ SOH accuracy for intelligent lifecycle routing' },
  { title: 'Second-Life Intelligence', desc: 'Maximize value from every retired EV battery pack' },
  { title: 'Sustainable Recycling', desc: '98%+ material recovery through advanced processing' },
  { title: 'Scalable Clean-Tech', desc: 'Modular infrastructure designed for national scale' },
  { title: 'Circular Economy Systems', desc: 'Future-ready closed-loop battery infrastructure' },
];

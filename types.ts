export type Page = 'home' | 'challenge' | 'technology' | 'vision' | 'contact';

export interface NavItem {
  id: Page;
  label: string;
}

export interface Metric {
  label: string;
  value: string;
  subtext: string;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join the CommHawk team. We are an elite group of engineers, designers, and strategists building the future of digital products. Explore open roles and apply today.',
  alternates: {
    canonical: '/careers',
  },
  openGraph: {
    title: 'Careers | CommHawk',
    description:
      'Join the CommHawk team. Explore open engineering, design, and AI roles at CommHawk — a premier technology partner building world-class digital products.',
    url: 'https://commhawk.in/careers',
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

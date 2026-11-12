import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MOUs',
  description:
    'CommHawk Technologies Pvt. Ltd. MOU partners: Bihar Engineering University, NCC Udaan, GGIMS and government engineering colleges across Bihar.',
  alternates: { canonical: '/mou' },
  openGraph: {
    title: 'MOUs | CommHawk Technologies Pvt. Ltd.',
    description: 'Our academic and institutional MOU partners across Bihar.',
    url: 'https://commhawk.in/mou',
  },
};

export default function MouLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

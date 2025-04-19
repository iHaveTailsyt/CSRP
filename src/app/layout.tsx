import '@/styles/globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import AgreementGate from '@/components/AgreementGate';

export const metadata: Metadata = {
  title: 'ER:LC RP Server',
  description: 'Join the most immersive ER:LC roleplay server!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AgreementGate>
          <Header />
          {children}
        </AgreementGate>
      </body>
    </html>
  );
}

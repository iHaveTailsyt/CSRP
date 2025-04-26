'use client';

import Header from '@/components/Header';
import AgreementGate from '@/components/AgreementGate';
import SkeletonCard from '@/components/SkeletonCard';
import { useState, useEffect } from 'react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AgreementGate>
      <Header />
      {isLoading ? (
        <div className="p-6">
          <SkeletonCard />
        </div>
      ) : (
        <div className="p-6">
          {children}
        </div>
      )}
    </AgreementGate>
  );
}

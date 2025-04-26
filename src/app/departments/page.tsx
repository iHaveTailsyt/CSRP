'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { departments } from '@/data/departments';
import SkeletonCard from '@/components/SkeletonCard';

export default function DepartmentsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 800); // Mock data load time

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">🚓 Departments</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} />)
          : departments.map((dept, index) => (
              <Link key={index} href={`/departments/${dept.slug}`}>
                <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all cursor-pointer">
                  <div className="relative w-full h-48">
                    <Image
                      src={dept.image}
                      alt={dept.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2">{dept.name}</h2>

                    {/* Status Badge */}
                    {dept.status && (
                      <div className="mb-2">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold
                            ${dept.status === 'recruiting' ? 'bg-green-600' : ''} 
                            ${dept.status === 'full' ? 'bg-red-600' : ''} 
                            ${dept.status === 'hold' ? 'bg-yellow-500 text-black' : ''} 
                          `}
                        >
                          {dept.status === 'recruiting' && '🟢 Recruiting'}
                          {dept.status === 'full' && '🔴 Full'}
                          {dept.status === 'hold' && '🟡 On Hold'}
                        </span>
                      </div>
                    )}

                    <p className="text-gray-300 text-sm">{dept.description}</p>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}

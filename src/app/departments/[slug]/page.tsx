import { notFound } from 'next/navigation';
import Image from 'next/image';
import { departments } from '@/data/departments'; // Assuming departments is from a separate file
import { X } from 'lucide-react';

// Use the async function properly to handle params and dynamic content
export default async function DepartmentDetail({ params }: { params: Promise<{ slug: string }> }) {
  // Destructure params.slug
  const { slug } = await params;

  // Find the department that matches the slug
  const dept = departments.find((d) => d.slug === slug);

  // If no department is found, return 404
  if (!dept) return notFound();

  return (
    <div className="min-h-screen bg-gray-950 text-white z-50 px-4 py-6">
      {/* Close Button */}
      <a
        href="/departments"
        className="fixed top-4 left-4 text-white hover:text-red-400 transition z-50"
        aria-label="Close"
      >
        <X className="w-8 h-8" />
      </a>

      {/* Centered Status Badge + Discord Button */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
        {/* Status Badge */}
        {dept.status && (
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-semibold
              ${dept.status === 'recruiting' ? 'bg-green-600' : ''}
              ${dept.status === 'full' ? 'bg-red-600' : ''}
              ${dept.status === 'hold' ? 'bg-yellow-500 text-black' : ''}
            `}
          >
            {dept.status === 'recruiting' && '🟢 Recruiting'}
            {dept.status === 'full' && '🔴 Full'}
            {dept.status === 'hold' && '🟡 On Hold'}
          </span>
        )}

        {/* Discord link */}
        {dept.discord && (
          <a
            href={dept.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition"
          >
            Join {dept.name.split('(')[1]?.replace(')', '') || 'Discord'}
          </a>
        )}
      </div>

      <div className="max-w-4xl mx-auto pt-12">
        <Image
          src={dept.image}
          alt={dept.name}
          width={800}
          height={400}
          className="rounded-xl mb-8 w-full object-cover"
        />

        <h1 className="text-4xl font-bold mb-4">{dept.name}</h1>
        <p className="text-lg text-gray-300 mb-6">{dept.description}</p>

        {/* Gallery Section */}
        {dept.gallery && dept.gallery.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {dept.gallery.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`${dept.name} gallery ${i}`}
                width={600}
                height={300}
                className="rounded-md object-cover"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return departments.map((dept) => ({
    slug: dept.slug,
  }));
}


import { notFound } from 'next/navigation';
import Image from 'next/image';
import { departments } from '@/data/departments';
import { X } from 'lucide-react';

type Department = {
  name: string;
  description: string;
  image: string;
  gallery?: string[];
  discord?: string;
  slug: string;
};

export default function DepartmentDetail({ params }: { params: { slug: string } }) {
  // Find the department by slug
  const dept: Department | undefined = departments.find((d) => d.slug === params.slug);

  if (!dept) return notFound(); // If department is not found, show 404

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

        {dept.gallery?.length > 0 && (
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

        {dept.discord && (
          <a
            href={dept.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Join {dept.name.split('(')[1]?.replace(')', '') || 'Discord'}
          </a>
        )}
      </div>
    </div>
  );
}

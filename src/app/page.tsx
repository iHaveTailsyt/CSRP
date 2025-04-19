import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.webp"
            alt="ER:LC Background"
            layout="fill"
            objectFit="cover"
            className="opacity-40"
            priority
          />
        </div>

        <div className="z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">🚨 California State Roleplay</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-xl mx-auto drop-shadow-md">
            The most immersive ER:LC roleplay experience. Realism. Community. Action.
          </p>
          <Link
            href="https://discord.gg/fjYjs3j5Rp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-lg transition"
          >
            Join Our Discord
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 text-center bg-gray-800">
        <h2 className="text-4xl font-semibold mb-4">About Our Server</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          We are a dedicated ER:LC roleplay server offering realistic scenarios, active staff, and custom content.
          Whether you're a police officer, firefighter, or civilian — there's a place for you here.
        </p>
      </section>
    </main>
  )
}
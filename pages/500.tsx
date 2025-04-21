// pages/500.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Custom500() {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white px-4 text-center">
      <div className="flex flex-col items-center space-y-6 max-w-md">
        <h1 className="text-4xl font-bold">500 – Server Error</h1>

        <Image
          src="/images/kick-dog.jpg"
          alt="Sad dog with 'Kick' collar"
          width={400}
          height={400}
          className="rounded-xl shadow-lg"
          priority
        />

        <p className="text-lg">
          Kick tried to help, but something went wrong on our end.
        </p>

        <Link href="/">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}

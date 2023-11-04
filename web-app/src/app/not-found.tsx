'use client';

import Link from 'next/link';
import Header from './_components/Header';

export default function NotFound() {
  return (
    <>
      <Header />

      <main className='bg-white'>
        <div className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
          <div className='global'>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href='/budget'>Return Home</Link>
          </div>
        </div>
      </main>
    </>
  );
}

// File: pages/_app.tsx
import type { AppProps } from 'next/app';
import { Suspense } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...pageProps} />
    </Suspense>
  );
}

import dynamic from 'next/dynamic';
import { useEffect, useLayoutEffect, useState } from 'react';

const HeavyComponent = dynamic(() => import('../components/HeavyComponent'));

export default function Home() {
  const [count, setCount] = useState(0);
  const [browser, setBrowser] = useState('');

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setBrowser(navigator.userAgent);
    }
  }, []); // ❌ Bad for SSR: useLayoutEffect runs before paint, may cause hydration mismatch

  useEffect(() => {
    const interval = setInterval(() => setCount((c) => c + 1), 1000);
    // return () => {};
    return () => {
    clearInterval(interval);
  }; 
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ua = navigator.userAgent;
      const isChrome = ua.includes('Chrome') && !ua.includes('Edge') && !ua.includes('Edg');
      const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
      const isFirefox = ua.toLowerCase().includes('firefox');
      const isIE = ua.includes('MSIE') || ua.includes('Trident');

      if (!isChrome || isSafari || isFirefox || isIE) {
        console.warn('❌ Non-Chrome browser detected. Breaking the app...');

        // ❌ Freeze the main thread for 5s
        const now = performance.now();
        while (performance.now() < now + 5000) {
          // Block browser
        }

        // ❌ Memory leak: grow array in intervals
        setInterval(() => {
          const leaky = [];
          for (let i = 0; i < 1e6; i++) {
            leaky.push(Math.random());
          }
        }, 2000);

        // ❌ Hydration mismatch: add DOM after render
        const div = document.createElement('div');
        div.innerText = '🔥 DOM inserted after hydration (mismatch)';
        div.style.color = 'red';
        document.body.appendChild(div);
      }
    }
  }, []);

  return (
    <>
      <h1>Welcome to Broken App</h1>
      <p>Counter: {count}</p>
      <p>Your browser: {browser}</p>
      <HeavyComponent />
    </>
  );
}

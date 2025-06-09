import { useEffect } from 'react';

export default function LazyComponent() {
  useEffect(() => {
    if (Math.random() > 0.5) {
      throw new Error('Lazy Component failed to load!');
    }
  }, []);

  return <div>Lazy Component Works!</div>;
}

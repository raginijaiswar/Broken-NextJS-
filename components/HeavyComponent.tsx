export default function HeavyComponent() {
  const blockMainThread = () => {
    const now = performance.now();
    while (performance.now() - now < 2000) {} // 2s block
  };
  blockMainThread(); // ❌ BAD PRACTICE

  return <div>Heavy Component Loaded!</div>;
}

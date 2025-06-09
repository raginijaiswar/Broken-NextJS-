# next-broken-showcase

This app is **intentionally broken** to demonstrate performance anti-patterns.

## 💥 Issues Demonstrated

- ❌ Memory Leaks: `setInterval` without cleanup
- 🔁 Re-renders: State updated unnecessarily
- 🧨 Suspense Fail: Lazy components throw errors
- 🐢 Hydration mismatch: `useLayoutEffect` SSR issue
- 📦 Bundle Bloat: Full import of Lodash, Moment
- 🕒 Thread Blocking: Expensive sync operations
- 🌐 Chrome Only: Fails on non-Chrome browsers

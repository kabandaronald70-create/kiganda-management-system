'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function SuccessBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Set a timer to hide the banner after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Clean up the URL so a refresh doesn't show the banner again
      router.replace(pathname, { scroll: false });
    }, 3000);

    return () => clearTimeout(timer);
  }, [router, pathname]);

  if (!isVisible) return null;

  return (
    <div className="bg-emerald-100 border border-emerald-400 text-emerald-700 px-4 py-3 rounded-lg flex justify-between items-center transition-all duration-300">
      <span className="font-semibold">Student added successfully!</span>
      <button
        onClick={() => setIsVisible(false)}
        className="text-emerald-700 hover:text-emerald-900 font-bold"
      >
        ✕
      </button>
    </div>
  );
}

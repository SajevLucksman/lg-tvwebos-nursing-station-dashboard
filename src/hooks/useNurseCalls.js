import { useState, useEffect, useCallback } from 'react';
import { INITIAL_CALLS } from '../data/floors';

export function timeAgo(ts) {
  const sec = Math.floor((Date.now() - ts) / 1000);
  if (sec < 60) return 'Just now';
  const min = Math.floor(sec / 60);
  return min === 1 ? '1 min ago' : `${min} mins ago`;
}

export function useNurseCalls() {
  const [calls, setCalls] = useState(INITIAL_CALLS);
  const [, setTick] = useState(0);

  // Re-render every 15s to update "time ago" labels
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 15000);
    return () => clearInterval(id);
  }, []);

  const addCall = useCallback((room) => {
    setCalls(prev => prev[room] ? prev : { ...prev, [room]: Date.now() });
  }, []);

  const cancelCall = useCallback((room) => {
    setCalls(prev => {
      const next = { ...prev };
      delete next[room];
      return next;
    });
  }, []);

  const sortedCalls = Object.entries(calls).sort((a, b) => b[1] - a[1]);

  return { calls, sortedCalls, addCall, cancelCall };
}

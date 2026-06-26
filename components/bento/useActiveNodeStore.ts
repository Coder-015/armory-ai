import { useSyncExternalStore } from "react";

let activeIndex: number | null = null;
const listeners = new Set<() => void>();

let clearTimer: ReturnType<typeof setTimeout> | null = null;

export function cancelClearTimer() {
  if (clearTimer) {
    clearTimeout(clearTimer);
    clearTimer = null;
  }
}

export function setActiveIndex(i: number | null) {
  cancelClearTimer();
  if (activeIndex === i) return;
  activeIndex = i;
  listeners.forEach((l) => l());
}

export function clearActiveIndexDeferred() {
  if (clearTimer) return;
  clearTimer = setTimeout(() => {
    activeIndex = null;
    listeners.forEach((l) => l());
    clearTimer = null;
  }, 400); // 400ms delay accommodates slow mouse movement to window edge
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getActiveIndex() {
  return activeIndex;
}

export function useActiveIndex() {
  return useSyncExternalStore(subscribe, getActiveIndex, getActiveIndex);
}

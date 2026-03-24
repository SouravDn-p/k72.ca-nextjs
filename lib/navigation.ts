function nextPaint() {
  return new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
}

export function navigateWithTransition(callback: () => void) {
  if (typeof document === "undefined") {
    callback();
    return;
  }

  // Browser fallback
  if (!("startViewTransition" in document)) {
    callback();
    return;
  }

  // `startViewTransition` needs the DOM update to happen before the callback's
  // returned promise resolves, otherwise you may see no transition at all.
  (document as Document & { startViewTransition: (cb: () => Promise<void>) => void }).startViewTransition(
    async () => {
      callback();
      // Give React/Next at least a paint to commit the navigation.
      await nextPaint();
      await nextPaint();
    },
  );
}

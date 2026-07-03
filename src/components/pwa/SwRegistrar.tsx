"use client";

import { useEffect } from "react";

export function SwRegistrar() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;

    navigator.serviceWorker.register("/sw.js").catch(() => {
      // Registration can fail in unsupported contexts; app still works as a website.
    });
  }, []);

  return null;
}

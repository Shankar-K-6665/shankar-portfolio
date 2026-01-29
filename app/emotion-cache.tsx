"use client";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import React from "react";

const cache = createCache({ key: "css", prepend: true });

export default function EmotionCacheProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CacheProvider value={cache}>{children}</CacheProvider>;
}

"use client";

export function linkResolver(doc) {
  const lang = doc.lang.substring(0, 2);

  if (doc.uid === "home") {
    if (lang !== "en") return `/${lang}/`;
  } else {
    return `/${lang}/${doc.uid}`;
  }
}

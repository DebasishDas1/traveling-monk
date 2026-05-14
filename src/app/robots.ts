import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/", "/private/"],
      },
      {
        userAgent: "GPTBot",
        disallow: ["/api/", "/_next/", "/static/"],
      }
    ],
    sitemap: "https://thetravelingmonk.in/sitemap.xml",
  };
}

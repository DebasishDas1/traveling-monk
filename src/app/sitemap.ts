import { MetadataRoute } from "next";
import { trekData } from "@/lib/data/treks";
import { escapesData } from "@/lib/data/escapes";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.thetravelingmonk.in";

  // Dynamic trek routes
  const trekRoutes = trekData.map((trek) => ({
    url: `${baseUrl}/treks/${trek.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Dynamic escape routes
  const escapeRoutes = escapesData.map((escape) => ({
    url: `${baseUrl}/escapes/${escape.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Static routes
  const routes = [
    "",
    "/treks",
    "/escapes",
    "/about",
    "/community",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.9,
  }));

  return [...routes, ...trekRoutes, ...escapeRoutes];
}

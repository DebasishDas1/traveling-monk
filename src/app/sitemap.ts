import { MetadataRoute } from "next";
import { trekData } from "@/lib/data/treks";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thetravelingmonk.in";

  // Dynamic trek routes
  const trekRoutes = trekData.map((trek) => ({
    url: `${baseUrl}/treks/${trek.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Static routes
  const routes = [
    "",
    "/treks",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.9,
  }));

  return [...routes, ...trekRoutes];
}

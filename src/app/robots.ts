import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api", "/_next"]
    },
    sitemap: "https://safar-sathi.angelsaikia.com/sitemap.xml"
  };
}
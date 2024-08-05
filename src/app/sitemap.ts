import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: "https://safar-sathi.angelsaikia.com",
            lastModified: new Date().toISOString(),
        },
        {
            url: "https://safar-sathi.angelsaikia.com/dashboard",
            lastModified: new Date().toISOString(),
        },
        {
            url: "https://safar-sathi.angelsaikia.com/about-us",
            lastModified: new Date().toISOString(),
        },
        {
            url: "https://safar-sathi.angelsaikia.com/load-board",
            lastModified: new Date().toISOString(),
        },
        {
            url: "https://safar-sathi.angelsaikia.com/fleet-management",
            lastModified: new Date().toISOString(),
        },
        {
            url: "https://safar-sathi.angelsaikia.com/partner-network",
            lastModified: new Date().toISOString(),
        },
        {
            url: "https://safar-sathi.angelsaikia.com/incentive-programs",
            lastModified: new Date().toISOString(),
        },
        {
            url: "https://safar-sathi.angelsaikia.com/support",
            lastModified: new Date().toISOString(),
        },
    ];
}

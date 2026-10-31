
import projects from "@/data/projects";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!baseUrl) {
    return [];
  }

  const siteUrl = baseUrl.replace(/\/$/, "");

  const projectPages = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectPages,
  ];
}

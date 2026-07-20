import type { Project, ProjectCategory } from "$lib/types";

export const projects: Project[] = [
  {
    slug: "piste",
    title: "Piste",
    description:
      "iOS app for pinning and annotating terrain features across ski resort maps, with real-time sync across a community of riders.",
    longDescription:
      "Built in Swift and SwiftUI with MapKit to let riders drop and annotate terrain features directly on resort maps. CloudKit powers real-time annotation sync, so a pin dropped on one device shows up for the whole community exploring the same mountain. The app runs in two modes — a private ride journal and a shared terrain map — and was beta tested with a small group of skiers before wider release.",
    category: "swe",
    domain: "geo",
    tags: ["Swift", "SwiftUI", "MapKit", "CloudKit"],
    githubUrl: "https://github.com/mikkoliivak",
    featured: true,
    year: 2026,
    image: "/images/piste.jpg",
  },
  {
    slug: "gis-mapping-tool",
    title: "GIS Mapping Tool",
    description:
      "Geospatial mapping tool built for the Repair and Redress research initiative at Cornell CIS.",
    longDescription:
      "A GIS mapping tool developed for the Repair and Redress research project at Cornell's College of Information Science, combining automated data collection (Selenium, BeautifulSoup) with a mapped front end to make geographically distributed research data explorable.",
    category: "swe",
    domain: "geo",
    tags: ["Python", "HTML", "Selenium", "BeautifulSoup"],
    githubUrl: "https://github.com/mikkoliivak",
    featured: true,
    year: 2026,
    image: "/images/gis-mapping-tool.jpg",
  },
  {
    slug: "acalpy",
    title: "acalpy.io",
    description:
      "Acapella extractor that isolates vocals from .wav/.mp3 files.",
    longDescription:
      "A web tool for extracting acapellas from .wav and .mp3 files, built with a TypeScript/Supabase backend for audio processing and storage.",
    category: "swe",
    domain: "audio",
    tags: ["TypeScript", "Supabase", "JavaScript"],
    githubUrl: "https://github.com/mikkoliivak/acaply.io",
    featured: true,
    year: 2025,
    image: "/images/acalpy.jpg",
  },
  {
    slug: "threeq",
    title: "ThreeQ",
    description:
      "Real-time 3-band audio equalizer plugin with under 5ms latency, built on a hand-optimized C++ DSP pipeline.",
    longDescription:
      "A real-time 3-band equalizer plugin built in JUCE, engineered for under 5ms latency. The C++ DSP pipeline uses careful buffer management to cut CPU overhead by roughly 30% during playback, and the UI exposes interactive filter controls with live parameter automation and frequency-domain visualization — so you can see the signal you're shaping as you shape it.",
    category: "swe",
    domain: "audio",
    tags: ["C++", "C", "JUCE"],
    githubUrl: "https://github.com/mikkoliivak/ThreeQ",
    featured: true,
    year: 2024,
    image: "/images/threeq.jpg",
  },
  {
    slug: "takeout",
    title: "Takeout",
    description: "Original house / UK garage production.",
    category: "music",
    tags: ["House", "UK Garage", "EDM"],
    featured: false,
    year: 2025,
    image: "/images/takeout.jpg",
  },
  {
    slug: "w-u",
    title: "w/u",
    description: "Original UK garage / house production.",
    category: "music",
    tags: ["UK Garage", "House", "EDM"],
    featured: false,
    year: 2025,
    image: "/images/w-u.jpg",
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(
  category: ProjectCategory | "all"
): Project[] {
  if (category === "all") return projects.filter((p) => p.category === "swe");
  return projects.filter((p) => p.category === category);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

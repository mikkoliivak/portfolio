export type ProjectCategory = "swe" | "music" | "art";

// Which signal a project is primarily about — drives the accent color used
// to tag it (amber = audio/DSP, teal = geospatial/sensor, none = general systems work).
export type ProjectDomain = "audio" | "geo";

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  domain?: ProjectDomain;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
}

export interface TabItem {
  id: string;
  label: string;
  category: ProjectCategory | "all" | "resume";
}

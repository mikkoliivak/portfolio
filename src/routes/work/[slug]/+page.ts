import { error } from '@sveltejs/kit';
import { getProjectBySlug, projects } from '$lib/data/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    error(404, 'Project not found');
  }

  return { project };
};

export const entries = () => {
  return projects.map((p) => ({ slug: p.slug }));
};

export const prerender = true;

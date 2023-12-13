import { Project } from '../types';

const projects: Project[] = [
	{
		title: 'Portfolio',
		image: '/images/projects/portfolio.webp',
		demoURL: '/',
		repositoryURL: 'https://github.com/matiasgimenezdev/blog-portfolio',
	},
];

const DELAY = 400;

export const getProjects = (): Promise<Project[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(projects);
		}, DELAY);
	});
};

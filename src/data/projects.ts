import { Project } from '../types';

const projects: Project[] = [
	{
		title: 'Portfolio',
		image: '/images/projects/portfolio.webp',
		demoURL: '/',
		repositoryURL: 'https://github.com/matiasgimenezdev/blog-portfolio',
	},
	{
		title: 'Labyrinth',
		image: '/images/projects/labyrinth-store.webp',
		demoURL: 'https://labyrinth-ecommerce.vercel.app/',
		repositoryURL:
			'https://github.com/matiasgimenezdev/labyrinth-ecommerce',
	},
];

const DELAY = 900;

export const getProjects = (): Promise<Project[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(projects);
		}, DELAY);
	});
};

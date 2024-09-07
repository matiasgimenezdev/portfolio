import { Project } from '../types';

const projects: Project[] = [
	{
		title: 'Portfolio',
		image: '/images/projects/portfolio.webp',
		demoURL: '/',
		repositoryURL: 'https://github.com/matiagimenez/blog-portfolio',
	},
	{
		title: 'Labyrinth',
		image: '/images/projects/labyrinth.webp',
		demoURL: 'https://labyrinth-ecommerce.vercel.app/',
		repositoryURL: 'https://github.com/matiagimenez/labyrinth-ecommerce',
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

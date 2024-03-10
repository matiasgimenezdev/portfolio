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
		image: '/images/projects/labyrinth.webp',
		demoURL: 'https://labyrinth-ecommerce.vercel.app/',
		repositoryURL:
			'https://github.com/matiasgimenezdev/labyrinth-ecommerce',
	},
	{
		title: 'Progressio',
		image: '/images/projects/progressio.png',
		demoURL: 'https://progressio.vercel.app/',
		repositoryURL: 'https://github.com/matiasgimenezdev/progressio',
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

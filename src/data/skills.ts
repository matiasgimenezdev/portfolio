import { Skill } from '../types';

const skills: Skill[] = [
	{
		name: 'HTML',
		alt: 'HTML icon',
		src: '/icons/html.svg',
	},
	{
		name: 'CSS',
		alt: 'CSS icon',
		src: '/icons/css.svg',
	},
	{
		name: 'Tailwind',
		alt: 'TailwindCSS icon',
		src: '/icons/tailwind.svg',
	},
	{
		name: 'Javascript',
		alt: 'Javascript icon',
		src: '/icons/javascript.svg',
	},
	{
		name: 'Typescript',
		alt: 'Typescript icon',
		src: '/icons/typescript.svg',
	},
	{
		name: 'React',
		alt: 'React icon',
		src: '/icons/react.svg',
	},
	{
		name: 'PHP',
		alt: 'PHP icon',
		src: '/icons/php.svg',
	},
	{
		name: 'GIT',
		alt: 'GIT icon',
		src: '/icons/git.svg',
	},
	{
		name: 'Docker',
		alt: 'Docker icon',
		src: '/icons/docker.svg',
	},
	{
		name: 'Postgres',
		alt: 'Postgres icon',
		src: '/icons/postgres.svg',
	},
];

const DELAY = 400;

export const getSkills = (): Promise<Skill[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(skills);
		}, DELAY);
	});
};

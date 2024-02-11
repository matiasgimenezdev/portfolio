import { SkillCategories } from '../types';

const skillCategories: SkillCategories[] = [
	{
		category: 'Frontend',
		skills: [
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
				name: 'TailwindCSS',
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
		],
	},
	{
		category: 'Backend',
		skills: [
			{
				name: 'Node.js',
				alt: 'Node.js icon',
				src: '/icons/node.svg',
			},
			// {
			// 	name: 'PHP',
			// 	alt: 'PHP icon',
			// 	src: '/icons/php.svg',
			// },
			{
				name: 'Postgres',
				alt: 'Postgres icon',
				src: '/icons/postgres.svg',
			},
			{
				name: 'Firebird',
				alt: 'Firebird icon',
				src: '/icons/firebird.png',
			},
		],
	},
	{
		category: 'Tools',
		skills: [
			{
				name: 'Git',
				alt: 'GIT icon',
				src: '/icons/git.svg',
			},
			{
				name: 'Github',
				alt: 'Github icon',
				src: '/icons/github.svg',
			},
			{
				name: 'Docker',
				alt: 'Docker icon',
				src: '/icons/docker.svg',
			},
			{
				name: 'Terminal',
				alt: 'Terminal icon',
				src: '/icons/terminal.svg',
			},
		],
	},
];

const DELAY = 900;

export const getSkills = (): Promise<SkillCategories[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(skillCategories);
		}, DELAY);
	});
};

import { SkillCategories } from '../types';

const skillCategories: SkillCategories[] = [
	{
		category: 'Programming languages',
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
				name: 'Node.js',
				alt: 'Node.js icon',
				src: '/icons/node.svg',
			},
			{
				name: 'PHP',
				alt: 'PHP icon',
				src: '/icons/php.svg',
			},
		],
	},
	{
		category: 'Frameworks',
		skills: [
			{
				name: 'React',
				alt: 'React icon',
				src: '/icons/react.svg',
			},
			{
				name: 'Express',
				alt: 'Express icon',
				src: '/icons/express.svg',
			},
			{
				name: 'TailwindCSS',
				alt: 'TailwindCSS icon',
				src: '/icons/tailwind.svg',
			},
		],
	},
	{
		category: 'Databases',
		skills: [
			{
				name: 'Postgres',
				alt: 'Postgres icon',
				src: '/icons/postgres.svg',
			},
			{
				name: 'Redis',
				alt: 'Redis icon',
				src: '/icons/redis.svg',
			},
			{
				name: 'MySQL',
				alt: 'MySQL icon',
				src: '/icons/mysql.svg',
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
				name: 'Docker',
				alt: 'Docker icon',
				src: '/icons/docker.svg',
			},
			{
				name: 'Terraform',
				alt: 'Terraform icon',
				src: '/icons/terraform.svg',
			},
			{
				name: 'Kubernetes',
				alt: 'Kubernetes icon',
				src: '/icons/kubernetes.svg',
			},
			{
				name: 'Google Cloud',
				alt: 'GCP icon',
				src: '/icons/gcp.svg',
			},
			{
				name: 'Selenium',
				alt: 'Selenium icon',
				src: '/icons/selenium.svg',
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

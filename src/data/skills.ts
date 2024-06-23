import { SkillCategories } from '../types';

const skillCategories: SkillCategories[] = [
	{
		category: 'Languages & frameworks',
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
			{
				name: 'Node.js',
				alt: 'Node.js icon',
				src: '/icons/node.svg',
			},
			{
				name: 'Express',
				alt: 'Express icon',
				src: '/icons/express.svg',
			},
			{
				name: 'PHP',
				alt: 'PHP icon',
				src: '/icons/php.svg',
			},
			{
				name: 'Java',
				alt: 'Java icon',
				src: '/icons/java.svg',
			},
		],
	},
	{
		category: 'Databases',
		skills: [
			{
				name: 'PostgreSQL',
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
		category: 'Infrastructure',
		skills: [
			{
				name: 'Docker',
				alt: 'Docker icon',
				src: '/icons/docker.svg',
			},
			{
				name: 'Kubernetes',
				alt: 'Kubernetes icon',
				src: '/icons/kubernetes.svg',
			},
			{
				name: 'RabbitMQ',
				alt: 'RabbitMQ icon',
				src: '/icons/rabbitmq.svg',
			},
			{
				name: 'Terraform',
				alt: 'Terraform icon',
				src: '/icons/terraform.svg',
			},
			{
				name: 'Github actions',
				alt: 'Github actions icon',
				src: '/icons/github-actions.png',
			},
			{
				name: 'Google Cloud',
				alt: 'GCP icon',
				src: '/icons/gcp.svg',
			},
		],
	},
	{
		category: 'Testing',
		skills: [
			{
				name: 'Selenium',
				alt: 'Selenium icon',
				src: '/icons/selenium.svg',
			},
			{
				name: 'Jest',
				alt: 'Jest icon',
				src: '/icons/jest.svg',
			},
		],
	},
	{
		category: 'Additional tools',
		skills: [
			{
				name: 'Git',
				alt: 'Git icon',
				src: '/icons/git.svg',
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

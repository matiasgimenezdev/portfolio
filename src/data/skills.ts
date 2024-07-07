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
			{
				name: 'Express',
				alt: 'Express icon',
				src: '/icons/express.svg',
			},
			{
				name: 'Python',
				alt: 'Python icon',
				src: '/icons/python.svg',
			},
			{
				name: 'FastAPI',
				alt: 'FastAPI icon',
				src: '/icons/fastapi.svg',
			},
			{
				name: 'PHP',
				alt: 'PHP icon',
				src: '/icons/php.svg',
			},
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
				name: 'RabbitMQ',
				alt: 'RabbitMQ icon',
				src: '/icons/rabbitmq.svg',
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
				name: 'Terraform',
				alt: 'Terraform icon',
				src: '/icons/terraform.svg',
			},
			{
				name: 'GitHub Actions',
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
				name: 'Jest',
				alt: 'Jest icon',
				src: '/icons/jest.svg',
			},
			{
				name: 'Selenium',
				alt: 'Selenium icon',
				src: '/icons/selenium.svg',
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

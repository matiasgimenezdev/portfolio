import { FunctionComponent } from 'react';
import { useTheme } from '../hooks';
import { Job } from '../types';

const jobs: Job[] = [
	{
		title: `Full-stack developer | PwC`,
		from: 'Aug 2024',
		to: 'Today',
		description: ``,
		skills: ['Python', 'React.js'],
	},
	{
		title: `Frontend developer | Universidad Nacional de Luján`,
		from: 'Aug 2022',
		to: 'Aug 2024',
		description: `Development of websites for teaching staff with the main objective of improving teaching functions
			in different subjects of the university. This process involves communication with interested users,
			seeking to understand their specific needs and provide personalized solutions.
			`,
		skills: ['HTML5', 'CSS3', 'Javascript'],
	},
];

export const JobsList: FunctionComponent = () => {
	const { theme } = useTheme();
	return (
		<section className='px-6 w-full md:p-10 md:pb-2 md:pt-2 xl:w-1/2 xl:px-20 py-4 pb-0'>
			<h4
				className={`text-xl py-4 px-2 border-b font-bold ${
					theme === 'light'
						? 'text-grey-dark border-grey-light'
						: 'text-white border-grey-medium'
				} md:text-2xl xl:text-3xl`}
			>
				Experience
			</h4>

			{jobs.map(({ title, from, to, description, skills }) => {
				return (
					<article
						className={`relative pb-6 px-2 border-b ${
							theme == 'light'
								? 'border-grey-light text-grey-dark'
								: 'border-grey-medium text-white'
						}`}
						key={title}
					>
						<span className='absolute top-4 italic text-sm'>
							{from} - {to}
						</span>
						<p
							className={`sm:text-lg py-0 pt-12 md:text-md font-medium lg:text-xl ${
								theme == 'light'
									? 'text-[#0A66C2]'
									: 'text-[#b1cbff]'
							}`}
						>
							{title}
						</p>
						<p className='pt-2'>{description}</p>
						<p className='mt-4 select-none flex flex-wrap gap-2'>
							{skills.map((skill) => {
								return (
									<span
										key={skill}
										className='bg-grey-lightest py-1 px-3 text-grey-darkest rounded-2xl text-xs border border-grey-base'
									>
										{skill}
									</span>
								);
							})}
						</p>
					</article>
				);
			})}
		</section>
	);
};

import { FunctionComponent } from 'react';
import { useTheme } from '../hooks';
import { Job } from '../types';

const jobs: Job[] = [
	{
		title: 'Facilitador CIDETIC at Universidad Nacional de Luján',
		from: 'Aug 2022',
		to: 'Today',
		description:
			'Development of websites for teaching staff in different areas of the University.',
		skills: ['Frontend', 'HTML5', 'CSS3', 'Javascript', 'GIT'],
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
					<p
						className={`relative pb-6 px-2 border-b ${
							theme == 'light'
								? 'border-grey-light text-grey-dark'
								: 'border-grey-medium text-white'
						}`}
					>
						<span className='absolute top-4 italic text-sm'>
							{from} - {to}
						</span>
						<p className='text-lg py-0 pt-12 font-medium lg:text-xl'>
							{title}
						</p>
						<p className='pt-2'>{description}</p>
						<section className='mt-4 select-none flex flex-wrap gap-2 '>
							{skills.map((skill) => {
								return (
									<span className='bg-grey-lightest py-1 px-3 mr-2 text-grey-darkest rounded-2xl text-xs border border-grey-base'>
										{skill}
									</span>
								);
							})}
						</section>
					</p>
				);
			})}
		</section>
	);
};

import { FunctionComponent, useState, useEffect } from 'react';
import { Balancer } from 'react-wrap-balancer';
import { MainLayout } from '../layout';
import { Title, SkillItem, Loader } from '../components';
import { getSkills } from '../data';
import { useTheme } from '../hooks';
import { Skill } from '../types';

export const SkillsPage: FunctionComponent = () => {
	const { theme } = useTheme();
	const [isLoading, setIsLoading] = useState(false);
	const [skills, setSkills] = useState<Skill[]>([]);

	async function fetchProjects() {
		setIsLoading(true);
		const projects: Skill[] = await getSkills();
		setSkills(projects);
		setIsLoading(false);
	}

	useEffect(() => {
		fetchProjects();
	}, []);
	return (
		<MainLayout location='skills'>
			<main
				className={`flex flex-col items-center pt-16 min-h-60 ${
					theme == 'light' ? 'bg-white' : 'bg-grey-darkest'
				}`}
			>
				<Balancer
					className={`text-center font-light text-md w-9/12 px-4 block md:w-1/3 md:text-xl ${
						theme == 'light' ? 'text-grey-darkest' : 'text-white'
					}`}
				>
					<Title title='Skills & Technologies' />
					I'm excited to share with you the different skills I've
					acquired throughout my
					<span className='font-light'> -still brief-</span> journey
					as a software developer.
					<br /> With a passion for learning and a commitment to
					excellence, I continually strive to expand my knowledge and
					keep up with the ever-evolving world of technology.
				</Balancer>

				<section className='container flex mt-8 justify-center mb-4'>
					{isLoading ? (
						<Loader />
					) : (
						<section
							className={`grid py-4 px-2 grid-cols-2 w-90 justify-center ${
								theme == 'light'
									? 'border border-grey-light text-grey-darkest'
									: 'border border-grey-medium text-white'
							} rounded-md md:grid-cols-3 xl:grid-cols-4 `}
						>
							{skills.map(({ name, alt, src }) => {
								return (
									<SkillItem
										name={name}
										alt={alt}
										src={src}
									/>
								);
							})}
						</section>
					)}
				</section>
			</main>
		</MainLayout>
	);
};

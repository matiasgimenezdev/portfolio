import { FunctionComponent, useState, useEffect } from 'react';
import { Balancer } from 'react-wrap-balancer';
import { MainLayout } from '../layout';
import { Title, Loader, SkillsCard } from '../components';
import { getSkills } from '../data';
import { useTheme } from '../hooks';
import { SkillCategories } from '../types';

export const SkillsPage: FunctionComponent = () => {
	const { theme } = useTheme();
	const [isLoading, setIsLoading] = useState(true);
	const [skillCategories, setSkillCategories] = useState<SkillCategories[]>(
		[]
	);

	async function fetchProjects() {
		const categories: SkillCategories[] = await getSkills();
		setSkillCategories(categories);
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

				<section className='container flex flex-col mt-8 justify-center mb-4'>
					{isLoading ? (
						<Loader />
					) : (
						skillCategories.map(({ category, skills }) => {
							console.log(category);
							return (
								<SkillsCard
									key={category}
									category={category}
									skills={skills}
								/>
							);
						})
					)}
				</section>
			</main>
		</MainLayout>
	);
};

import { FunctionComponent, useEffect, useState } from 'react';
import { Balancer } from 'react-wrap-balancer';
import { MainLayout } from '../layout';
import { useTheme } from '../hooks';
import { getProjects } from '../data';
import { Project } from '../types';
import { ProjectCard, Title, Loader } from '../components';

let projects: Project[] = [];

export const ProjectsPage: FunctionComponent = () => {
	const { theme } = useTheme();
	const [isLoading, setIsLoading] = useState(false);

	async function fetchProjects() {
		if (projects.length > 0) return;
		setIsLoading(true);
		projects = await getProjects();
		setIsLoading(false);
	}

	useEffect(() => {
		fetchProjects();
	}, []);

	return (
		<MainLayout location='projects'>
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
					<Title title='Projects' />
					In this section, you will find a collection of some projects
					I have worked on. Each project represents a unique challenge
					I undertook to enhance my skills my abilities. <br />
					You have a link to a live demo and another for the
					repository
				</Balancer>

				<section className='container flex mt-8 justify-center mb-4'>
					{isLoading ? (
						<Loader />
					) : (
						<section className='grid grid-cols-1 w-90 md:grid-cols-2 xl:grid-cols-3'>
							{projects.map(
								({ title, image, demoURL, repositoryURL }) => {
									return (
										<ProjectCard
											key={title}
											title={title}
											image={image}
											demoURL={demoURL}
											repositoryURL={repositoryURL}
										/>
									);
								}
							)}
						</section>
					)}
				</section>
			</main>
		</MainLayout>
	);
};

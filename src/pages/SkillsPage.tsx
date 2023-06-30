import { FunctionComponent, useState, useEffect } from 'react';
import { MainLayout } from '../layout';
import { Balancer } from 'react-wrap-balancer';

type Skill = {
	name: string;
	alt: string;
	src: string;
};

export const SkillsPage: FunctionComponent = () => {
	const [skills, setSkills] = useState<Skill[]>([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = (): void => {
		fetch('/data/skills.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then((response: Response) => {
				return response.json();
			})
			.then((data: Skill[]) => {
				setSkills(data);
			});
	};

	return (
		<MainLayout location='skills'>
			<main className='flex flex-col items-center mt-16 min-h-60'>
				<Balancer className='text-center font-light text-md w-9/12 px-4 block md:w-1/3 xl:text-xl'>
					<h2 className='mb-4 font-medium text-3xl text-grey-darkest drop-shadow-grey xl:text-4xl '>
						Skills & Technologies
					</h2>
					I'm excited to share with you the different skills I've
					acquired throughout my
					<span className='font-light'> -still brief-</span> journey
					as a software developer.
					<br /> With a passion for learning and a commitment to
					excellence, I continually strive to expand my knowledge and
					keep up with the ever-evolving world of technology.
				</Balancer>
				<section className='container flex mt-8 justify-center mb-4'>
					<section className='grid py-4 grid-cols-2 w-90 bg-white-medium rounded-md md:grid-cols-3 xl:grid-cols-4 '>
						{skills.map(({ name, alt, src }) => {
							return (
								<article className='flex py-4 px-4 gap-2 justify-center items-center text-center'>
									<img
										className='h-10 w-10 max-w-10'
										src={src}
										alt={alt}
									/>
									<span className='basis-9/12 text-left text-grey-darkest font-medium text-md'>
										{name}
									</span>
								</article>
							);
						})}
					</section>
				</section>
			</main>
		</MainLayout>
	);
};

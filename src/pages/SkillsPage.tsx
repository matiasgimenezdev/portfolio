import { FunctionComponent } from 'react';
import { MainLayout } from '../layout';
import { Balancer } from 'react-wrap-balancer';

export const SkillsPage: FunctionComponent = () => {
	return (
		<MainLayout location='skills'>
			<main className='flex flex-col items-center mt-16 min-h-60'>
				<Balancer className='text-center font-light text-xl w-9/12 px-4 block md:w-1/3 xl:text-2xl'>
					<h2 className='mb-4 font-medium text-3xl text-grey-darkest drop-shadow-grey xl:text-4xl '>
						Skills & Technologies
					</h2>
					I'm excited to share with you the different skills I've
					acquired throughout my
					<span className='font-light'>-still brief-</span> journey as
					a software developer.
					<br /> With a passion for learning and a commitment to
					excellence, I continually strive to expand my knowledge and
					keep up with the ever-evolving world of technology.
				</Balancer>
			</main>
		</MainLayout>
	);
};

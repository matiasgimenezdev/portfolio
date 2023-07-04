import { FunctionComponent } from 'react';
import { Balancer } from 'react-wrap-balancer';
import { MainLayout } from '../layout';
import { Title } from '../components';
import { useThemeStore } from '../store';
import { skills } from '../data';

export const SkillsPage: FunctionComponent = () => {
	const theme = useThemeStore((state) => state.theme);

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
					<section
						className={`grid py-4 px-2 grid-cols-2 w-90 ${
							theme == 'light'
								? 'bg-white-high text-grey-darkest'
								: 'border border-grey-base text-white'
						} rounded-md md:grid-cols-3 xl:grid-cols-4 `}
					>
						{skills.map(({ name, alt, src }) => {
							return (
								<article
									key={name}
									className='flex py-4 px-4 gap-2 justify-center items-center text-center'
								>
									<img
										className='h-10 w-10 max-w-10'
										src={src}
										alt={alt}
									/>
									<span className='basis-9/12 text-left font-medium text-md'>
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

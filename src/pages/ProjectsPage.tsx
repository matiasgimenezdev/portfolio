import { FunctionComponent, lazy } from 'react';
import { Balancer } from 'react-wrap-balancer';
import { PiGithubLogo } from 'react-icons/pi';
import { TbWorldShare } from 'react-icons/tb';
import { MainLayout } from '../layout';
import { Title } from '../components';
import { useThemeStore } from '../store';
import { projects } from '../data';

export const ProjectsPage: FunctionComponent = () => {
	const theme = useThemeStore((state) => state.theme);

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
					<section className='grid grid-cols-1 w-90 md:grid-cols-2 xl:grid-cols-3'>
						{projects.map(
							({ title, image, demoURL, repositoryURL }) => {
								return (
									<article
										key='title'
										className='w-full px-5 mt-4 rounded-md h-52'
									>
										<figure className='relative h-full w-full'>
											<img
												src={image}
												alt={title}
												loading={'lazy'}
												style={{
													height: '210px',
												}}
												className='rounded-md figure-shadow h-full w-full '
											/>
											<figcaption className='absolute bottom-2 left-3 text-2xl font-medium text-white drop-shadow-figcaption '>
												{title}
											</figcaption>
											<div className='absolute right-5 bottom-2'>
												<a
													href={repositoryURL}
													target='_blank'
													className='inline-block text-white drop-shadow-black mr-3 transition ease-in-out text-2xl hover:scale-125'
												>
													{<PiGithubLogo />}
												</a>
												<a
													href={demoURL}
													target='_blank'
													className='inline-block text-white drop-shadow-black text-2xl transition ease-in-out hover:scale-125'
												>
													{<TbWorldShare />}
												</a>
											</div>
										</figure>
									</article>
								);
							}
						)}
					</section>
				</section>
			</main>
		</MainLayout>
	);
};

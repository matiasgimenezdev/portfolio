import { FunctionComponent } from 'react';
import { Balancer } from 'react-wrap-balancer';
import { DiGithubBadge } from 'react-icons/di';
import { BsLinkedin } from 'react-icons/bs';
import { MainLayout } from '../layout';
import { ArticleList, JobsList, Title } from '../components';
import { useTheme } from '../hooks';

export const HomePage: FunctionComponent = () => {
	const { theme } = useTheme();
	console.log();
	return (
		<MainLayout location='home'>
			<main
				className={`${
					theme == 'light' ? 'bg-white' : 'bg-grey-darkest'
				} flex flex-col items-center pt-16 min-h-60`}
			>
				<Balancer
					className={`${
						theme == 'light' ? 'text-grey-darkest' : 'text-white'
					} text-center font-light text-md w-9/12 px-4 block  md:w-1/3 md:text-xl`}
				>
					<Title title='Hello, there 👋! My name is Matias.' />
					<p>
						This is my personal site made using React, Typescript,
						and TailwindCSS. <br />
						It's a work in progress. You can check out the source
						code on my{' '}
						<a
							href='https://github.com/matiasgimenezdev'
							target='_blank'
							className={`font-medium ${
								theme == 'light'
									? 'text-grey-darkest'
									: 'text-white'
							} hover:underline underline-offset-4`}
						>
							GitHub{' '}
							<DiGithubBadge className='inline mb-1.5 text-xl ' />
						</a>
					</p>
					<p className='pt-2'>
						I am currently doing the fourth year of an Information
						Systems degree in Argentina.
					</p>
					<p className='pt-2'>
						I'm looking for my first software development job.{' '}
						<br />
						Here is my{' '}
						<a
							href='https://linkedin.com/in/matiasgimenezdev/'
							target='_blank'
							className='font-medium text hover:underline underline-offset-4'
						>
							LinkedIn <BsLinkedin className='inline mb-1' />
						</a>
					</p>
				</Balancer>
				<ArticleList title='Latest notes' />
				<JobsList />
			</main>
		</MainLayout>
	);
};

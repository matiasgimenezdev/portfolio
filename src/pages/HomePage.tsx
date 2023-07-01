import { MainLayout } from '../layout';
import { FunctionComponent } from 'react';
import { ArticleList } from '../components';
import { Balancer } from 'react-wrap-balancer';
import { DiGithubBadge } from 'react-icons/di';
import { Title } from '../components';

export const HomePage: FunctionComponent = () => {
	return (
		<MainLayout location='home'>
			<main className='flex flex-col items-center mt-16 min-h-60'>
				<Balancer className='text-center font-light text-md w-9/12 px-4 block  md:w-1/3 md:text-xl'>
					<Title title='Hello, there 👋! My name is Matias.' />
					This is my personal site made using React, Typescript, and
					TailwindCSS. <br />
					It's a work in progress. You can check out the source code
					on my{' '}
					<a
						href='https://github.com/matiasgimenezdev'
						target='_blank'
						className='font-medium text-grey-dark'
					>
						GitHub{' '}
						<DiGithubBadge className='inline mb-1.5 text-xl ' />
					</a>
					.
				</Balancer>
				<ArticleList title='Latest notes' />
			</main>
		</MainLayout>
	);
};

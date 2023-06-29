import { MainLayout } from '../layout';
import { FunctionComponent } from 'react';
import { NotesList } from '../components';
import { Balancer } from 'react-wrap-balancer';
import { DiGithubBadge } from 'react-icons/di';

export const HomePage: FunctionComponent = () => {
	return (
		<MainLayout>
			<main className='flex flex-col items-center mt-16 min-h-60'>
				<Balancer className='text-center font-light text-xl w-9/12 px-4 block  md:w-1/3 xl:text-2xl'>
					<h2 className='mb-4 font-medium text-2xl text-grey-darkest drop-shadow-grey xl:text-3xl  '>
						Hello, there 👋! My name is Matias.
					</h2>
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
				<NotesList title='Latest notes' />
			</main>
		</MainLayout>
	);
};

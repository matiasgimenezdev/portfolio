import { FunctionComponent } from 'react';
import { MainLayout } from '../layout';
import { Balancer } from 'react-wrap-balancer';
import { NotesList } from '../components';
import { Title } from '../components';

export const BlogPage: FunctionComponent = () => {
	return (
		<MainLayout location='blog'>
			<main className='flex flex-col items-center mt-16 min-h-60'>
				<Balancer className='text-center font-light text-md w-9/12 px-4 block md:w-1/3 md:text-xl'>
					<Title title='Welcome to my blog!' />
					What is this? This is my blog.
					<br /> Here you'll find a mix of experiences, tips, and
					discoveries I've had while building cool stuff with lines of
					code. <br /> Thanks for getting here{' '}
					<span className='text-lg'>🤍</span>.
				</Balancer>
				<NotesList title='All my notes' paginated={true} />
			</main>
		</MainLayout>
	);
};

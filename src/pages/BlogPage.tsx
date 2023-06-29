import { FunctionComponent } from 'react';
import { MainLayout } from '../layout';
import { Balancer } from 'react-wrap-balancer';

export const BlogPage: FunctionComponent = () => {
	return (
		<MainLayout location='blog'>
			<main className='flex flex-col items-center mt-16 min-h-60'>
				<Balancer className='text-center font-light text-xl w-9/12 px-4 block leading-8 md:w-1/3 xl:text-2xl'>
					<h2 className='mb-4 font-medium text-3xl text-grey-dark drop-shadow-grey xl:text-4xl  '>
						Blog
					</h2>
					What is this? This is my blog.
					<br /> Here you'll find a mix of experiences, tips, and
					discoveries I've had while building cool stuff with lines of
					code. <br /> Thanks for getting here{' '}
					<span className='text-lg'>🤍</span>.
				</Balancer>
			</main>
		</MainLayout>
	);
};
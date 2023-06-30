import { FunctionComponent } from 'react';
import { MainLayout } from '../layout';
import { Title } from '../components';
import { Balancer } from 'react-wrap-balancer';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';

export const ErrorPage: FunctionComponent = () => {
	return (
		<MainLayout location='error'>
			<main className='flex flex-col items-center mt-16 min-h-60'>
				<Balancer className='text-center font-light text-md w-9/12 px-4 block  md:w-1/3 md:text-xl'>
					<Title title='404' />
					<h3 className='mb-4 font-medium text-2xl text-grey-darkest drop-shadow-grey xl:text-3xl  '>
						We've lost this page
					</h3>
					<p>Sorry, the page you are looking for doesnt't exist.</p>
					<Link
						to='/'
						className='block font-normal text-grey-dark mt-3 hover:-translate-x-5 transition duration-300'
					>
						<IoIosArrowRoundBack className='inline-block' /> Go to
						home page
					</Link>
					<img
						className='rounded-xl w-3/4 m-auto mt-10'
						src='/public/images/other/not-found-404.png'
						alt='Not found page'
					/>
				</Balancer>
			</main>
		</MainLayout>
	);
};

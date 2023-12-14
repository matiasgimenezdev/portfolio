import { FunctionComponent } from 'react';
import { Balancer } from 'react-wrap-balancer';
import { MainLayout } from '../layout';
import { ArticleList } from '../components';
import { Title } from '../components';
import { useTheme } from '../hooks';

export const BlogPage: FunctionComponent = () => {
	const { theme } = useTheme();

	return (
		<MainLayout location='blog'>
			<main
				className={`${
					theme == 'light' ? 'bg-white' : 'bg-grey-darkest'
				} flex flex-col items-center pt-12 min-h-60`}
			>
				<Balancer
					className={`${
						theme == 'light' ? 'text-grey-darkest' : 'text-white'
					} text-center font-light text-md w-9/12 px-4 block md:w-1/3 md:text-xl`}
				>
					<Title title='Welcome to my blog!' />
					<p className='pb-12 md:pb-6'>
						What is this? This is my blog.
						<br /> Here you'll find a mix of experiences, tips, and
						discoveries I've had while building cool stuff with
						lines of code. <br /> Thanks for getting here{' '}
						<span className='text-lg'>🤍</span>.
					</p>
				</Balancer>
				<ArticleList title='All my notes' paginated={true} />
			</main>
		</MainLayout>
	);
};

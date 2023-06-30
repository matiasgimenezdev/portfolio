import { FunctionComponent } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MainLayout } from '../layout';
import { Title } from '../components/Title';

export const ArticlePage: FunctionComponent = () => {
	const { article } = useParams();
	return (
		<MainLayout>
			<main className='flex flex-col items-center mt-16 min-h-60'>
				<Title title={article ?? ''} />
				<Link to='/blog' className='text-lg font-normal'>
					Return to all the notes
				</Link>
			</main>
		</MainLayout>
	);
};

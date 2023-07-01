import { FunctionComponent, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MainLayout } from '../layout';
import { Title } from '../components/Title';
import { helpFetch } from '../helpers';
import { Article } from '../types';

export const ArticlePage: FunctionComponent = () => {
	const { article } = useParams();
	const [currentArticle, setCurrentArticle] = useState<Article>();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data: Article[] = await helpFetch(
					'../../public/data/articles.json'
				);

				const current: Article = data.filter((item) =>
					item.path.includes(article ?? '')
				)[0];
				setCurrentArticle(current);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, [article]);

	return (
		<MainLayout>
			<main className='flex flex-col items-center mt-16 min-h-60'>
				<Title title={currentArticle ? currentArticle.title : ''} />
				<Link to='/blog' className='text-lg font-normal'>
					Return to all the notes
				</Link>
			</main>
		</MainLayout>
	);
};

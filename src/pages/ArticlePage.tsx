import { FunctionComponent, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MainLayout } from '../layout';
import { Title } from '../components/Title';
import { helpFetch } from '../helpers';
import { Article } from '../types';
import { Balancer } from 'react-wrap-balancer';

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
				<Title title={currentArticle ? currentArticle?.title : ''} />
				<ul>
					{currentArticle?.tags.map((tag) => {
						return (
							<span
								className='bg-grey-lightest py-1 px-3 rounded-2xl text-xs'
								key={tag}
							>
								{tag}
							</span>
						);
					})}
				</ul>
				<Balancer className='text font-light mt-4 text-md min-w-full px-6 block md:text-lg md:p-8'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptates, illo placeat officiis, sed quia cupiditate quas
					labore nulla ea vero libero! Natus expedita a consequuntur
					nam quaerat dignissimos aliquam at? Lorem ipsum dolor sit
					amet consectetur adipisicing elit. Voluptates, illo placeat
					officiis, sed quia cupiditate quas labore nulla ea vero
					libero! Natus expedita a consequuntur nam quaerat
					dignissimos aliquam at?
				</Balancer>
				<Link to='/blog' className='text-md font-normal mt-4'>
					Return to all the notes
				</Link>
			</main>
		</MainLayout>
	);
};

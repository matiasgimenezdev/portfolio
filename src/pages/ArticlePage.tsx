import { FunctionComponent, useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { MainLayout } from '../layout';
import { Title } from '../components/Title';
import { helpFetch } from '../helpers';
import { Article } from '../types';
import { Balancer } from 'react-wrap-balancer';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export const ArticlePage: FunctionComponent = () => {
	const { article } = useParams();
	const [currentArticle, setCurrentArticle] = useState<Article>();
	const [language, setLanguage] = useState<string>('english');
	const [articleContent, setArticleContent] = useState('');

	const handleLanguageSwitch = (): void => {
		if (language == 'english') {
			setLanguage('spanish');
		} else {
			setLanguage('english');
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data: Article[] = await helpFetch('/data/articles.json');

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

	useEffect(() => {
		const getArticleContent = async () => {
			const filePath = `/content/${currentArticle?.id}/${currentArticle?.id}.html`;
			try {
				const response = await fetch(filePath);
				const htmlContent = await response.text();
				setArticleContent(htmlContent);
			} catch (error) {
				<Navigate to='/error' />;
			}
		};

		getArticleContent();
	}, [currentArticle]);

	return (
		<MainLayout>
			<main className='flex flex-col items-center mt-16 min-h-60'>
				<button
					className='w-7 h-7 text-center mb-3'
					onClick={handleLanguageSwitch}
				>
					{language === 'english' ? (
						<img
							src='/icons/english.svg'
							alt='USA flag'
							className='m-auto'
						/>
					) : (
						<img
							src='/icons/spanish.svg'
							alt='Spain flag'
							className='m-auto'
						/>
					)}
				</button>
				<p>{currentArticle?.fullDate}</p>
				<Title title={currentArticle ? currentArticle?.title : ''} />

				<ul>
					{currentArticle?.tags.map((tag) => {
						return (
							<span
								className='bg-grey-lightest py-1 px-3 ml-1 rounded-2xl text-xs'
								key={tag}
							>
								{tag}
							</span>
						);
					})}
				</ul>

				<Balancer
					dangerouslySetInnerHTML={{ __html: articleContent }}
					className='text font-light mt-4 text-md min-w-full px-6 block py-2 md:text-lg md:px-32'
				/>
				<Link to='/blog' className='text-md font-normal mt-4'>
					Return to all the notes
				</Link>
			</main>
		</MainLayout>
	);
};

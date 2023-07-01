import { FunctionComponent, useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { MainLayout } from '../layout';
import { Title } from '../components/Title';
import { helpFetch } from '../helpers';
import { Article } from '../types';
import { Balancer } from 'react-wrap-balancer';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

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
				const data: Article[] = await helpFetch(
					'../../src/data/articles.json'
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

	useEffect(() => {
		const getArticleContent = async () => {
			const filePath = `/content/${currentArticle?.id}/${currentArticle?.id}-${language}.mdx`;
			try {
				const response = await fetch(filePath);
				const htmlContent = await response.text();
				setArticleContent(htmlContent);
			} catch (error) {
				<Navigate to='/error' />;
			}
		};

		getArticleContent();
	}, [currentArticle, language]);

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
								className='bg-grey-lightest py-1 px-3 ml-1 text-grey-darkest rounded-2xl text-xs border border-grey-base'
								key={tag}
							>
								{tag}
							</span>
						);
					})}
				</ul>

				<Balancer className='text font-light mt-4 text-md  px-6 block py-2 min-w-[75%] md:text-lg md:px-16'>
					<ReactMarkdown
						remarkPlugins={[remarkGfm]}
						linkTarget='_blank'
					>
						{articleContent}
					</ReactMarkdown>
				</Balancer>

				<Link
					to='/blog'
					className='text-md font-semibold text-grey-darkest mt-4 bg-white-high p-2 px-3 rounded-lg'
				>
					Return to all the notes
				</Link>
			</main>
		</MainLayout>
	);
};

import { FunctionComponent, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { MainLayout } from '../layout';
import { Title } from '../components';
import { Article } from '../types';
import { useLanguageStore, useThemeStore } from '../store';
import { articles } from '../data';
import { Loader } from '../components';

export const ArticlePage: FunctionComponent = () => {
	const { article } = useParams();
	const [currentArticle, setCurrentArticle] = useState<Article>();
	const [articleContent, setArticleContent] = useState<string>('');
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();
	const language = useLanguageStore((state) => state.language);
	const updateLanguage = useLanguageStore((state) => state.updateLanguage);
	const theme = useThemeStore((state) => state.theme);

	const handleLanguageSwitch = (): void => {
		if (language == 'english') {
			updateLanguage('spanish');
		} else {
			updateLanguage('english');
		}
	};

	useEffect(() => {
		const getArticleContent = async () => {
			const current: Article = articles.filter((item) =>
				item.path.includes(article ?? '')
			)[0];
			if (current) {
				setCurrentArticle(current);
			} else {
				navigate('/error');
			}

			try {
				const filePath = `/content/${currentArticle?.id}/${currentArticle?.id}-${language}.html`;
				const response = await fetch(filePath);
				if (!response) {
					throw new Error('Error fetching the file');
				}
				const htmlContent = await response.text();
				setArticleContent(htmlContent);
				setIsLoading(false);
			} catch (error) {
				navigate('/error');
			}
		};
		getArticleContent();
	}, [currentArticle, language, navigate, article]);

	return (
		<MainLayout>
			{isLoading ? (
				<Loader />
			) : (
				<main
					className={`flex flex-col items-center pt-16 min-h-60 ${
						theme == 'light'
							? 'text-grey-dark bg-white'
							: 'text-white bg-grey-darkest'
					}`}
				>
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
					<Title
						title={currentArticle ? currentArticle?.title : ''}
					/>

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

					<p
						dangerouslySetInnerHTML={{ __html: articleContent }}
						className={`${
							theme == 'light'
								? 'text-grey-darkest'
								: 'text-white'
						} text font-light mt-4 text-md w-[100%] xs:w-9/12 px-6 block py-2 md:w-[70%] md:text-lg`}
					/>

					<Link
						to='/blog'
						className={`text-md font-semibold ${
							theme == 'light'
								? 'text-grey-darkest'
								: 'text-white'
						} mt-4 p-2 px-3 hover:-translate-x-5 transition duration-300 text-lg`}
					>
						<IoIosArrowRoundBack className='inline-block text-xl' />{' '}
						Return to the blog
					</Link>
				</main>
			)}
		</MainLayout>
	);
};

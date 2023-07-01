import { FunctionComponent, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MainLayout } from '../layout';
import { Title } from '../components/Title';
import { helpFetch } from '../helpers';
import { Article } from '../types';
import { IoIosArrowRoundBack } from 'react-icons/io';

export const ArticlePage: FunctionComponent = () => {
	const { article } = useParams();
	const [currentArticle, setCurrentArticle] = useState<Article>();
	const [language, setLanguage] = useState<string>('english');
	const [articleContent, setArticleContent] = useState<string>('');
	const navigate = useNavigate();

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

				if (!current) {
					throw new Error('Resource not found');
				}

				setCurrentArticle(current);
			} catch (error) {
				navigate('/error');
			}
		};
		fetchData();
	}, [article, navigate]);

	useEffect(() => {
		const getArticleContent = async () => {
			const filePath = `/content/${currentArticle?.id}/${currentArticle?.id}-${language}.html`;
			try {
				const response = await fetch(filePath);
				if (!response) {
					throw new Error('Error fetching the file');
				}
				const htmlContent = await response.text();
				setArticleContent(htmlContent);
			} catch (error) {
				navigate('/error');
			}
		};

		getArticleContent();
	}, [currentArticle, language, navigate]);

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

				<p
					dangerouslySetInnerHTML={{ __html: articleContent }}
					className='text font-light mt-4 text-md w-[100%] xs:w-9/12 px-6 block py-2 md:w-[70%] md:text-lg '
				/>

				<Link
					to='/blog'
					className='text-md font-semibold text-grey-darkest mt-4 p-2 px-3 rounded-lg hover:-translate-x-5 transition duration-300'
				>
					<IoIosArrowRoundBack className='inline-block' /> Return to
					the blog
				</Link>
			</main>
		</MainLayout>
	);
};

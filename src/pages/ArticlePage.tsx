import { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MainLayout } from '../layout';
import { Article as ArticleType } from '../types';
import { getArticle } from '../data';
import { useLanguage } from '../hooks';
import { Article } from '../components';

export const ArticlePage: FunctionComponent = () => {
	const { article } = useParams();
	const [currentArticle, setCurrentArticle] = useState<ArticleType>();
	const [currentContent, setCurrentContent] = useState<string>('');
	const navigate = useNavigate();
	const { language } = useLanguage();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getArticleContent = async () => {
			const current: ArticleType = await getArticle(article ?? '');
			if (current) {
				setCurrentArticle(current);
				const path: string =
					language === 'english'
						? `${current.contentPath}-en.html`
						: `${current.contentPath}-es.html`;
				fetch(path)
					.then((response) => response.text())
					.then((data) => {
						const timeoutId: number = setTimeout(() => {
							setIsLoading(false);
							clearTimeout(timeoutId);
						}, 1000);
						setCurrentContent(data);
					});
			} else {
				navigate('/error');
			}
		};

		getArticleContent();
	}, [currentArticle, currentContent, language, navigate, article]);

	return (
		<MainLayout>
			<Article
				currentArticle={currentArticle}
				currentContent={currentContent}
				isLoading={isLoading}
			/>
		</MainLayout>
	);
};

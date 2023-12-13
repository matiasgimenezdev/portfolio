import { Article } from '../types';

export const articles: Article[] = [
	{
		title: 'Hello world 👋',
		date: 'Jul 1',
		fullDate: 'July 1, 2023',
		tags: ['blog'],
		path: '/blog/hello-world',
		id: 'hello-world',
		contentPath: '/articles/hello-world/hello-world',
	},
];

const DELAY = 0;

export const getArticles = (): Promise<Article[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(articles);
		}, DELAY);
	});
};

export const getArticle = (id: string): Promise<Article> => {
	return new Promise((resolve) => {
		const article: Article = articles.filter((item) =>
			item.path.includes(id)
		)[0];

		setTimeout(() => {
			resolve(article);
		}, DELAY);
	});
};

import { Article } from '../types';

export const articles: Article[] = [
	{
		title: 'Looking for my first job 💼',
		date: 'Jun 23',
		fullDate: 'June 23, 2024',
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

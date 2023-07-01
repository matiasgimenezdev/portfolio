import { FunctionComponent, useState, useEffect } from 'react';
import { ArticleLink } from './ArticleLink';
import { Link } from 'react-router-dom';
import { helpFetch } from '../helpers';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

type ArticleListProps = {
	title: string;
	paginated?: boolean;
};

type Article = {
	title: string;
	date: string;
	tags: string[];
	path: string;
	id: string;
};

export const ArticleList: FunctionComponent<ArticleListProps> = ({
	title,
	paginated = false,
}) => {
	const [articles, setArticles] = useState<Article[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data: Article[] = await helpFetch(
					'../../public/data/articles.json'
				);
				setArticles(data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	const renderNotes = () => {
		if (!paginated) {
			return (
				<>
					{articles
						.slice(-4)
						.reverse()
						.map(({ title, date, path, id }: Article) => (
							<ArticleLink
								key={id}
								title={title}
								date={date}
								path={path}
							/>
						))}
					<Link to='/blog'>
						<p className='h-16 px-2 border-b border-grey-light flex items-center justify-between transition ease-in-out hover:bg-white-medium'>
							<span className='font-normal text-grey-dark text-lg '>
								+ Read more notes ...
							</span>
						</p>
					</Link>
				</>
			);
		} else {
			return (
				<>
					{articles.map(({ title, date, path }: Article) => (
						<ArticleLink
							key={title}
							title={title}
							date={date}
							path={path}
						/>
					))}
					<ul className='w-full text-center py-2'>
						<li className='inline-block hidden'>
							<BsArrowLeftShort className='inline-block' />
						</li>
						<li className='inline-block mr-1 font-bold'>1</li>
						<li className='inline-block mr-1'>2</li>
						<li className='inline-block mr-1'>3</li>
						<li className='inline-block'>
							<BsArrowRightShort className='inline-block' />
						</li>
					</ul>
				</>
			);
		}
	};

	return (
		<section className='px-6 w-full md:p-10 xl:w-1/2 xl:px-20 xl:py-10'>
			<h4 className='text-xl py-4 px-2 border-b border-grey-light font-bold text-grey-dark md:text-2xl xl:text-3xl '>
				{title}
			</h4>
			<div className='mb-2'>{renderNotes()}</div>
		</section>
	);
};

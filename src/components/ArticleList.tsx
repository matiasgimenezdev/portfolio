import { FunctionComponent, useState, useEffect } from 'react';
import { ArticleLink } from './ArticleLink';
import { Link } from 'react-router-dom';
import { helpFetch } from '../helpers';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { Article } from '../types';

type ArticleListProps = {
	title: string;
	paginated?: boolean;
};

export const ArticleList: FunctionComponent<ArticleListProps> = ({
	title,
	paginated = false,
}) => {
	const [articles, setArticles] = useState<Article[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [pagesCount, setPagesCount] = useState<number>(1);
	const [pages, setPages] = useState<Article[][]>([]);
	const max = 4;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data: Article[] = await helpFetch('/data/articles.json');
				setArticles(data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		const pages: Article[][] = [];
		const pagesCount: number = Math.ceil(articles.length / max);
		setPagesCount(pagesCount);

		for (let i = 0; i < pagesCount; i += 1) {
			let page: Article[];
			if (i + 1 === pagesCount) {
				page = articles.slice(i * max, articles.length + 1);
			} else {
				page = articles.slice(i * max, i * max + max);
			}
			pages.push(page);
		}
		setPages(pages);
	}, [articles]);

	const renderCurrentPage = () => {
		if (pages.length === 0) {
			return null;
		}

		return pages[currentPage - 1].map(
			({ title, date, path, id }: Article) => (
				<ArticleLink key={id} title={title} date={date} path={path} />
			)
		);
	};

	const renderPaginationIndex = () => {
		return (
			<ul className='w-full text-center py-4 pb-0'>
				<li
					className={`${
						currentPage === 1 ? 'hidden' : 'inline-block'
					} mr-2 text-lg`}
					onClick={() => {
						setCurrentPage(currentPage - 1);
					}}
				>
					<BsArrowLeftShort className='inline-block' />
				</li>

				{pages.map((_, index) => {
					if (pagesCount > 6) {
						if (
							index === 0 ||
							index === pagesCount - 1 ||
							(index >= currentPage - 2 &&
								index <= currentPage + 1)
						) {
							return (
								<li
									key={index + 1}
									className={`inline-block mr-1 px-1 text-lg ${
										index + 1 === currentPage
											? 'font-bold'
											: ''
									}`}
									onClick={() => {
										setCurrentPage(index + 1);
									}}
								>
									{index + 1}
								</li>
							);
						} else if (
							index === currentPage - 3 ||
							index === currentPage + 2
						) {
							return (
								<li
									key={index + 1}
									className='inline-block mx-1 text-lg'
								>
									...
								</li>
							);
						}
					} else {
						return (
							<li
								key={index + 1}
								className={`inline-block mr-1 px-1 text-lg ${
									index + 1 === currentPage ? 'font-bold' : ''
								}`}
								onClick={() => {
									setCurrentPage(index + 1);
								}}
							>
								{index + 1}
							</li>
						);
					}
				})}

				<li
					className={`${
						currentPage === pagesCount ? 'hidden' : 'inline-block'
					} text-lg`}
					onClick={() => {
						setCurrentPage(currentPage + 1);
					}}
				>
					<BsArrowRightShort className='inline-block' />
				</li>
			</ul>
		);
	};

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
					{renderCurrentPage()}
					{renderPaginationIndex()}
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

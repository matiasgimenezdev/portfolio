import { FunctionComponent } from 'react';
import { Article as ArticleType } from '../../types';
import { Loader, Title } from '..';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useTheme, useLanguage } from '../../hooks';

type ArticleProps = {
	currentArticle?: ArticleType;
	currentContent: string;
	isLoading: boolean;
};

export const Article: FunctionComponent<ArticleProps> = ({
	currentArticle,
	currentContent,
	isLoading,
}) => {
	const { theme } = useTheme();
	const { language, handleLanguageSwitch } = useLanguage();

	return (
		<article
			className={`flex flex-col items-center ${
				theme == 'light'
					? 'text-grey-dark bg-white'
					: 'text-white bg-grey-darkest'
			} ${!isLoading ? 'min-h-60 pt-16' : 'min-h-[35vh] pt-32'}`}
		>
			{isLoading ? (
				<Loader />
			) : (
				<>
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
					{isLoading ? (
						<Loader />
					) : (
						<p
							dangerouslySetInnerHTML={{
								__html: currentArticle ? currentContent : '',
							}}
							className={`${
								theme == 'light' ? 'text-black' : 'text-white'
							} text font-light mt-4 w-[100%] xs:w-9/12 px-6 block py-2 md:w-[70%] md:text-lg`}
						/>
					)}

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
				</>
			)}
		</article>
	);
};

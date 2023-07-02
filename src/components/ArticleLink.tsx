import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { useThemeStore } from '../store';

type ArticleLinkProps = {
	title: string;
	date: string;
	path: string;
};

export const ArticleLink: FunctionComponent<ArticleLinkProps> = ({
	title,
	date,
	path,
}) => {
	const theme = useThemeStore((state) => state.theme);

	return (
		<LazyMotion features={domAnimation}>
			<Link to={path}>
				<m.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.6 }}
					className={`h-16 md:text-lg text-sm ${
						theme == 'light'
							? 'text-grey-darkest border-grey-light hover:bg-white-medium'
							: 'text-white border-grey-medium hover:bg-grey-dark'
					} font-normal px-2 border-b flex items-center justify-between transition ease-in-out`}
				>
					<span className='min-w-[70%] px-0'>{title}</span>{' '}
					<time className='text-right min-w-[20%] inline-block mr-2 text-sm xl:mr-10'>
						{date}
					</time>
				</m.p>
			</Link>
		</LazyMotion>
	);
};

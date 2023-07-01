import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

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
	return (
		<Link to={path}>
			<AnimatePresence>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.8 }}
					className='h-16 md:text-lg text-grey-darkest font-normal px-2 border-b border-grey-light flex items-center justify-between transition ease-in-out hover:bg-white-medium'
				>
					<span>{title}</span>{' '}
					<time className='inline-block mr-4 text-sm xl:mr-10'>
						{date}
					</time>
				</motion.p>
			</AnimatePresence>
		</Link>
	);
};

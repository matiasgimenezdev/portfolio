import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

type NoteLinkProps = {
	title: string;
	date: string;
	path: string;
};

export const NoteLink: FunctionComponent<NoteLinkProps> = ({
	title,
	date,
	path,
}) => {
	return (
		<Link to={path}>
			<p className='h-16 md:text-lg text-grey-darkest font-normal px-2 border-b border-grey-light flex items-center justify-between transition ease-in-out hover:bg-white-medium'>
				<span>{title}</span>{' '}
				<time className='inline-block mr-4 text-sm xl:mr-10'>
					{date}
				</time>
			</p>
		</Link>
	);
};

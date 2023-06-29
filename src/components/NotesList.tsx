import { FunctionComponent } from 'react';
import { NoteLink } from './NoteLink';
import { Link } from 'react-router-dom';

type NotesListProps = {
	title: string;
};

export const NotesList: FunctionComponent<NotesListProps> = ({ title }) => {
	return (
		<section className='px-6 py-4 w-full md:p-10 xl:w-1/2 xl:px-20 xl:py-10'>
			<h4 className='text-xl py-4 px-2 border-b border-grey-light font-bold text-grey-dark md:text-2xl xl:text-3xl'>
				{title}
			</h4>
			<div className='mb-2'>
				<NoteLink title='Note title' date='Jun 29' path='/blog/note1' />
				<NoteLink title='Note title' date='Jun 29' path='/blog/note1' />
				<NoteLink title='Note title' date='Jun 29' path='/blog/note1' />
				<NoteLink title='Note title' date='Jun 29' path='/blog/note1' />
				<Link to='/blog'>
					<p className='h-16 px-2 border-b border-grey-light flex items-center justify-between transition ease-in-out hover:bg-grey-light'>
						<span className='font-normal text-grey-dark text-lg '>
							+ Read more notes ...
						</span>
					</p>
				</Link>
			</div>
		</section>
	);
};

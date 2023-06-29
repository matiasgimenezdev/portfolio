import { MainLayout } from '../layout';
import { FunctionComponent } from 'react';
import { Hero, NotesList } from '../components';

export const HomePage: FunctionComponent = () => {
	return (
		<MainLayout>
			<main className='flex flex-col items-center mt-16 min-h-60'>
				<Hero />
				<NotesList title='Latest notes' />
			</main>
		</MainLayout>
	);
};

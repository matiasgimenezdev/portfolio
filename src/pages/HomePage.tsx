import { MainLayout } from '../layout';
import { FunctionComponent } from 'react';
import { Hero } from '../components';

export const HomePage: FunctionComponent = () => {
	return (
		<MainLayout>
			<main className='flex flex-col items-center mt-16 min-h-60'>
				<Hero />
				{/* <List title="Latest notes"/> */}
				{/* o pensar algun componente. Tener en cuenta que load more notes es un 
							enlace a /blog */}
			</main>
		</MainLayout>
	);
};

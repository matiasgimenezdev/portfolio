import { MainLayout } from '../layout';
import { FunctionComponent } from 'react';
import Balancer from 'react-wrap-balancer';

export const HomePage: FunctionComponent = () => {
	return (
		<MainLayout>
			<main className='flex flex-col items-center'>
				<Balancer className='text-center text-xl w-1/3 block leading-8 mt-20'>
					Hello, there 👋! My name is Matias. <br />
					This is my personal site, made using React, Typescript, and
					TailwindCSS. <br />
					It's a work in progress. You can check out the source code
					on my GitHub.
				</Balancer>
				{/* <List title="Latest notes"/> */}
				{/* o pensar algun componente. Tener en cuenta que load more notes es un 
							enlace a /blog */}
			</main>
		</MainLayout>
	);
};

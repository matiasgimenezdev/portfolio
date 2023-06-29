import { Navbar, Footer } from '../components';
import { ReactNode, FunctionComponent } from 'react';

type MainLayoutProps = {
	children: ReactNode;
	location?: string;
};

export const MainLayout: FunctionComponent<MainLayoutProps> = ({
	children,
	location = '',
}: MainLayoutProps) => {
	return (
		<>
			<Navbar
				sections={['Blog', 'Projects', 'Skills']}
				location={location}
			/>
			{children}
			<Footer />
		</>
	);
};

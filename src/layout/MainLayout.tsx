import { Navbar } from '../components';
import { ReactNode, FunctionComponent } from 'react';

interface MainLayoutProps {
	children: ReactNode;
	location?: string;
}

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
		</>
	);
};

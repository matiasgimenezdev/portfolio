import { Navbar, Footer } from '../components';
import { ReactNode, FunctionComponent } from 'react';
import { m, LazyMotion, domAnimation } from 'framer-motion';

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
			<LazyMotion features={domAnimation}>
				<m.div
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 100 }}
					transition={{ duration: 0.6 }}
				>
					{children}
					<Footer />
				</m.div>
			</LazyMotion>
		</>
	);
};

import { Navbar, Footer } from '../components';
import { ReactNode, FunctionComponent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
			<AnimatePresence>
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 100 }}
					transition={{ duration: 0.8 }}
				>
					{children}
					<Footer />
				</motion.div>
			</AnimatePresence>
		</>
	);
};

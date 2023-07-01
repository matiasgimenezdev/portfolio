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
					key={location}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1.5 }}
				>
					{children}
					<Footer />
				</motion.div>
			</AnimatePresence>
		</>
	);
};

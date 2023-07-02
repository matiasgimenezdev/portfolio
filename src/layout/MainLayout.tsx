import { ReactNode, FunctionComponent, useEffect } from 'react';
import { LazyMotion, m, domAnimation } from 'framer-motion';
import { Navbar, Footer } from '../components';
import { useThemeStore } from '../store';

type MainLayoutProps = {
	children: ReactNode;
	location?: string;
};

export const MainLayout: FunctionComponent<MainLayoutProps> = ({
	children,
	location = '',
}: MainLayoutProps) => {
	const theme = useThemeStore((state) => state.theme);
	useEffect(() => {
		if (theme === 'dark') {
			document.body.style.background = '#343A40';
		} else {
			document.body.style.background = '#ffffff';
		}

		return () => {
			// Restaurar el color de fondo predeterminado al desmontar el componente
			document.body.style.backgroundColor = '';
		};
	}, [theme]);
	return (
		<>
			<Navbar
				sections={['Blog', 'Projects', 'Skills']}
				location={location}
			/>
			<LazyMotion features={domAnimation}>
				<m.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.6 }}
				>
					{children}
					<Footer />
				</m.div>
			</LazyMotion>
		</>
	);
};

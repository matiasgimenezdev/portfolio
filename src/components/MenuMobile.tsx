/* eslint-disable no-mixed-spaces-and-tabs */
import { LazyMotion, m, domAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu } from '../types';
import { useThemeStore } from '../store/themeStore';

export const MenuMobile = ({ sections, location, isOpen }: Menu) => {
	const theme = useThemeStore((state) => state.theme);

	return (
		<LazyMotion features={domAnimation}>
			{isOpen && (
				<m.ul
					initial={{ opacity: 0, x: 100 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 100 }}
					transition={{ duration: 0.4 }}
					className={`absolute z-50  top-[58px] -right-3 border-l ${
						theme == 'light'
							? 'bg-white border-grey-dark'
							: 'bg-grey-darkest border-grey-medium'
					}   w-60 text-center md:hidden`}
				>
					{sections.map((element: string) => {
						return (
							<li
								className={`${
									location === element.toLowerCase()
										? `font-bold ${
												theme == 'light'
													? 'border-grey-dark drop-shadow-black'
													: 'border-grey-medium drop-shadow-grey'
										  } text-white`
										: `${
												theme == 'light'
													? 'text-grey-dark border-grey-dark bg-white'
													: 'text-white border-grey-medium bg-grey-darkest'
										  }`
								} ${
									isOpen ? 'block' : 'hidden'
								} text-xl flex justify-center items-center h-16 border-b md:ml-8 md:border-none md:inline`}
								key={element}
							>
								<Link to={`/${element.toLowerCase()}`}>
									{element}
								</Link>
							</li>
						);
					})}
				</m.ul>
			)}
		</LazyMotion>
	);
};

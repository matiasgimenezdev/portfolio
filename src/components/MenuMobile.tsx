import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu } from '../types';

export const MenuMobile = ({ sections, location, isOpen }: Menu) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.ul
					initial={{ opacity: 0, x: 100 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 100 }}
					transition={{ duration: 0.5 }}
					className={`absolute z-50  top-14 -right-3 bg-white-medium border-l border-grey-dark w-60 text-center md:bg-white md:hidden md:border-none`}
				>
					{sections.map((element: string) => {
						return (
							<li
								className={`${
									location === element.toLowerCase()
										? 'font-bold drop-shadow-black text-white'
										: 'text-grey-dark'
								} ${
									isOpen ? 'block' : 'hidden'
								} text-xl flex justify-center items-center h-16 border-b border-grey-dark md:ml-8 md:border-none md:inline`}
								key={element}
							>
								<Link to={`/${element.toLowerCase()}`}>
									{element}
								</Link>
							</li>
						);
					})}
				</motion.ul>
			)}
		</AnimatePresence>
	);
};

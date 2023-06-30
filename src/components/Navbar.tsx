/* eslint-disable no-mixed-spaces-and-tabs */
import { FunctionComponent, useState } from 'react';
import { PiMoonLight } from 'react-icons/pi';
import { BsSun } from 'react-icons/bs';
import { GrMenu } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

type NavbarProps = {
	sections: string[];
	location: string;
};

export const Navbar: FunctionComponent<NavbarProps> = ({
	sections,
	location,
}) => {
	const [hidden, setHidden] = useState<boolean>(true);
	const [theme, setTheme] = useState<string>('light');

	const handleMenu = (): void => {
		setHidden(!hidden);
	};

	const handleThemeSwitch = (): void => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};

	return (
		<header className='h-20'>
			<nav className='font-sans h-full shadow-md flex w-full items-center justify-between p-3'>
				<h1 className='text-grey-dark text-2xl ml-4 font-medium drop-shadow-grey'>
					<a href='/'>Matias Gimenez</a>
				</h1>

				<ul className='flex align-center relative gap-8 md:flex-row'>
					<div
						className={`absolute z-50 top-14 -right-3 bg-white-medium border-l border-grey-dark w-60 text-center md:bg-white md:static md:border-none`}
					>
						{sections.map((element: string) => {
							return (
								<li
									className={`${
										location === element.toLowerCase()
											? 'font-bold drop-shadow-black text-white'
											: 'text-grey-dark'
									} ${
										hidden ? 'hidden' : 'block'
									} text-xl flex justify-center items-center h-16 border-b border-grey-dark md:ml-8 md:border-none md:inline`}
									key={element}
								>
									<Link to={`/${element.toLowerCase()}`}>
										{element}
									</Link>
								</li>
							);
						})}
					</div>
					<li>
						<AnimatePresence>
							<motion.button
								className='swap'
								onClick={handleThemeSwitch}
							>
								{theme === 'light' ? (
									<PiMoonLight className='text-3xl ml-10 text-grey-dark md:mr-4' />
								) : (
									<BsSun className='text-3xl ml-10 text-grey-dark md:mr-4' />
								)}
							</motion.button>
						</AnimatePresence>
					</li>
					<li>
						{
							<GrMenu
								className='block text-3xl mr-4 md:hidden'
								onClick={handleMenu}
							/>
						}
					</li>
				</ul>
			</nav>
		</header>
	);
};

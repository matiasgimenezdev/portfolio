import { FunctionComponent, useState } from 'react';
import { PiMoonLight } from 'react-icons/pi';
import { BsSun } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { MenuDesktop, MenuMobile } from './';
import { Menu } from '../types/Menu';
import { useThemeStore } from '../store';

export const Navbar: FunctionComponent<Menu> = ({
	sections,
	location,
}: Menu) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const theme = useThemeStore((state) => state.theme);
	const updateTheme = useThemeStore((state) => state.updateTheme);

	const handleMenu = (): void => {
		setIsOpen(!isOpen);
	};

	const handleThemeSwitch = (): void => {
		if (theme === 'light') {
			updateTheme('dark');
			localStorage.setItem('preferedTheme', 'dark');
		} else {
			updateTheme('light');
			localStorage.setItem('preferedTheme', 'light');
		}
	};

	return (
		<header className='h-20'>
			<nav
				className={`font-sans border-b ${
					theme == 'light'
						? 'bg-white border-grey-light'
						: 'bg-grey-darkest border-grey-medium'
				} h-full  flex w-full items-center justify-between p-3`}
			>
				<h1
					className={`${
						theme == 'light'
							? 'text-grey-dark drop-shadow-grey'
							: 'text-white drop-shadow-white'
					} text-2xl ml-4 font-medium `}
				>
					<Link to='/'>Matias Gimenez</Link>
				</h1>

				<div className='flex list-none align-center relative gap-8 md:flex-row'>
					<MenuMobile
						sections={sections}
						location={location}
						isOpen={isOpen}
					/>
					<MenuDesktop sections={sections} location={location} />
					<span>
						<button className='swap' onClick={handleThemeSwitch}>
							{theme === 'light' ? (
								<PiMoonLight
									className={`text-3xl mt-1 inline-block ${
										theme == 'light'
											? 'text-grey-dark'
											: 'text-white'
									} md:mr-4`}
								/>
							) : (
								<BsSun
									className={`text-3xl mt-1 inline-block ${
										theme == 'light'
											? 'text-grey-dark'
											: 'text-white'
									} md:mr-4`}
								/>
							)}
						</button>
					</span>
					<span>
						{
							<AiOutlineMenu
								className={`text-3xl mr-4 md:hidden mt-1 inline-block ${
									theme == 'light'
										? 'fill-grey-darkest'
										: 'fill-white'
								}`}
								onClick={handleMenu}
							/>
						}
					</span>
				</div>
			</nav>
		</header>
	);
};

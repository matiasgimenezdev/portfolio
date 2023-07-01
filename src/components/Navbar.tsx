import { FunctionComponent, useState } from 'react';
import { PiMoonLight } from 'react-icons/pi';
import { BsSun } from 'react-icons/bs';
import { GrMenu } from 'react-icons/gr';
import { MenuDesktop, MenuMobile } from './';

type NavbarProps = {
	sections: string[];
	location: string;
};

export const Navbar: FunctionComponent<NavbarProps> = ({
	sections,
	location,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [theme, setTheme] = useState<string>('light');

	const handleMenu = (): void => {
		setIsOpen(!isOpen);
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
								<PiMoonLight className='text-3xl ml-10 text-grey-dark md:mr-4' />
							) : (
								<BsSun className='text-3xl ml-10 text-grey-dark md:mr-4' />
							)}
						</button>
					</span>
					<span>
						{
							<GrMenu
								className='block text-3xl mr-4 md:hidden'
								onClick={handleMenu}
							/>
						}
					</span>
				</div>
			</nav>
		</header>
	);
};

/* eslint-disable no-mixed-spaces-and-tabs */
import { FunctionComponent, useState } from 'react';
import { PiMoonLight } from 'react-icons/pi';
import { GrMenu } from 'react-icons/gr';

type NavbarProps = {
	sections: string[];
	location: string;
};

export const Navbar: FunctionComponent<NavbarProps> = ({
	sections,
	location,
}) => {
	const [hidden, setHidden] = useState(true);

	const handleMenu = (): void => {
		setHidden(!hidden);
		console.log(hidden);
	};

	return (
		<header className='h-20'>
			<nav className='font-sans h-full shadow-md flex w-full items-center justify-between p-3'>
				<h1 className='text-grey-dark text-2xl ml-4 font-medium'>
					<a href='/'>Matias Gimenez</a>
				</h1>

				<ul className='flex align-center relative gap-8 md:flex-row'>
					<div className='absolute top-14 -right-3 bg-white-medium border-l border-grey-dark w-60 text-center md:static md:bg-white md:border-none'>
						{sections.map((element: string) => {
							return (
								<li
									className={
										location.toLowerCase() === element
											? 'text-bold text-xl ml-3 drop-shadow-custom-grey md:text-white'
											: `${
													hidden ? 'hidden' : 'block'
											  } text-grey-dark  flex justify-center items-center h-16 border-b border-grey-dark text-xl md:inline md:text-grey-dark md:ml-8 md:border-none`
									}
									key={element}
								>
									{element}
								</li>
							);
						})}
					</div>
					<li>
						{
							<PiMoonLight className='text-3xl ml-10 text-grey-dark md:mr-4' />
						}
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

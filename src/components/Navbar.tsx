import { FunctionComponent } from 'react';
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
	return (
		<nav className=' font-sans h-20 shadow-md flex w-full items-center justify-between p-3'>
			<h1 className='text-grey-dark text-2xl font-medium'>
				<a href='/'>Matias Gimenez</a>
			</h1>

			<ul className='flex align-center gap-8'>
				{sections.map((element: string) => {
					return (
						<li
							className={
								location.toLowerCase() === element
									? 'text-white text-l drop-shadow-custom-grey'
									: 'hidden text-grey-dark text-xl md:inline'
							}
							key={element}
						>
							{element}
						</li>
					);
				})}
				<li>
					{
						<PiMoonLight className='text-3xl ml-10 text-grey-dark md:mr-4' />
					}
				</li>
				<li>{<GrMenu className='block text-3xl mr-4 md:hidden' />}</li>
			</ul>
		</nav>
	);
};

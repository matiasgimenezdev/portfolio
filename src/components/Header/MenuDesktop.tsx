/* eslint-disable no-mixed-spaces-and-tabs */
import { Link } from 'react-router-dom';
import { Menu } from '../../types';
import { useTheme } from '../../hooks';

export const MenuDesktop = ({ sections, location }: Menu) => {
	const { theme } = useTheme();

	return (
		<ul
			className={`${
				theme == 'light' ? 'bg-white' : 'bg-grey-darkest'
			} mr-10 mt-1 w-60 text-center hidden md:block`}
		>
			{sections.map((element: string) => {
				return (
					<li
						className={`${
							location === element.toLowerCase()
								? `font-bold drop-shadow-black text-white`
								: `${
										theme == 'light'
											? 'text-grey-dark'
											: 'text-white'
								  }`
						} text-xl flex justify-center items-center h-16 md:ml-8 md:inline`}
						key={element}
					>
						<Link
							className='inline'
							to={`/${element.toLowerCase()}`}
						>
							{element}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

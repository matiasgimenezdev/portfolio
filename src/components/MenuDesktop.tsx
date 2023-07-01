import { Link } from 'react-router-dom';

export const MenuDesktop = ({
	sections,
	location,
}: {
	sections: string[];
	location: string;
}) => {
	return (
		<ul
			className={`bg-white-medium border-l border-grey-dark w-60 text-center hidden md:bg-white md:block md:border-none`}
		>
			{sections.map((element: string) => {
				return (
					<li
						className={`${
							location === element.toLowerCase()
								? 'font-bold drop-shadow-black text-white'
								: 'text-grey-dark'
						} text-xl flex justify-center items-center h-16 border-b border-grey-dark md:ml-8 md:border-none md:inline`}
						key={element}
					>
						<Link to={`/${element.toLowerCase()}`}>{element}</Link>
					</li>
				);
			})}
		</ul>
	);
};

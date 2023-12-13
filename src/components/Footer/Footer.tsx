import Balancer from 'react-wrap-balancer';
import { FunctionComponent } from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { useTheme } from '../../hooks';

export const Footer: FunctionComponent = () => {
	const { theme } = useTheme();

	return (
		<footer
			className={`flex flex-col items-center pt-2 ${
				theme == 'light' ? 'bg-white' : 'bg-grey-darkest'
			}`}
		>
			<Balancer
				className={`text-center ${
					theme == 'light' ? 'text-grey-darkest' : 'text-white'
				} font-light text-md w-9/12 px-4 block mt-10 md:w-1/3 md:text-xl`}
			>
				I am currently doing the fourth year of an Information Systems
				degree in Argentina. <br /> <br /> I consider myself passionate
				about technology and software development, so I try to keep
				learning day by day. <br />
				<span
					className={`font-normal text-xl  mt-8 block ${
						theme == 'light' ? 'text-grey-darkest' : 'text-white'
					}`}
				>
					<span>💡</span> <br />
					"Living, learning & leveling up <br />
					one day at a time"
				</span>
				<br />
				I'm looking for my first software development job.
				<br />
				Here is my{' '}
				<a
					href='https://linkedin.com/in/matiasgimenezdev/'
					target='_blank'
					className='font-medium text hover:underline underline-offset-4'
				>
					LinkedIn <BsLinkedin className='inline mb-1' />
				</a>
				.
			</Balancer>
			<nav
				className={`w-full max-h-18 py-6 mt-10 border-t ${
					theme == 'light'
						? 'border-grey-light'
						: 'border-grey-medium'
				}`}
			>
				<ul className='flex gap-5 items-center justify-center'>
					<li
						className={`inline text-xl xl:text-2xl xl:mb-1 ${
							theme == 'light' ? 'text-black' : 'text-white'
						}`}
					>
						<a
							href='https://github.com/matiasgimenezdev'
							target='_blank'
							aria-label='Link to Github profile'
						>
							<BsGithub className='h-5 w-5' />
						</a>
					</li>
					<li
						className={`inline text-xl xl:text-2x0 ${
							theme == 'light' ? 'text-[#0a66c2]' : 'text-white'
						}`}
					>
						<a
							href='https://linkedin.com/in/matiasgimenezdev/'
							target='_blank'
							aria-label='Link to LinkedIn profile'
						>
							<BsLinkedin className='h-5 w-5' />
						</a>
					</li>
				</ul>
			</nav>
		</footer>
	);
};

import { FunctionComponent } from 'react';
import { useTheme } from '../hooks';

export const JobsList: FunctionComponent = () => {
	const { theme } = useTheme();
	return (
		<section className='px-6 w-full md:p-10 xl:w-1/2 xl:px-20 py-6'>
			<h4
				className={`text-xl py-4 px-2 border-b font-bold ${
					theme === 'light'
						? 'text-grey-dark border-grey-light'
						: 'text-white border-grey-medium'
				} md:text-2xl xl:text-3xl`}
			>
				Experience
			</h4>
			<p
				className={`relative h-48 px-2 border-b ${
					theme == 'light'
						? 'border-grey-light text-grey-dark'
						: 'border-grey-medium text-white'
				}`}
			>
				<span className='absolute top-4 italic text-sm'>
					Aug 2022 - Today
				</span>
				<p className='text-lg py-0 pt-12 font-normal lg:text-xl'>
					Facilitador{' '}
					<a
						href='https://cidetic.unlu.edu.ar/el-centro/'
						className='hover:underline underline-offset-2'
					>
						<abbr
							className='no-underline'
							title='Centro de Investigación, Docencia y Extensión en Tecnologías de la Información y las Comunicaciones'
						>
							CIDETIC
						</abbr>
					</a>{' '}
					at{' '}
					<a
						href='https://www.unlu.edu.ar/'
						className='hover:underline underline-offset-2 text-base lg:text-lg'
					>
						Universidad Nacional de Luján
					</a>{' '}
				</p>
			</p>
		</section>
	);
};

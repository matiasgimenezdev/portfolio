import { FunctionComponent } from 'react';
import { PiGithubLogo } from 'react-icons/pi';
import { TbWorldShare } from 'react-icons/tb';

type ProjectCardProps = {
	title: string;
	image: string;
	demoURL: string;
	repositoryURL: string;
};

export const ProjectCard: FunctionComponent<ProjectCardProps> = ({
	title,
	image,
	demoURL,
	repositoryURL,
}) => {
	return (
		<article key='title' className='w-full px-5 mt-4 rounded-md h-52'>
			<figure className='relative h-full w-full'>
				<img
					src={image}
					alt={title}
					loading={'lazy'}
					style={{
						height: '210px',
					}}
					className='rounded-md figure-shadow h-full w-full '
				/>
				<figcaption className='absolute bottom-2 left-3 text-2xl font-medium text-white drop-shadow-figcaption '>
					{title}
				</figcaption>
				<div className='absolute right-5 bottom-2'>
					<a
						href={repositoryURL}
						target='_blank'
						className='inline-block text-white drop-shadow-black mr-3 transition ease-in-out text-2xl hover:scale-125'
					>
						{<PiGithubLogo />}
					</a>
					<a
						href={demoURL}
						target='_blank'
						className='inline-block text-white drop-shadow-black text-2xl transition ease-in-out hover:scale-125'
					>
						{<TbWorldShare />}
					</a>
				</div>
			</figure>
		</article>
	);
};

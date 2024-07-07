import { FunctionComponent } from 'react';

type SkillsItemProps = {
	name: string;
	alt: string;
	src: string;
};

export const SkillsItem: FunctionComponent<SkillsItemProps> = ({
	name,
	alt,
	src,
}) => {
	return (
		<article
			key={name}
			className='flex py-3 px-1 gap-2 justify-center items-center text-center'
		>
			<img className='h-10 w-10 max-w-10' src={src} alt={alt} />
			<span className='basis-9/12 text-left font-medium  text-[13px] sm:text-md'>
				{name}
			</span>
		</article>
	);
};

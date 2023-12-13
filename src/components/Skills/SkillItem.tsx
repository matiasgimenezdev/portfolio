import { FunctionComponent } from 'react';

type SkillItemProps = {
	name: string;
	alt: string;
	src: string;
};

export const SkillItem: FunctionComponent<SkillItemProps> = ({
	name,
	alt,
	src,
}) => {
	return (
		<article
			key={name}
			className='flex py-4 px-4 gap-2 justify-center items-center text-center'
		>
			<img className='h-10 w-10 max-w-10' src={src} alt={alt} />
			<span className='basis-9/12 text-left font-medium text-md'>
				{name}
			</span>
		</article>
	);
};

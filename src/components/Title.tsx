import { FunctionComponent } from 'react';

type TitleProps = {
	title: string;
};

export const Title: FunctionComponent<TitleProps> = ({ title }: TitleProps) => {
	return (
		<h2 className='mb-4 font-medium text-3xl text-grey-darkest drop-shadow-grey xl:text-4xl'>
			{title}
		</h2>
	);
};

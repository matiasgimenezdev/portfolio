import { FunctionComponent } from 'react';
import { useTheme } from '../hooks';

type TitleProps = {
	title: string;
};

export const Title: FunctionComponent<TitleProps> = ({ title }: TitleProps) => {
	const { theme } = useTheme();

	return (
		<h2
			className={`mb-4 ${
				theme == 'light'
					? 'text-grey-darkest drop-shadow-grey'
					: 'text-white drop-shadow-white'
			} font-medium text-3xl xl:text-4xl`}
		>
			{title}
		</h2>
	);
};

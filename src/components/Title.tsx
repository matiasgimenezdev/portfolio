import { FunctionComponent } from 'react';
import { useThemeStore } from '../store/themeStore';

type TitleProps = {
	title: string;
};

export const Title: FunctionComponent<TitleProps> = ({ title }: TitleProps) => {
	const theme = useThemeStore((state) => state.theme);

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

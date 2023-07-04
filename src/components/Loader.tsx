import { useThemeStore } from '../store';

export function Loader() {
	const theme = useThemeStore((state) => state.theme);

	return (
		<div className='spinner-container absolute top-[45%] left-[50%]'>
			<div
				className={`${
					theme == 'light'
						? 'loading-spinner-light'
						: 'loading-spinner-dark'
				}`}
			></div>
		</div>
	);
}

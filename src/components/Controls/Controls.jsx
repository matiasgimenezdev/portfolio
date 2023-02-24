import './Controls.scss';
import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../../contexts';
import { AiFillHome } from 'react-icons/ai';

export function Controls() {
	const { language, setLanguage } = useContext(LanguageContext);

	const [scroll, setScroll] = useState(0);
	useEffect(() => {
		const detectScroll = () => setScroll(window.pageYOffset);
		window.addEventListener('scroll', detectScroll);
		return () => {
			window.removeEventListener('scroll', detectScroll);
		};
	}, [scroll]);
	return (
		<div className='controls'>
			{scroll > 0 && (
				<a href='#Home'>
					<button className='home'>
						<AiFillHome />
					</button>
				</a>
			)}

			{language === 'spanish' ? (
				<button
					className='language spanish'
					onClick={() => setLanguage('english')}
				></button>
			) : (
				<button
					className='language english'
					onClick={() => setLanguage('spanish')}
				></button>
			)}
		</div>
	);
}

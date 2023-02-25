import './Footer.scss';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts';
import { Socials } from '../';

export function Footer() {
	const { language } = useContext(LanguageContext);
	return (
		<div className='footer'>
			<Socials section='footer' />

			<small className='footerText'></small>
			<small className='footerText'>
				2023 ©️ Matías Giménez -{' '}
				{language === 'spanish' ? 'Hecho con' : 'Built with'}{' '}
				<a
					href='https://es.reactjs.org/'
					target='_blank'
					rel='noreferer'
				>
					React
				</a>
			</small>
		</div>
	);
}

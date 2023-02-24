import { Socials } from '../';
import './Footer.scss';

export function Footer() {
	return (
		<div className='footer'>
			<Socials section='footer' />

			<small className='footerText'></small>
			<small className='footerText'>
				2023 ©️ Matías Giménez - Built with{' '}
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

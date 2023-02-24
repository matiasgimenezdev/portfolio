import { useContext } from 'react';
import { LanguageContext } from '../../contexts/';
import './Nav.scss';

export function Nav() {
	const { language } = useContext(LanguageContext);
	return (
		<nav className='nav'>
			<ul className='navContainer'>
				<a href='#About'>
					<li className='navItem'>
						{language === 'spanish' ? 'Conóceme' : 'About'}
					</li>
				</a>
				<a href='#Knowledge'>
					<li className='navItem'>
						{language === 'spanish' ? 'Tecnologías' : 'Knowledge'}
					</li>
				</a>
				<a href='#Projects'>
					<li className='navItem'>
						{language === 'spanish' ? 'Proyectos' : 'Projects'}
					</li>
				</a>
			</ul>
		</nav>
	);
}

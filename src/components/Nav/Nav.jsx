import './Nav.scss';

export function Nav() {
	return (
		<nav className='nav'>
			<ul className='navContainer'>
				<a href='#About'>
					<li className='navItem'>Conóceme</li>
				</a>
				<a href='#Knowledge'>
					<li className='navItem'>Tecnologías</li>
				</a>
				<a href='#Projects'>
					<li className='navItem'>Proyectos</li>
				</a>
				<a href='#Contact'>
					<li className='navItem'>Contacto</li>
				</a>
			</ul>
		</nav>
	);
}

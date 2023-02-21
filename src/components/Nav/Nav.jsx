import './Nav.scss';

export function Nav() {
	return (
		<nav className='nav'>
			<ul className='navContainer'>
				<a href='#About'>
					<li className='navItem'>About</li>
				</a>
				<a href='#Knowledge'>
					<li className='navItem'>Knowledge</li>
				</a>
				<a href='#Projects'>
					<li className='navItem'>Projects</li>
				</a>
				<a href='#Contact'>
					<li className='navItem'>Contact</li>
				</a>
			</ul>
		</nav>
	);
}

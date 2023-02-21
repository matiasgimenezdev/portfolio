import React from 'react';
import './Header.scss';
import Contact from '../Contact/Contact';
import logo from '../../assets/logo.png';

export function Header() {
	return (
		<header className='header'>
			<section className='title-container'>
				<img src={logo} alt='logo' className='logo' />
				<h1 className='title'>
					<span className='underline'>Matías Giménez</span>
				</h1>
			</section>
			<Contact color='white' />
		</header>
	);
}

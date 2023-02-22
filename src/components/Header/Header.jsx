import React from 'react';
import './Header.scss';
import { Nav } from '../Nav/Nav';

export function Header() {
	return (
		<header className='header'>
			<section className='titleContainer'>
				<img src='/logo.png' alt='logo' className='logo' />
				<h1 className='title'>
					<span className='underline'>Matías Giménez</span>
				</h1>
			</section>
			<Nav />
		</header>
	);
}

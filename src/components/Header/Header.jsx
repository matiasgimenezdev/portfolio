import React from 'react';
import './Header.scss';
import { Nav } from '../Nav/Nav';

export function Header() {
	return (
		<header className='header'>
			<section className='titleContainer animate__animated animate__zoomInDown'>
				<img src='/logo.png' alt='logo' className='logo' />
				<h1 className='title animate__animated animate__infinite animate__pulse'>
					<span className='underline'>Matías Giménez</span>
				</h1>
			</section>
			<Nav />
		</header>
	);
}

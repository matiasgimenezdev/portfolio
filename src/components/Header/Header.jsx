import React from 'react';
import './Header.scss';
import { Contact } from '../';

export function Header() {
	return (
		<header className='header'>
			<section className='title-container'>
				<img src='/logo.png' alt='logo' className='logo' />
				<h1 className='title animate__shakeX'>
					<span className='underline'>Matías Giménez</span>
				</h1>
			</section>
			<Contact color='white' />
		</header>
	);
}

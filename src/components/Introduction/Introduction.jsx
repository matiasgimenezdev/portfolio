import { useContext } from 'react';
import './Introduction.scss';
import { Socials } from '../';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { LanguageContext } from '../../contexts';

export function Introduction() {
	const { language } = useContext(LanguageContext);

	return (
		<section className='introduction animate__animated animate__fadeInLeft'>
			<div className='introductionContent'>
				<div className='introductionText'>
					Hi 👋! I am <span className='name'>Matias</span> <br />
					<p className='occupation'>
						{language === 'spanish'
							? 'Desarrollador de Software'
							: 'Software Developer'}
						<br />
						& <br />
						{language === 'spanish'
							? 'Estudiante Lic. en Sistemas de Información'
							: 'Studying a degree in Information Systems'}
					</p>
					<Socials section='introduction' />
				</div>
				<a href='#About' className='moreLink'>
					<button className='moreButton '>
						{language === 'spanish' ? 'Conocé más' : 'Know more'}
						<FaLongArrowAltRight />
					</button>
				</a>
			</div>
			<img
				className='gif'
				src='/images/developer.gif'
				alt='developer gif'
			/>
		</section>
	);
}

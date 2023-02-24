import { useContext } from 'react';
import './Introduction.scss';
import { Socials } from '../';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { LanguageContext } from '../../contexts';

export function Introduction() {
	const { language } = useContext(LanguageContext);

	return (
		<section className='introduction'>
			<div className='introductionContent'>
				<div className='introductionText'>
					Hi 👋! I am <span className='name'>Matias</span> <br />
					<p className='occupation'>
						Desarrollador de Software <br />
						& <br />
						Estudiante Lic. en Sistemas de Información
					</p>
					<Socials section='introduction' />
				</div>
				<a href='#About' className='moreLink'>
					<button className='moreButton'>
						Conocé más <FaLongArrowAltRight />
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

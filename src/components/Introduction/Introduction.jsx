import './Introduction.scss';
import { Contact } from '../';
import { FaLongArrowAltRight } from 'react-icons/fa';

export function Introduction() {
	return (
		<section className='introduction'>
			<div className='introductionContent'>
				<div className='introductionText'>
					Hi 👋! I am <span className='name'>Matias</span> <br />
					<p className='occupation'>
						Desarrollador de Software <br />
						Estudiante Lic. en Sistemas de Información
					</p>
					<Contact color='purple' />
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

import './Introduction.scss';
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
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 1440 320'
					>
						<path
							fill='#3f007e'
							fillOpacity='1'
							d='M0,224L0,0L205.7,0L205.7,96L411.4,96L411.4,224L617.1,224L617.1,64L822.9,64L822.9,32L1028.6,32L1028.6,224L1234.3,224L1234.3,96L1440,96L1440,320L1234.3,320L1234.3,320L1028.6,320L1028.6,320L822.9,320L822.9,320L617.1,320L617.1,320L411.4,320L411.4,320L205.7,320L205.7,320L0,320L0,320Z'
						></path>
					</svg>
				</div>
				<a href='#About' className='moreLink'>
					<button className='moreButton'>
						Conocé más <FaLongArrowAltRight />
					</button>
				</a>
			</div>
			<img className='gif' src='/developer.gif' alt='developer gif' />
		</section>
	);
}

import { useContext } from 'react';
import './About.scss';
import { Link } from '../';
import { BsDownload } from 'react-icons/bs';
import { LanguageContext } from '../../contexts';

export function About() {
	const { language } = useContext(LanguageContext);

	return (
		<section className='about'>
			<h2 id='About'>
				{language === 'spanish' ? 'Conóceme' : 'About me'}
			</h2>
			<div className='aboutContent'>
				<p className='aboutText'>
					Mi nombre es Matías Giménez 😊, tengo 22 años y vivo en
					Argentina. Actualmente estoy realizando la
					<Link
						href='https://www.unlu.edu.ar/carg-sistemas.html'
						value='Lic. en Sistemas de Información'
					/>
					en la
					<Link href='https://www.unlu.edu.ar/' value='UNLu' /> y me
					encuentro finalizando el tercer año de la carrera.
					<br />
					Me considero un apasionado de la tecnología y el desarrollo
					de software, por lo cual trato de seguir capacitandome día a
					día. En este momento me encuentro en el proceso de aprender
					React para poder agregarlo a mi stack de tecnologías.
					<br />
					Estoy buscando la oportunidad de combinar mi formación
					académica con el trabajo, con el objetivo de desarrollar
					conocimientos y potenciar los adquiridos durante mis
					estudios.
					<br />
				</p>
				<a href='/CV.pdf' download='CV.pdf' className='cvLink'>
					<button className='cvButton'>
						{language === 'spanish'
							? 'Descargar CV'
							: 'Download CV'}
						<BsDownload />
					</button>
				</a>
			</div>
		</section>
	);
}

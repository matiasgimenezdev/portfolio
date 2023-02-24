import { useContext } from 'react';
import './About.scss';
import { Link } from '../';
import { BsDownload } from 'react-icons/bs';
import { LanguageContext } from '../../contexts';

export function About() {
	const { language } = useContext(LanguageContext);

	const renderText = () => {
		if (language === 'spanish') {
			return (
				<p className='aboutText'>
					Mi nombre es Matías Giménez 😊, tengo 22 años y vivo en
					Argentina. Actualmente estoy realizando la{' '}
					<Link
						href='https://www.unlu.edu.ar/carg-sistemas.html'
						value={`Lic. en Sistemas de Información`}
					/>{' '}
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
			);
		} else {
			return (
				<p className='aboutText'>
					My name is Matias Gimenez 😊, I am 22 years old and I am
					living in Argentina. Currently, I am doing an{' '}
					<Link
						href='https://www.unlu.edu.ar/carg-sistemas.html'
						value={`Information Systems degree`}
					/>{' '}
					at
					<Link href='https://www.unlu.edu.ar/' value='UNLu' /> and I
					am finishing the third year.
					<br />
					I consider myself to be a passionate about technology and
					software development, so I try to keep learning day by day.
					At the moment, I am in the process of learning React to add
					it to my technology stack.
					<br />
					I am looking for the opportunity to combine my academic
					training with work, with the aim of developing knowledge and
					enhancing those acquired during my studies.
					<br />
				</p>
			);
		}
	};

	return (
		<section className='about'>
			<h2 id='About'>
				{language === 'spanish' ? 'Conóceme' : 'About me'}
			</h2>
			<div className='aboutContent'>
				<p className='aboutText'>{renderText()}</p>
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

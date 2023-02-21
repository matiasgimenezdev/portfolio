import './About.scss';
import { Link } from '../';
import { ImLocation } from 'react-icons/im';

export function About() {
	return (
		<section className='about'>
			<h2 id='About'>About me</h2>
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
					<br />
					Me considero un apasionado de la tecnologia y el desarrollo
					de software, por lo cual trato de seguir capacitandome día a
					día. En este momento me encuentro en el proceso de aprender
					React para poder agregarlo a mi stack de tecnologias.
					<br />
					<br />
					Estoy buscando la oportunidad de combinar mi formacion
					academica con el trabajo, con el objetivo de desarrollar
					conocimientos y potenciar los adquiridos durante mis
					estudios.
					<br />
					<br />
					<span className='location'>
						<ImLocation />
						Buenos Aires, Argentina
					</span>
				</p>
			</div>
		</section>
	);
}

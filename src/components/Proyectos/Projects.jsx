import './Projects.scss';
import { useContext } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';
import projects from './projects.json';
import { LanguageContext } from '../../contexts';

export function Projects() {
	const { language } = useContext(LanguageContext);
	return (
		<section className='projects'>
			<h2 id='Projects'>
				{language === 'spanish' ? 'Proyectos' : 'Projects'}
			</h2>
			<div className='projectsContent'>
				{projects.map((project) => {
					return (
						<div className={`${project.class}`} key={project.title}>
							<a
								href={project.url}
								target='_blank'
								rel='noreferrer'
							>
								<h6>{project.title}</h6>
							</a>
							<section className='links'>
								<a
									href={project.gitHub}
									target='_blank'
									rel='noreferrer'
								>
									<AiOutlineGithub className='icon' />
								</a>
								<a
									href={project.url}
									target='_blank'
									rel='noreferrer'
								>
									<TbWorld className='icon' />
								</a>
							</section>
						</div>
					);
				})}
			</div>
		</section>
	);
}

import './Knowledge.scss';
import { FcIdea } from 'react-icons/fc';

export function Knowledge() {
	return (
		<section className='knowledge'>
			<h2 id='Knowledge'>Tecnologías</h2>
			<ul className='knowledgeList'>
				<li className='knowledgeItem'>
					<img
						className='icon'
						src='/icons/html.svg'
						alt='HTML icon'
					/>
					<span className='text'>HTML</span>
				</li>
				<li className='knowledgeItem'>
					<img className='icon' src='/icons/css.svg' alt='CSS icon' />
					<span className='text'>CSS</span>
				</li>
				<li className='knowledgeItem'>
					<img
						className='icon'
						src='/icons/sass.svg'
						alt='Sass icon'
					/>
					<span className='text'>Sass</span>
				</li>
				<li className='knowledgeItem'>
					<img
						className='icon'
						src='/icons/javascript.svg'
						alt='Javascript icon'
					/>
					<span className='text'>Javascript</span>
				</li>
				<li className='knowledgeItem'>
					<img
						className='icon'
						src='/icons/react.svg'
						alt='React icon'
					/>
					<span className='text'>React (learning)</span>
				</li>
				<li className='knowledgeItem'>
					<img
						className='icon'
						src='/icons/java.svg'
						alt='Java icon'
					/>
					<span className='text'>Java</span>
				</li>
				<li className='knowledgeItem'>
					<img className='icon' src='/icons/git.svg' alt='Git icon' />
					<span className='text'>GIT</span>
				</li>

				<li className='knowledgeItem'>
					<img className='icon' src='/icons/sql.svg' alt='SQL icon' />
					<span className='text'>SQL</span>
				</li>
				<li className='knowledgeItem'>
					<img
						className='icon'
						src='/icons/patterns.svg'
						alt='Design Patterns icon'
					/>
					<span className='text'>Design Patterns</span>
				</li>
			</ul>
			<h6 className='phrase'>
				<div>
					<FcIdea />
				</div>
				Living,
				<br />
				learning
				<br />
				&
				<br />
				leveling up one day at a time.
			</h6>
		</section>
	);
}

import './Socials.scss';
import { useRef, useContext } from 'react';
import { LanguageContext } from '../../contexts';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import ClipboardJS from 'clipboard';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';

export function Socials({ section }) {
	new ClipboardJS('.mail');
	const toastRef = useRef(null);
	const { language } = useContext(LanguageContext);

	const handleClick = () => {
		if (!toast.isActive(toastRef.current)) {
			toastRef.current = toast.success('Direccion e-mail copiada');
		}
	};

	const socials = 'socials-' + section;

	return (
		<>
			<div className={socials}>
				<a
					href='https://www.linkedin.com/in/matiasgimenezdev/'
					target='_blank'
					rel='noreferrer'
				>
					<AiFillLinkedin />
				</a>
				<a
					href='https://github.com/matiasgimenezdev'
					target='_blank'
					rel='noreferrer'
				>
					<AiOutlineGithub />
				</a>
				<button
					className='mail'
					data-clipboard-text='matiasgimenez.dev@gmail.com'
					target='_blank'
					rel='noreferrer'
					onClick={handleClick}
				>
					<SiGmail />
				</button>
			</div>
		</>
	);
}

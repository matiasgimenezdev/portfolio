import { useState, useRef } from 'react';
import './Contact.scss';

const initialForm = { name: '', subject: '', body: '' };

export function Contact() {
	const [form, setForm] = useState(initialForm);
	const linkRef = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const { name, subject, body } = form;
		linkRef.current.href = `mailto:matiasgimenez.dev@gmail.com?subject=${
			name + ' | ' + subject
		}&body=${body}`;

		linkRef.current.click();
		setForm(initialForm);
	};

	const handleChange = (event) => {
		console.log(form);
		const { name, value } = event.target;
		setForm({ ...form, [name]: value });
	};

	return (
		<section className='contact'>
			<h2 id='Contact'>Contacto</h2>
			<div className='contactContent'>
				<div className='decoration'></div>
				<form className='contactForm' onSubmit={handleSubmit}>
					<input
						className='textInput'
						type='text'
						name='name'
						id='name'
						placeholder='Nombre'
						autoComplete='off'
						onChange={handleChange}
						value={form.name}
						required
					/>
					<input
						className='textInput'
						type='text'
						name='subject'
						id='subject'
						placeholder='Asunto'
						autoComplete='off'
						onChange={handleChange}
						value={form.subject}
						required
					/>

					<textarea
						className='textArea'
						name='body'
						id='body'
						maxLength='800'
						minLength='15'
						placeholder='Escribe aquí tu mensaje...'
						onChange={handleChange}
						value={form.body}
					></textarea>
					<a
						target='_blank'
						rel='noreferer'
						href=''
						ref={linkRef}
					></a>
					<button className='sendButton' type='submit' id='submit'>
						Enviar
					</button>
				</form>
			</div>
		</section>
	);
}

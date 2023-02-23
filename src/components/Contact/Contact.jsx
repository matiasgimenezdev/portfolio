import './Contact.scss';

export function Contact() {
	return (
		<section className='contact'>
			<h2 id='Contact'>Contacto</h2>
			<div className='contactContent'>
				<form className='contactForm'>
					<input
						className='textInput'
						type='text'
						name='name'
						id='name'
						placeholder='Nombre'
						autoComplete='off'
					/>
					<input
						className='textInput'
						type='text'
						name='subject'
						id='subject'
						placeholder='Asunto'
						autoComplete='off'
					/>
					<input
						className='textInput'
						type='email'
						name='email'
						id='email'
						placeholder='Correo'
						autoComplete='off'
					/>
					<textarea
						className='textArea'
						maxLength='800'
						minLength='15'
						placeholder='Escribe aquí tu mensaje...'
					></textarea>

					<input
						className='submitInput'
						type='submit'
						name='submit'
						id='submit'
						value='Contactarme'
					/>
				</form>
			</div>
		</section>
	);
}

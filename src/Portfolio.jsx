import { ToastContainer, Zoom } from 'react-toastify';
import { Header, Introduction, About } from './components';
import { AiFillHome } from 'react-icons/ai';

export function Portfolio() {
	return (
		<div id='Home'>
			<Header />
			<Introduction />
			<About />
			<a href='#Home'>
				<button className='home'>
					<AiFillHome />
				</button>
			</a>
			<ToastContainer
				limit={3}
				position='bottom-right'
				autoClose={4000}
				pauseOnHover={false}
				closeOnClick={true}
				theme='colored'
				transition={Zoom}
			/>
		</div>
	);
}

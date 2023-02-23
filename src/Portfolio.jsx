import { ToastContainer, Zoom } from 'react-toastify';
import {
	Header,
	Introduction,
	About,
	Knowledge,
	Projects,
	Contact,
} from './components';
import { AiFillHome } from 'react-icons/ai';
import { useEffect, useState } from 'react';

export function Portfolio() {
	const [scroll, setScroll] = useState(0);
	useEffect(() => {
		const detectScroll = () => setScroll(window.pageYOffset);
		window.addEventListener('scroll', detectScroll);
		return () => {
			window.removeEventListener('scroll', detectScroll);
		};
	}, [scroll]);

	return (
		<div id='Home'>
			<Header />
			<Introduction />
			<About />
			<Knowledge />
			<Projects />

			{scroll > 0 && (
				<a href='#Home'>
					<button className='home'>
						<AiFillHome />
					</button>
				</a>
			)}

			<ToastContainer
				limit={3}
				position='bottom-right'
				autoClose={4000}
				pauseOnHover={false}
				closeOnClick={true}
				theme='colored'
				transition={Zoom}
			/>
			<Contact />
		</div>
	);
}

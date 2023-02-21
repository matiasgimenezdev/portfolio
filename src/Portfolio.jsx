import { ToastContainer, Zoom } from 'react-toastify';
import { Header, Body } from './components';

export function Portfolio() {
	return (
		<div>
			<Header />
			<Body />
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

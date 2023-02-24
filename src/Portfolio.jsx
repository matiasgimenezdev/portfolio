import { ToastContainer, Zoom } from 'react-toastify';
import {
	Header,
	Introduction,
	About,
	Knowledge,
	Projects,
	Footer,
} from './components';
import { LanguageProvider } from './contexts/';
import { Controls } from './components/Controls/Controls';

export function Portfolio() {
	return (
		<div id='Home'>
			<LanguageProvider>
				<Controls />
				<Header />
				<Introduction />
				<About />
				<Knowledge />
				<Projects />
				<ToastContainer
					limit={3}
					position='bottom-right'
					autoClose={4000}
					pauseOnHover={false}
					closeOnClick={true}
					theme='colored'
					transition={Zoom}
				/>
				<Footer />
			</LanguageProvider>
		</div>
	);
}

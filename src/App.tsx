import { Routes, Route } from 'react-router-dom';
import { HomePage, BlogPage, SkillsPage } from './pages';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				{/* <Route path='/blog/note' element={<NotePage />} /> */}
				<Route path='/skills' element={<SkillsPage />} />
				<Route path='/blog' element={<BlogPage />} />
			</Routes>
		</>
	);
}

export default App;

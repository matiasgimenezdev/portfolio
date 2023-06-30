import { Routes, Route } from 'react-router-dom';
import {
	HomePage,
	BlogPage,
	SkillsPage,
	ProjectsPage,
	ErrorPage,
	ArticlePage,
} from './pages';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/skills' element={<SkillsPage />} />
				<Route path='/blog' element={<BlogPage />} />
				<Route path='/blog/:article' element={<ArticlePage />} />
				<Route path='/projects' element={<ProjectsPage />} />
				<Route path='/*' element={<ErrorPage />} />
			</Routes>
		</>
	);
}

export default App;

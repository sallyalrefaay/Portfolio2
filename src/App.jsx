import { Routes , Route } from 'react-router-dom';
import Home from './Pages/Home';

import Project from './Pages/Project';
import ProjectsInfo from './Component/ProjectInfo/ProjectInfo';
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Project" element={<Project />}/>
      <Route path="/portfolio/:id" element={<ProjectsInfo />} />
    </Routes>
  );
  
}

export default App

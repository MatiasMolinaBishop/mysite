import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import MainProjects from './Projects/MainProjects';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/project" element={<MainProjects/>} />
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import MyTaskApp from './components/todo'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MyTaskApp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


import './App.css';
import { DescriptionPg } from './DescriptionPage/DescriptionPg';
import { Home } from './Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
   
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<DescriptionPg />} />
        </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;

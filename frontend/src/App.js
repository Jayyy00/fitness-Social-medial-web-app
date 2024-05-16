import {Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Authentication from './components/Authentications/Authentication';
import './App.css';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={true?<HomePage/>:<Authentication/>}>

        </Route>

      
      </Routes>
    </div>
  );
}

export default App;

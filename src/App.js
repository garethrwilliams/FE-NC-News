import {Route, Routes} from 'react-router';
import './styles/App.css';
import Nav from './components/Nav.jsx';
import Articles from './components/Articles';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/articles' element={<Articles />}></Route>
      </Routes>
    </div>
  );
}

export default App;

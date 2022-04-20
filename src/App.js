import {Route, Routes} from 'react-router';
import './styles/App.css';
import Nav from './components/Nav.jsx';
import Articles from './components/Articles';
import Article from './components/Article';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/articles' element={<Articles />}></Route>
        <Route path='/articles/:article_id' element={<Article />}></Route>
      </Routes>
    </div>
  );
}

export default App;

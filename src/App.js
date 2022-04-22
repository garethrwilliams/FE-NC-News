import {Route, Routes} from 'react-router';
import './styles/App.css';
import Nav from './components/Nav.jsx';
import Articles from './components/Articles';
import ArticlePage from './components/ArticlePage';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/articles' element={<Articles />}></Route>
        <Route path='/articles/topics/:topic' element={<Articles />}></Route>
        <Route path='/articles/:article_id' element={<ArticlePage />}></Route>
        <Route path='*' element={<h1>404: page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;

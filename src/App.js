import { Route, Routes } from 'react-router';
import Nav from './components/Nav.jsx';
import Articles from './components/Articles';
import ArticlePage from './components/ArticlePage';
import Logo from './components/Logo';
import Profile from './components/Profile';

function App() {
  return (
    <div className='font-serif'>
      <Logo />
      <Nav />
      <Routes>
        <Route path='/articles' element={<Articles />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/articles/topics/:topic' element={<Articles />}></Route>
        <Route path='/articles/:article_id' element={<ArticlePage />}></Route>
        <Route
          path='*'
          element={<h1 className='m-2'>404: page not found</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;

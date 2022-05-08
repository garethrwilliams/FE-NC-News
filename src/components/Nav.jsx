import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {UserContext} from '../contexts/User';
import styles from '../styles/Nav.module.css';
import news from '../assets/news.png';

export default function Nav() {
  const {user, setUser} = useContext(UserContext);

  return (
    <nav className=' bg-white border-gray border p-4 m-10 rounded '>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <Link to='/'>
          <div className='flex items-centre'>
            <span className='text-xl font-sans  dark:text-white absolute m-auto antialiased'>
              NC-News
            </span>
            <img
              src={news}
              className='h-32  rounded-full w-50 box-border'
            ></img>
          </div>
        </Link>
        <nav className='Nav__links'>
          <Link to={'/users'}>Users</Link> |{' '}
          <Link to={'/articles'}>Articles</Link>
        </nav>
        <div className='Nav__loggedIn'>{user}</div>
      </div>
    </nav>
  );
}

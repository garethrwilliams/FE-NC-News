import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {UserContext} from '../contexts/User';
import styles from '../styles/Nav.module.css';

export default function Nav() {
  const {user, setUser} = useContext(UserContext);

  return (
    <div className={styles.Nav}>
      <h3 className='Header'>NC-News</h3>
      <nav className='Nav__links'>
        <Link to={'/users'}>Users</Link> |{' '}
        <Link to={'/articles'}>Articles</Link>
      </nav>
      <div className='Nav__loggedIn'>{user}</div>
    </div>
  );
}

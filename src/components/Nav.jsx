import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';

export default function Nav() {
  const { user, setUser } = useContext(UserContext);

  return (
    <nav className=' py-5 mb-5 bg-gray border-y-2 border-black '>
      <div className='flex  justify-between items-center mx-4'>
        <nav>
          <Link to={'/profile'} className='hover:text-grayLight'>
            Profile
          </Link>{' '}
          |{' '}
          <Link to={'/articles'} className='hover:text-grayLight'>
            Articles
          </Link>
        </nav>
        <div className=''>{user}</div>
      </div>
    </nav>
  );
}

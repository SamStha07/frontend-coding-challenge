import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Favourite from './favourite.component';

const Header = () => {
  return (
    <header className='shadow-md py-3'>
      <header className='container mx-auto px-4 flex justify-between items-center'>
        <Link to='/'>
          <nav>
            <img className='w-14' src={logo} alt='logo' />
          </nav>
        </Link>

        <Favourite />
      </header>
    </header>
  );
};

export default Header;

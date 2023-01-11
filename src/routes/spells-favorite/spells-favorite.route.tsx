import SpellTotalAndListLayout from 'layout/spell-total-and-list.layout';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'redux/store';

const SpellsFavoriteRoute = () => {
  const favoritesList = useSelector((state: RootState) => state.favorites);

  if (favoritesList.data.length === 0) {
    return (
      <h3 className='text-center mt-10'>
        Not favorites found.{' '}
        <Link to='/'>
          <span className='text-blue-700 hover:underline'>Continue</span>
        </Link>
      </h3>
    );
  }
  return <SpellTotalAndListLayout count={favoritesList.data.length} data={favoritesList?.data} />;
};

export default SpellsFavoriteRoute;

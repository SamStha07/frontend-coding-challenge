import FavoriteIcon from 'components/icons/favorite.icon';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllFavorite } from 'redux/features/favourite.slice';
import { AppDispatch, RootState } from 'redux/store';

const Favourite = () => {
  const spellsList = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllFavorite());
  }, []);

  return (
    <Link to='/favorites'>
      <div className='relative'>
        <FavoriteIcon />
        <div className='bg-blue-800 w-4 h-4 rounded-full text-xs absolute top-0 -right-2 text-white flex justify-center'>
          {spellsList.data.length}
        </div>
      </div>
    </Link>
  );
};

export default Favourite;

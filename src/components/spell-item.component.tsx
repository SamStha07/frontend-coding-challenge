import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ISpell } from 'types';
import FavoriteIcon from './icons/favorite.icon';

interface ISpellProps {
  data: ISpell;
  handleAddToFavorite: (data: ISpell) => void;
}

const SpellItem: FC<ISpellProps> = ({ data, handleAddToFavorite }) => {
  const { name, index } = data!;

  return (
    <div className='relative shadow-xl shadow-neutral-100 border rounded-xl py-10 px-4 hover:bg-slate-50 '>
      <Link to={`/${index}`}>
        {/* name of the spell */}
        <h3 className='text-xl text-center font-semibold whitespace-nowrap text-gray-800 hover:underline cursor-pointer'>
          {name}
        </h3>
      </Link>

      {/* favorite icon btn */}
      <button
        onClick={() => handleAddToFavorite(data)}
        className='absolute top-2 right-2 cursor-pointer'
      >
        <FavoriteIcon />
      </button>
    </div>
  );
};

export default SpellItem;

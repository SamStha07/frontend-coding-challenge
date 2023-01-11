import SpellItem from 'components/spell-item.component';
import useAddToFavorites from 'hooks/useAddToFavorites';
import { FC } from 'react';
import { ISpell } from 'types';

interface ISpellTotalAndListLayout {
  count: number | null;
  data: ISpell[] | null;
}

const SpellTotalAndListLayout: FC<ISpellTotalAndListLayout> = ({ count, data }) => {
  const { handleAddToFavorite } = useAddToFavorites();

  return (
    <div className='py-10'>
      <p className='text-2xl capitalize pb-5'>total spells: {count}</p>
      {/* grid-layout is an custom css */}
      <div className='grid-layout'>
        {data?.map((result) => (
          <SpellItem key={result.index} data={result} handleAddToFavorite={handleAddToFavorite} />
        ))}
      </div>
    </div>
  );
};

export default SpellTotalAndListLayout;

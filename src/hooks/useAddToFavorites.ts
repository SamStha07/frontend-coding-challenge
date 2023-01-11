import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from 'redux/features/favourite.slice';
import { AppDispatch, RootState } from 'redux/store';
import { ISpell } from 'types';

const useAddToFavorites = () => {
  const dispatch = useDispatch<AppDispatch>();
  const spellsList = useSelector((state: RootState) => state.favorites);

  const handleAddToFavorite = (data: ISpell) => {
    // will find the same spell index data
    const findRepeatedSpell = spellsList.data.find((spell: ISpell) => spell.index === data.index);

    // if spell data is already in favorites then will throw error toast
    if (findRepeatedSpell && findRepeatedSpell.index === data.index)
      return toast.error('Already added!');

    // if noy in favorites then will add new favorites and then will show success toast
    dispatch(addFavorite(data));
    toast.success('Added to favorites!');
  };

  return { handleAddToFavorite };
};

export default useAddToFavorites;

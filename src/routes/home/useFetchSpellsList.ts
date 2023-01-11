import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllSpells } from 'redux/features/spells.slice';
import { AppDispatch, RootState } from 'redux/store';

const useFetchSpellsList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const spells = useSelector((state: RootState) => state.spells);

  useEffect(() => {
    dispatch(fetchAllSpells());
  }, []);

  const { data, error, isError, loading } = spells;

  return { data, error, isError, loading };
};

export default useFetchSpellsList;

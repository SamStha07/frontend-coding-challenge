import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleDetailSpell } from 'redux/features/spell-details.slice';
import { AppDispatch, RootState } from 'redux/store';

const useFetchDetails = () => {
  const { slug } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const spellDetails = useSelector((state: RootState) => state.spellDetails);

  const { data, error, isError, loading } = spellDetails;

  useEffect(() => {
    if (slug) dispatch(fetchSingleDetailSpell(slug));
  }, [slug]);

  return { data, error, isError, loading };
};

export default useFetchDetails;

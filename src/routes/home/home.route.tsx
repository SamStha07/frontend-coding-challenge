import Loader from 'components/loader.component';
import SpellTotalAndListLayout from './spell-total-and-list.layout';
import useFetchSpellsList from './useFetchSpellsList';

const HomeRoute = () => {
  const { data, error, isError, loading } = useFetchSpellsList();

  if (loading) {
    return <Loader />;
  }

  if (isError) {
    return <h3>{error}</h3>;
  }

  return <SpellTotalAndListLayout count={data?.count} data={data?.results} />;
};

export default HomeRoute;

import Loader from 'components/loader.component';
import { CLIENT_BASE_URL } from 'constant';
import SpellTotalAndListLayout from 'layout/spell-total-and-list.layout';
import { Helmet } from 'react-helmet';
import useFetchSpellsList from './useFetchSpellsList';

const HomeRoute = () => {
  const { data, error, isError, loading } = useFetchSpellsList();

  if (loading) {
    return <Loader />;
  }

  if (isError) {
    return <h3>{error}</h3>;
  }

  return (
    <>
      <Helmet>
        <link rel='canonical' href={CLIENT_BASE_URL} />
      </Helmet>

      <SpellTotalAndListLayout count={data?.count} data={data?.results} />
    </>
  );
};

export default HomeRoute;

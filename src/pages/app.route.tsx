import Loader from 'components/loader.component';
import HomeLayout from 'layout/home.layout';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// lazily imported routes
const HomeRoute = React.lazy(() => import('./home/home.route'));
const PageNotFound = React.lazy(() => import('./page-not-found/page-not-found.route'));
const SpellsDetailsRoute = React.lazy(() => import('./spell-details/spells-details.route'));
const SpellsFavoriteRoute = React.lazy(() => import('./spells-favorite/spells-favorite.route'));

const AppRoute = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route index element={<HomeRoute />} />
          <Route path=':slug' element={<SpellsDetailsRoute />} />
          <Route path='favorites' element={<SpellsFavoriteRoute />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </React.Suspense>
  );
};

export default AppRoute;

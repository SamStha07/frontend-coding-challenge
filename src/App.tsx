import Header from 'components/header/header.component';
import Loader from 'components/loader.component';
import ErrorBoundary from 'layout/error-bounday.layout';
import HomeLayout from 'layout/home.layout';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import PageNotFound from 'routes/page-not-found/page-not-found.route';
import SpellsFavoriteRoute from 'routes/spells-favorite/spells-favorite.route';

// lazily imported routes
const HomeRoute = React.lazy(() => import('routes/home/home.route'));
const SpellsDetailsRoute = React.lazy(() => import('routes/spell-details/spells-details.route'));

function App() {
  return (
    <ErrorBoundary>
      <Header />
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
      <Toaster />
    </ErrorBoundary>
  );
}

export default App;

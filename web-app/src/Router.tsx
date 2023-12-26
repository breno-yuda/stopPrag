import { Routes, Route } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';
import { Budget } from './pages/Budget';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
// import { Repo } from './pages/Repo';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />

        <Route path='/budget'>
          <Route index element={<Budget />} />

          <Route path=':id' element={<Budget />} />
        </Route>

        {/* <Route path='/repo' element={<Repo />} /> */}

        <Route path='/not-found' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

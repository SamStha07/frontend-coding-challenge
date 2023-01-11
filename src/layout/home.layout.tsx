import React from 'react';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => (
  <div className='container mx-auto px-4'>
    <Outlet />
  </div>
);

export default HomeLayout;

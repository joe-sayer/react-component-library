import React from 'react';

import { Header } from './Header';

export default {
  title: 'Header',
  component: Header
};

export const basic = () => {
  return (
    <Header text={'This is a Header!'} alignment={'left'} fontSize={'40px'} />
  );
};

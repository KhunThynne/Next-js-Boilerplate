'use client';

import { useEffect, useState } from 'react';

import { useContents } from '@/components/Contexts/ContentContext';

import PantipHitzContainer from './(content)/PantipHitzContainer';
import PantipPickContainer from './(content)/PantipPickContainer';
import PantipRealtimeContainer from './(content)/PantipRealtimeContainer';

const HomePage = () => {
  const [load, setLoad] = useState<boolean>(false);
  const { ContentBox } = useContents();

  useEffect(() => {
    setLoad(!!(Object.keys(ContentBox).length > 0));
  }, [ContentBox]);

  if (!load) {
    return (
      <div>
        ...Load
      </div>
    );
  }

  return (
    <div className="grid gap-y-8">
      <PantipRealtimeContainer />
      <div className="grid gap-8 2xl:grid-cols-[25%,1fr]">
        <PantipPickContainer />
        <PantipHitzContainer />

      </div>
      <PantipRealtimeContainer />
      <PantipPickContainer />

    </div>
  );
};

export default HomePage;

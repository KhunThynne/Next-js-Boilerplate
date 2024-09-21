'use client';
import { Provider } from 'react-redux';

import ContentsProvider from '@/components/Contexts/ContentContext';
import { store } from '@/store/store';

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ContentsProvider>
        {children}
      </ContentsProvider>
    </Provider>
  );
};

export default RootProvider;

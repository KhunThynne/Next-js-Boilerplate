'use client';

import { useDispatch, useSelector } from 'react-redux';

import { toggleSidebar } from '@/store/fetures';
import type { RootState } from '@/store/rootReducer';

export default function useSidebar() {
  const dispatch = useDispatch();
  const sidebarState = useSelector((state: RootState) => state.sidebarmenu.isOpen);

  const sidebarToggle = () => {
    dispatch(toggleSidebar());
  };

  return { sidebarToggle, sidebarState };
}

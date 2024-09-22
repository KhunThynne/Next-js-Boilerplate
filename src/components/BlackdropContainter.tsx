'use client';

import type React from 'react';

import useSidebar from '@/actions/hooks/sidebarToggle';

const BlackdropContainter = ({ children }: { children: React.ReactNode }) => {
  const { sidebarState, sidebarToggle } = useSidebar();

  if (!sidebarState) {
    return null;
  }

  return (
    <div className="fixed z-30 ">
      <div className="relative ">
        <div onClick={sidebarToggle} className="fixed top-0 z-50 h-screen w-screen bg-black opacity-20 2xl:hidden" />

        {children}
      </div>
    </div>
  );
};

export default BlackdropContainter;

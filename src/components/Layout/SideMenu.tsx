'use client';

import Link from 'next/link';
import { MdBackHand } from 'react-icons/md';

import useSidebar from '@/actions/hooks/sidebarToggle';
import { SideBarMenuConfig } from '@/utils/SideBarMenuConfig';

const SideMenu = () => {
  const { sidebarState } = useSidebar();
  return (
    sidebarState
    && (
      <div className=" fixed   z-40 h-screen ">

        <div className="relative ">
          <div className="
      fixed
top-0
      z-50 h-screen w-screen bg-black opacity-20 2xl:hidden"
          />

          <nav className="fixed z-50 h-screen
 bg-white
 p-10
 shadow-xl

     "
          >

            <div className="  grid  gap-y-5  text-gray-500">

              {SideBarMenuConfig.items.map(({ href, label, Icon }, index) => (
              // eslint-disable-next-line react/no-array-index-key
                <Link key={index} href={href}>

                  <div className="flex items-center gap-5 gap-y-1 2xl:flex-col">
                    <span className="flex items-center text-2xl">
                      {Icon ? <Icon /> : <MdBackHand className="opacity-0  2xl:hidden" />}

                    </span>
                    <small className="  text-gray-400">{label}</small>

                  </div>

                </Link>
              ),
              )}

            </div>

          </nav>

        </div>
      </div>
    )

  );
};

export default SideMenu;

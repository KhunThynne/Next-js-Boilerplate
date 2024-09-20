'use client';

import Link from 'next/link';
import { MdBackHand } from 'react-icons/md';

import useSidebar from '@/actions/hooks/sidebarToggle';
import { SideBarMenuConfig } from '@/utils/SideBarMenuConfig';

import Brander from '../Brander';
import CaptionItems from '../CaptionItem';

const SideMenu = () => {
  const { sidebarState } = useSidebar();
  return (
    !sidebarState
    && (
      <div className=" fixed   z-40 h-screen ">

        <div className="relative ">

          <div className="
      fixed
top-0
      z-50 h-screen w-screen bg-black opacity-20 2xl:hidden"
          />

          <nav className="fixed

          z-50
           h-screen
          w-full
 bg-white
 pt-10
 shadow-xl
 sm:w-[260px]
lg:right-0
     "
          >

            <div className=" flex  h-[80vh]   flex-col items-center  gap-16 text-gray-500">

              <div className="order-2 flex w-full flex-col items-center gap-y-5 ">
                {SideBarMenuConfig.items.map(({ href, label, Icon }, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Link key={index} href={href}>

                    <div className="flex items-center gap-5 gap-y-1 md:flex-col">
                      <span className="flex items-center text-3xl">
                        {Icon ? <Icon /> : <MdBackHand className="opacity-0  md:hidden" />}

                      </span>
                      <p className="  font-bold text-gray-400">{label}</p>

                    </div>

                  </Link>
                ),
                )}

              </div>

              <div className="order-2 grid w-full justify-center border-t py-2">
                <CaptionItems />
              </div>
              <div className="order-1 mx-auto rounded-md bg-primary md:order-2 ">

                <Brander width="120" />
              </div>

            </div>

          </nav>

        </div>
      </div>
    )

  );
};

export default SideMenu;

'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Fragment } from 'react';
import { AiFillTikTok } from 'react-icons/ai';
import { BsTwitterX } from 'react-icons/bs';
import { CiInstagram } from 'react-icons/ci';
import { FaYoutube } from 'react-icons/fa';
import { MdFacebook } from 'react-icons/md';

import useSidebar from '@/actions/hooks/sidebarToggle';

import Brander from '../Brander';
import CaptionItems from '../CaptionItem';
import { useContents } from '../Contexts/ContentContext';

const SideMenu = () => {
  const { SideItemsContent } = useContents();
  const { sidebarState } = useSidebar();
  const router = useRouter();

  if (!sidebarState) {
    return null;
  }

  return (

    <nav className="fixed z-50 h-screen w-full bg-sidebar-bg
    pb-10 shadow-2xl sm:w-[260px] md:h-[92vh] md:pb-0
    lg:right-0"
    >
      <div className="flex h-full  flex-col justify-between gap-y-5
        overflow-scroll py-10 text-gray-500"
      >

        <div className="flex w-full  flex-col items-center gap-y-5
         pt-10  md:py-5"
        >
          {SideItemsContent.slice(5).map(({ url, label }, index) => (
            <Fragment key={label}>
              <Link href={url}>
                <div className="flex items-center gap-5 gap-y-1 md:flex-col">
                  <p className="font-bold text-gray-400">{label}</p>
                </div>
              </Link>
              {index === 4 && <div className="mt-5 w-full"><hr /></div>}
            </Fragment>
          ))}
        </div>

        <div className=" grid w-full justify-center border-y
         p-5 py-2"
        >
          <CaptionItems />
        </div>
        <div className=" order-3 flex flex-col items-center">
          <div className="rounded-full p-5">
            <Brander width="120" />
          </div>
          <div className="order-4 flex items-center justify-center gap-x-2">
            <small>ติดตาม</small>
            {[
              { icon: <MdFacebook size={20} />, url: 'https://www.facebook.com/pantipdotcom/' },
              { icon: <CiInstagram size={20} />, url: 'https://www.instagram.com/pantipdotcom/' },
              { icon: <AiFillTikTok size={20} />, url: 'https://www.tiktok.com/@pantip1996' },
              { icon: <BsTwitterX size={15} />, url: 'https://x.com/Pantip1996' },
              { icon: <FaYoutube size={20} />, url: 'https://www.youtube.com/@pantipchannel' },
            ].map(({ icon, url }, index) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              <div key={index} className="cursor-pointer" onClick={() => router.push(url)}>
                {icon}
              </div>
            ))}
          </div>

        </div>
      </div>
    </nav>

  );
};

export default SideMenu;

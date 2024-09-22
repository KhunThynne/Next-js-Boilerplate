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
    <div className="fixed z-40 h-screen w-screen">
      <div className="relative ">
        <div className="fixed top-0 z-50 h-screen w-screen bg-black opacity-20 2xl:hidden" />

        <nav className="fixed z-50 h-[91vh] w-full overflow-scroll bg-gray-50 pb-10 shadow-xl sm:w-[260px] md:h-[92vh] md:pb-0 lg:right-0">
          <div className="flex h-[80vh] flex-col items-center gap-16 text-gray-500">
            <div className="flex w-full flex-col items-center gap-y-5 bg-white py-5">
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

            <div className="mx-5 grid w-full justify-center bg-gray-50 p-5 py-2">
              <CaptionItems />
            </div>

            <div className="flex justify-center border bg-gray-100">
              <div className="rounded-full p-5">
                <Brander width="100" />
              </div>
            </div>

            <div className="flex items-center justify-center gap-x-2">
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
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;

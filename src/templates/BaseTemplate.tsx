import { useTranslations } from 'next-intl';

import ChoiceRoomComponent from '@/components/ChoiceRoomComponent';
import BreadcrumbsItems from '@/components/Layout/Breadcrumbs';
import Navbar from '@/components/Layout/Navbar';
import SideMenu from '@/components/Layout/SideMenu';
import SearchInput from '@/components/SearchInput';
import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  leftNav?: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (

    <div className="  w-full bg-container   text-gray-700">
      <Navbar />
      <SideMenu />

      {/* Breadcrumbs Layout */}
      <div className="sticky top-0    z-30 bg-white px-6 py-3 md:hidden">

        <SearchInput />
      </div>

      <div className=" hidden md:block ">

        <BreadcrumbsItems />
        <div className="h-4 w-full  bg-[#1d1d1d]"></div>
      </div>

      <div className="

      "
      >
        <div className="  sticky  top-16 z-20 bg-pantipBG md:top-20 md:bg-transparent">
          <ChoiceRoomComponent />
        </div>
        <main className="z-10 min-h-screen  overflow-auto  lg:p-5">
          <div className="mx-6 py-5  text-xl

           [&_p]:my-6"
          >
            {props.children}
          </div>
        </main>

        <footer className="mb:pb-8 border-t border-gray-300 pb-36 pt-8  text-center text-sm md:py-8 ">
          {`© Copyright ${new Date().getFullYear()} ${AppConfig.name}. ${t('made_with')} `}
          <a
            href="https://creativedesignsguru.com"
            className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          >
            CreativeDesignsGuru
          </a>
          .
          {/*
           * PLEASE READ THIS SECTION
           * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
           * The link doesn't need to appear on every pages, one link on one page is enough.
           * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
           */}
        </footer>
      </div>

    </div>

  );
};

export { BaseTemplate };

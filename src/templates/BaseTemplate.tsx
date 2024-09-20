import { Image } from '@nextui-org/image';
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

    <div className="w-full  text-gray-700 antialiased">
      <Navbar />
      <SideMenu />
      <div className="my-5 hidden justify-center md:mx-4 md:flex">
        <Image
          src={process.env.Picture1_image_URL!}

          alt="ptcdn"

          className="  rounded-none !opacity-90 md:rounded-lg"
        />
      </div>
      {/* Breadcrumbs Layout */}
      <div className="sticky top-0    bg-white px-6 py-3 md:hidden">

        <SearchInput />
      </div>

      <div className="

    z-20
    hidden
       md:block"
      >
        <BreadcrumbsItems />
      </div>
      <div className="my-8 hidden md:block">

        <hr />

      </div>

      <div className="">

        <div className="mx-auto
       max-w-screen-2xl
       "
        >

          <main className="min-h-screen  ">
            <ChoiceRoomComponent />
            {props.children}
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

    </div>
  );
};

export { BaseTemplate };

import { Image } from '@nextui-org/image';
import { useTranslations } from 'next-intl';

import ChoiceRoomComponent from '@/components/ChoiceRoomComponent';
import BreadcrumbsItems from '@/components/Layout/Breadcrumbs';
import Navbar from '@/components/Layout/Navbar';
import SideMenu from '@/components/Layout/SideMenu';
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
      <div className="flex justify-center md:mx-4 md:my-5">
        <Image
          src={process.env.Bander_image_URL!}

          alt="ptcdn"

          className="  rounded-none !opacity-90 md:rounded-lg"
        />
      </div>
      {/* Breadcrumbs Layout */}

      <BreadcrumbsItems />

      <div className="my-8">

        <hr />

      </div>

      <div className="">

        <div className="mx-auto
       max-w-screen-xl
       "
        >
          <ChoiceRoomComponent />
          <main className="min-h-screen">

            {props.children}
          </main>

          <footer className="border-t border-gray-300 py-8 text-center text-sm">
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

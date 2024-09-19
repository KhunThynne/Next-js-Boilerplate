'use clinet';

import { Image } from '@nextui-org/image';
import { MdMenu } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50   flex w-full
    bg-white
     py-2 text-primary
     shadow
       lg:px-20
     "
    >
      <div className="flex cursor-pointer items-center px-5">
        <MdMenu className="text-2xl" />
      </div>
      <div className="mx-auto rounded-xl bg-primary p-3 py-2  sm:mx-0">
        <Image

          src="https://ptcdn.info/mobile/logo-mobile-pantip-white.png
"
          radius="none"
          alt="logo"
          width="55"
          height="55"
        />
      </div>
    </nav>
  );
};

export default Navbar;

'use clinet';

import Image from 'next/image';
import { MdMenu } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10  flex w-full gap-2 bg-white
     text-primary
     shadow
     "
    >
      <div className="flex cursor-pointer items-center px-2">
        <MdMenu className="text-3xl" />
      </div>
      <div className=" bg-primary p-2">
        <Image

          src="https://ptcdn.info/mobile/logo-mobile-pantip-white.png
"
          alt="logo"
          width="50"
          height="50"
        />
      </div>
    </nav>
  );
};

export default Navbar;

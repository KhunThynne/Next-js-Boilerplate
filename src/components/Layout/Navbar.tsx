'use client';

import { Input } from '@nextui-org/input';
import { useRouter } from 'next/navigation';
import { MdAddBox, MdMenu, MdPerson, MdSearch } from 'react-icons/md';

import useSidebar from '@/actions/hooks/sidebarToggle';

import Brander from '../Brander';

const Navbar = () => {
  const { sidebarToggle } = useSidebar();

  const router = useRouter();

  return (
    <nav className="fixed bottom-0 z-40 flex
    min-h-[80px]

     w-full

    items-center
 justify-center
     border-t
     bg-primary
px-[24px]
       py-2
      text-white

      shadow
      md:sticky
      md:top-0
md:z-50

md:justify-between
lg:px-20
     "
    >

      <div className="
      order-1

        hidden
        rounded-md bg-primary

        md:block

        lg:order-1
        "
      >

        <Brander />
      </div>

      <div className="order-2
      hidden items-center
      justify-center
text-white
md:block
      "
      >
        <Input

          isClearable
          radius="lg"
          classNames={{
            label: 'text-black/50 dark:text-white/90 ',
            input: [
              'bg-transparent',
              'text-black/90 dark:text-white/90',
              'placeholder:text-default-700/50 dark:placeholder:text-white/60',
            ],
            innerWrapper: 'bg-transparent',
            inputWrapper: [
              'w-[40vw]',
              'bg-default-200/50',
              'dark:bg-default/60',
              'backdrop-blur-xl',
              'backdrop-saturate-200',
              'hover:bg-default-200/70',
              'dark:hover:bg-default/70',
              'group-data-[focus=true]:bg-default-200/50',
              'dark:group-data-[focus=true]:bg-default/60',
              '!cursor-text',
            ],
          }}
          placeholder="ค้นหาบน Pantip"
          startContent={
            <MdSearch className="text-2xl" />
          }
        />
      </div>

      <div className="order-3 flex  gap-8  text-3xl lg:gap-5">

        <div className="order-1 md:order-2">
          <button
            className="flex  items-center "
            onClick={() => {
              router.push('https://pantip.com/login?redirect=Zm9ydW0vbmV3X3RvcGlj&pos=2');
            }}
            type="button"
          >
            <MdPerson />
          </button>
        </div>
        <div className="order-2 md:order-1 md:mx-3">
          <button

            className="flex   items-center gap-2"
            onClick={() => {
              router.push('https://pantip.com/login?redirect=Zm9ydW0vbmV3X3RvcGlj&pos=2');
            }}
            type="button"
          >
            <MdAddBox />
            <h1 className="  hidden text-sm md:block ">ตั้งกระทู้</h1>
          </button>
        </div>
        <div className="order-3  flex items-center">

          <button

            className="flex  flex-col items-center"
            onClick={sidebarToggle}
            type="button"
          >
            <MdMenu />

          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;

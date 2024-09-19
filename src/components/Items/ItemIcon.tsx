import { Image } from '@nextui-org/image';
import Link from 'next/link';
import React from 'react';

export default function ItemIcon({ item }: { item: any }) {
  return (
    <div className=" grid gap-y-2 opacity-50">
      <Link href={item.link_url}>

        <div className=" flex flex-col  px-2">
          {/* <Icon className="mx-auto text-3xl" /> */}

          <div className=" my-2 flex w-16 justify-center">
            <Image
              className="rounded-lg bg-gray-800"
              src={item.room_icon_url}
              alt={item.name}
              width={40} // Specify width as needed
              height={40} // Specify height as needed
              loading="lazy"
            />
          </div>
          <span className="whitespace-nowrap text-center text-xs font-bold">
            {item.name}
            {/* {JSON.stringify(item)} */}
          </span>
        </div>
      </Link>
    </div>
  );
}

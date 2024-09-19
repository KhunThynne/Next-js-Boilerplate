import { Image } from '@nextui-org/image';
import Link from 'next/link';
import React from 'react';

export default function ItemIcon({ item }: { item: any }) {
  return (
    <div className=" grid gap-y-2 opacity-50">
      <Link href={item.link_url}>

        <div className="mx-auto flex flex-col rounded-xl px-3">
          {/* <Icon className="mx-auto text-3xl" /> */}

          <div className="mx-auto my-2 w-16">
            <Image
              className="bg-gray-800"
              src={item.room_icon_url}
              alt={item.name}
              width={60} // Specify width as needed
              height={60} // Specify height as needed
              loading="lazy"
            />
          </div>
          <span className="whitespace-nowrap text-center text-sm font-bold">
            {item.name}
            {/* {JSON.stringify(item)} */}
          </span>
        </div>
      </Link>
    </div>
  );
}

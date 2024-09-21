import { Image } from '@nextui-org/image';
import { Skeleton } from '@nextui-org/skeleton';
import Link from 'next/link';
import React from 'react';

export default function ItemIcon({ item }: { item: any }) {
  return (

    <Link href={item.link_url} className="hover:opacity-80">

      <div className=" flex flex-col  px-2">

        <div className=" my-2 flex w-16 justify-center">
          <Image
            className="rounded-lg bg-gray-800"
            src={item.room_icon_url}
            alt={item.name}
            width={40}
            height={40}
            loading="lazy"
          />
        </div>
        <span className="whitespace-nowrap text-center text-xs font-bold">
          {item.name}

        </span>
      </div>
    </Link>

  );
}

export const SkeletionItemIcon = ({ className }: { className?: string }) => {
  return (
    <div className={`my-2 flex gap-y-1 ${className}`}>
      {[...Array(40)].map((_, key) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={key} className="flex flex-col px-2">
          <div className="my-2 flex w-16">
            <Skeleton className="h-10 w-3/5 rounded-lg">
              <div className="h-2 w-3/5 rounded-lg bg-default-400" />
            </Skeleton>
          </div>
          <span className="whitespace-nowrap text-center text-xs font-bold">
            <Skeleton className="h-1 w-3/5 rounded-lg" />
          </span>
        </div>
      ))}
    </div>
  );
};

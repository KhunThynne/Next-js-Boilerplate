/* eslint-disable style/multiline-ternary */
'use client';

import { useContents } from './Contexts/ContentContext';
import ItemIcon, { SkeletionItemIcon } from './Items/ItemIcon';

export default function ChoiceRoomComponent({ className }: { className?: string }) {
  const { RoomChoiceContent } = useContents();

  return (
    <div className={`sticky top-16 z-20 flex overflow-x-scroll 
      bg-white
     p-1
     shadow
     md:top-20
     md:shadow-none

     lg:mx-16
     ${className} `}
    >
      {RoomChoiceContent ? RoomChoiceContent.map((item: any, index: number) => (
        <div className="flex  gap-y-2 opacity-50" key={index}>
          <ItemIcon item={item} />
        </div>
      )) : (
        <SkeletionItemIcon className={className} />
      )}
    </div>
  );
}

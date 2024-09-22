/* eslint-disable style/multiline-ternary */
'use client';

import { useContents } from './Contexts/ContentContext';
import ItemIcon, { SkeletionItemIcon } from './Items/ItemIcon';

export default function ChoiceRoomComponent({ className }: { className?: string }) {
  const { RoomChoiceContent } = useContents();

  return (
    <div className={`  mx-auto 
     flex
   max-w-screen-xl
    overflow-x-scroll
     rounded-b
      p-1
     md:top-20

   
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

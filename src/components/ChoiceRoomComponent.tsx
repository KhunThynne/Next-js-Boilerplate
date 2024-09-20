/* eslint-disable style/multiline-ternary */
'use client';
import { useEffect, useState } from 'react';

import { useContents } from './Contexts/contentsInfo';
import ItemIcon, { SkeletionItemIcon } from './Items/ItemIcon';

export default function ChoiceRoomComponent({ className }: { className?: string }) {
  const { next_Data } = useContents();
  const [roomList, setRoomList] = useState<[]>();

  useEffect(() => {
    setRoomList(next_Data?.props?.initialState.header.roomLists);
  }, [next_Data]);

  return (
    <div className={`sticky top-16 flex overflow-x-scroll bg-white
     md:top-24 ${className}`}
    >
      {roomList ? roomList.map((item: any, index: number) => (
        <div className="flex  gap-y-2 opacity-50" key={index}>
          <ItemIcon item={item} />
        </div>
      )) : (
        <SkeletionItemIcon className={className} />
      )}
    </div>
  );
}

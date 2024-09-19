'use client';
import { useEffect, useState } from 'react';

import { useContents } from './Contexts/contentsInfo';
import ItemIcon from './Items/ItemIcon';

export default function ChoiceRoomComponent() {
  const { next_Data } = useContents();
  const [roomList, setRoomList] = useState<[]>();
  useEffect(() => {
    setRoomList(next_Data?.props?.initialState.header.roomLists);
  }, [next_Data]);

  return (

    <div className="sticky top-40 flex  overflow-x-scroll bg-white">
      {roomList && roomList.map((item: any, index: any) => (

        // eslint-disable-next-line react/no-array-index-key
        <ItemIcon item={item} key={index} />

      ),
      )}

    </div>

  );
}

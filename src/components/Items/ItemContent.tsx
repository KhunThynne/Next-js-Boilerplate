import { Image } from '@nextui-org/image';

import type { ContentData } from '../Contents/Content';

export default function ItemContent({ item }: { item: ContentData }) {
  return (
    <div className=" relative  w-full">

      <div className="">
        <Image
          src="https://ptcdn.info/pick/602/000/000/m19yej86i0JbNIT9LZI-s.jpg"

          className=" aspect-square border"
        />
      </div>
      <div className=" m-2   ">
        <div className="grid  " style={{ lineHeight: '10px' }}>

          <h1 className="   truncate text-lg font-bold">แต่งงานกันแล้ว ค่าใช้จ่ายแฟนหาร 2 ทุกอย่าง ปกติมั๊ย</h1>
          <h2 className="text-lg font-thin text-gray-400">

            {item.name ? item.name : 'unknow'}
          </h2>
          <div className="flex justify-between text-sm">
            <small>user</small>
            <small>time</small>

          </div>

        </div>
      </div>

    </div>

  );
}

import { Image } from '@nextui-org/image';
import Link from 'next/link';
import { BiLike } from 'react-icons/bi';
import { MdOutlineComment } from 'react-icons/md';

import type { ContentItem } from '../Contexts/untils';

export default function ItemContent({ item }: { item: ContentItem }) {
  return (
    <Link className=" relative w-full  text-content hover:opacity-80" href={item.link! || '#'}>
      <div className="flex justify-end">

        <div className="flex items-center justify-end">

          <MdOutlineComment />
          <small className="w-full  text-[.5em]">

            {item.state ? item.state.comment : 'unknow'}
          </small>
        </div>
        <div className="flex items-center justify-end">

          <BiLike />
          <small className="w-full  text-[.5em]">

            {item.state ? item.state.vote : 'unknow'}
          </small>
        </div>

      </div>
      <div className="flex justify-center ">

        <Image
          src={item.image!}

          className="mx-auto aspect-square h-auto w-full min-w-full border object-cover"
        />
      </div>
      <div className=" m-2   ">
        <div className="grid  ">

          <h1 className={`  text-lg font-bold ${item.image ? 'truncate' : ' aspect-square overflow-auto'}`}>

            {item.text}
          </h1>
          <h2 className="text-lg font-thin text-gray-400">

            {item.user?.name ? item.user?.name : 'unknow'}
          </h2>
          <div className=" flex justify-end text-sm">

            <small>
              {item.create_date ? item.create_date : 'unknow'}
            </small>
          </div>

        </div>
      </div>

    </Link>

  );
}

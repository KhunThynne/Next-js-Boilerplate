import { Fragment } from 'react';

import type { ContentItem } from '../Contexts/untils';
import ItemContent from '../Items/ItemContent';

export type ContentProps = {
  data: ContentItem[] | undefined; // Array of ContentData
  HeadContainer?: string; // Optional string prop
  size?: number;
};

export default function Content({
  HeadContainer = 'Head',

  data,
}: ContentProps) {
  return (
    <div className=" rounded-xl border p-3 shadow ">
      <div className="text-3xl font-bold text-content-h1">{HeadContainer}</div>

      <div className=" grid  grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] justify-center gap-6

 gap-y-8

lg:p-8

"
      >
        {/* Render items */}

        {data?.map((item: any, key) => (
          <Fragment key={key}>
            <ItemContent item={item} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

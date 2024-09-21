import { Fragment } from 'react';

import ItemContent from '../Items/ItemContent';
import ContentContainer from './ContentContainer';

export type ContentData = {
  name?: string;
  image?: string;
  time?: string;
  desription?: string;
};

type ContentProps = {
  data?: ContentData[]; // Array of ContentData
  HeadContainer?: string; // Optional string prop
};

export default function Content({
  HeadContainer = 'Head',
  data = [{ name: 'test' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }],
}: ContentProps) {
  return (
    <div className="grid gap-6">
      <div className="text-3xl font-bold">{HeadContainer}</div>

      <ContentContainer>
        {/* Render items */}
        {data.map((item: ContentData, key) => (
          <Fragment key={key}>
            <ItemContent item={item} />
          </Fragment>
        ))}
      </ContentContainer>
    </div>
  );
}

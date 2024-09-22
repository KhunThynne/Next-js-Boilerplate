'use client';

import ContentLists from '@/components/Contents/ListsContent';
import { useContents } from '@/components/Contexts/ContentContext';

export default function PantipPickContainer() {
  const { PantipPickContent } = useContents();

  return (<ContentLists HeadContainer={PantipPickContent?.headTitle} data={PantipPickContent?.content} />);
}

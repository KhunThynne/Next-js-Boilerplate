'use client';

import Content from '@/components/Contents/Content';
import { useContents } from '@/components/Contexts/ContentContext';

export default function PantipRealtimeContainer() {
  const { PantipRealtimeContent } = useContents();

  return (<Content HeadContainer={PantipRealtimeContent?.headTitle} data={PantipRealtimeContent?.content} />);
}

'use client';

import Content from '@/components/Contents/Content';
import { useContents } from '@/components/Contexts/ContentContext';

export default function PantipHitzContainer() {
  const { PantipHitzContent } = useContents();

  return (<Content HeadContainer={PantipHitzContent?.headTitle} data={PantipHitzContent?.content} muteBorder />);
}

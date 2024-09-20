'use client';

import Link from 'next/link';

import { useContents } from './Contexts/contentsInfo';

export default function CaptionItems() {
  const { captionItem } = useContents();
  return (
    <div className="grid gap-y-2 text-gray-400">
      {captionItem && captionItem.map((item: any, index: any) => (

        item.text !== '' && (
          <Link key={index} href={item.url}>

            <p className="text-sm">{item.text}</p>

          </Link>
        )

      ))}

    </div>
  );
}

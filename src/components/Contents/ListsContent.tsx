'use client';
import { Button } from '@nextui-org/button';
import { Card, CardFooter, CardHeader } from '@nextui-org/card';
import { Listbox, ListboxItem } from '@nextui-org/listbox';
import Link from 'next/link';
import { BiLike } from 'react-icons/bi';
import { MdOutlineComment } from 'react-icons/md';

import type { ContentItem } from '../Contexts/untils';
import type { ContentProps } from './Content';

export default function ContentLists({ HeadContainer = 'Head', data }: ContentProps) {
  return (

    <Card className="   bg-pantip p-3">
      <CardHeader className="text-xl font-bold text-content-h1">{HeadContainer}</CardHeader>

      {/* Image */}

      <Listbox
        aria-label="Actions"

      >

        {data!.map((item: ContentItem, key: number) => (

          <ListboxItem key={key} className="my-1 rounded p-2 " variant="solid">
            <div className="flex  flex-row gap-2 lg:gap-4">
              {item.image && (
                <Link href={item.link} target="_blank">
                  <div
                    className="ml-2 size-20 rounded bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                </Link>
              )}

              <div className="flex-1">
                <h2 className="text-sm font-semibold">
                  <Link
                    href={item.link}
                    target="_blank"
                    className="hover:underline"
                  >
                    {item.text}
                  </Link>
                </h2>
                <div className="mt-1">
                  {/* ปรับแท็กที่นี่หากต้องการ */}
                </div>

                <div className="mt-1 flex justify-between">
                  <div className="flex grow items-center">
                    <Link href={item.user.profileLink} target="_blank">
                      <div
                        className="mr-2 size-8 rounded-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${item.user.avatar})` }}
                      />
                    </Link>
                    <h5 className="text-xs">
                      <Link href={item.user.profileLink} className="text-gray-500 hover:underline">
                        {item.user.name}
                      </Link>
                    </h5>
                    <span className="ml-2 text-xs text-gray-600" title={item.create_date}>
                      {item.create_date}
                    </span>
                  </div>

                  {/* ทำให้ส่วนนี้ยืดหยุ่นตามพื้นที่ที่เหลือ */}
                  <div className="mt-1 flex items-center">
                    <span className="mr-4 flex items-center text-xs text-gray-500">
                      <MdOutlineComment />
                      {item.state.comment}
                    </span>
                    <span className="flex items-center text-xs text-gray-500">
                      <BiLike />
                      {item.state.vote}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </ListboxItem>

        ),
        )}

      </Listbox>
      <CardFooter>
        <Button className="w-screen ">ดูเพิ่มเติม</Button>

      </CardFooter>
    </Card>

  );
}

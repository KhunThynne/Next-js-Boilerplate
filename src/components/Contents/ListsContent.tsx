'use client';
import { Button } from '@nextui-org/button';
import { Card, CardFooter, CardHeader } from '@nextui-org/card';
import { Listbox, ListboxItem } from '@nextui-org/listbox';

import type { ContentData } from './Content';

export default function ContentLists({ HeadContainer = 'Head', data = [{}, {}] }: { data?: ContentData[]; HeadContainer: string }) {
  return (

    <Card className=" border p-3 shadow-sm">
      <CardHeader className="text-xl font-bold">{HeadContainer}</CardHeader>

      {/* Image */}
      <Listbox
        aria-label="Actions"

      >
        {data.map((_, key: number) => (

          <ListboxItem key={key} className=" my-1  gap-2 bg-gray-50">
            <h2 className=" text-lg">

              รวมตัวสายเปย์ กับ ฟีเจอร์ถูกใจให้พอยต์ ❤️💰
            </h2>
          </ListboxItem>

        ),
        )}

      </Listbox>
      <CardFooter>
        <Button>ดูเพิ่มเติม</Button>

      </CardFooter>
    </Card>

  );
}

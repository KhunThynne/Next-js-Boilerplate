'use client';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import Link from 'next/link';

export default function CardsTest() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="">NextUI</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
      </CardHeader>

      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>

      <CardFooter>
        <Link

          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}

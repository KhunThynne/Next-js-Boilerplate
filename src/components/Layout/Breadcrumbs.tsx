'use client';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/breadcrumbs';
import { Image } from '@nextui-org/image';

export default function BreadcrumbsItems() {
  return (
    <div className="bg-shadow relative flex justify-center  bg-pantipBG">
      <Image
        src={process.env.Picture1_image_URL!}
        alt="ptcdn"
        className="    !opacity-80 md:rounded-lg"
      />
      <Breadcrumbs
        className="

absolute
bottom-0
left-0
z-30
m-3
mx-72

p-3
text-xl
    "
        size="lg"

        color="foreground"
      >

        <BreadcrumbItem>Home</BreadcrumbItem>

      </Breadcrumbs>
    </div>
  );
}

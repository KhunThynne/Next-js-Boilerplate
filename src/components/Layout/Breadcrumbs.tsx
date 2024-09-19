'use client';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/breadcrumbs';

export default function BreadcrumbsItems() {
  return (

    <Breadcrumbs className="sticky
    top-20
       z-20
    mx-auto max-w-screen-xl  rounded
    border bg-white  p-6

    "
    >

      <BreadcrumbItem>Home</BreadcrumbItem>

    </Breadcrumbs>
  );
}

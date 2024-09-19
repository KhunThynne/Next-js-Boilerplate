'use client';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/breadcrumbs';

export default function BreadcrumbsItems() {
  return (

    <Breadcrumbs className="sticky top-20 z-50  rounded  border  bg-white p-6">

      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Music</BreadcrumbItem>
      <BreadcrumbItem>Artist</BreadcrumbItem>
      <BreadcrumbItem>Album</BreadcrumbItem>
      <BreadcrumbItem>Song</BreadcrumbItem>
    </Breadcrumbs>
  );
}

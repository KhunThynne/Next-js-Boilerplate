'use client';
import ContentLists from '@/components/Contents/ListsContent';
import type { ContentItem } from '@/components/Contexts/untils';

export async function Announce() {
  const data: ContentItem[] = [{
    create_date: '',
    user: {
      name: '',
      profileLink: '',
      avatar: '',
    },
    image: null,
    text: '',
    link: '',
    state: {
      comment: '',
      vote: '',
    },
  }];

  return (
    <ContentLists data={data} />

  );
}

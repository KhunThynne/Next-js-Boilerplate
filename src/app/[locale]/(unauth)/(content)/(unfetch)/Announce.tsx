'use client';

import { useEffect, useState } from 'react';

import ContentLists from '@/components/Contents/ListsContent';
import type { ContentItem } from '@/components/Contexts/untils';

const Announce = () => {
  const [data, setData] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    // ข้อมูลที่ใช้ในคอมโพเนนต์
    const fetchData = () => {
      const newData: ContentItem[] = [{
        create_date: '',
        user: {
          name: '',
          profileLink: 'https://pantip.com/s/LJ4gm',
          avatar: '',
        },
        image: null,
        text: 'รวมตัวสายเปย์ กับ ฟีเจอร์ถูกใจให้พอยต์ ❤️💰',
        link: 'https://pantip.com/s/LJ4gm',
        state: {
          comment: '',
          vote: '',
        },
      }, {
        create_date: '',
        user: {
          name: '',
          profileLink: 'https://pantip.com/s/JR1L9',
          avatar: '',
        },
        image: null,
        text: '🎧 Pantip Daily Podcast 🎧 3 อันดับกระทู้ฮิตบนพันทิป ประจำวันที่ 19 กันยายน 📊',
        link: 'https://pantip.com/s/JR1L9',
        state: {
          comment: '',
          vote: '',
        },
      }, {
        create_date: '',
        user: {
          name: '',
          profileLink: 'https://pantip.com/s/5xBHL',
          avatar: '',
        },
        image: null,
        text: 'Pantip Point 💰 กุ๊ก กุ๊ก กู๋ ผีหลอกมันเสียขวัญ แต่พวกเราแสนสุขสันต์ #ล่าท้าผีกัน ได้พอยต์ด้วยนะเธอ 👻',
        link: 'https://pantip.com/s/5xBHL',
        state: {
          comment: '',
          vote: '',
        },
      }];
      setData(newData);
      const Time = setTimeout(() => {
        setLoading(false);
        return () => {
          clearTimeout(Time);
        };
      }, 2000);
    };

    fetchData();
  }, []);
  if (loading) {
    return null;
  }
  return (
    <ContentLists data={data} HeadContainer="Announce" muteFooter />
  );
};

export default Announce;

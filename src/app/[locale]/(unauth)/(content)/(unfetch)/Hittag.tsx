'use client';

import { useEffect, useState } from 'react';

import ContentLists from '@/components/Contents/ListsContent';
import type { ContentItem } from '@/components/Contexts/untils';

const Hittag = () => {
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
        text: 'The Black Label (ค่ายเพลง)',
        link: 'https://pantip.com/tag/The_Black_Label_(%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%9E%E0%B8%A5%E0%B8%87)',
        state: {
          comment: '',
          vote: '',
        },
      }, {
        create_date: '',
        user: {
          name: '',
          profileLink: 'https://pantip.com/tag/%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99',
          avatar: '',
        },
        image: null,
        text: 'หุ้น',
        link: 'https://pantip.com/tag/%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99',
        state: {
          comment: '',
          vote: '',
        },
      }, {
        create_date: '',
        user: {
          name: '',
          profileLink: 'https://pantip.com/tag/BLACKPINK_(%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%94%E0%B8%99%E0%B8%95%E0%B8%A3%E0%B8%B5)',
          avatar: '',
        },
        image: null,
        text: 'BLACKPINK (นักร้องนักดนตรี)',
        link: 'https://pantip.com/tag/BLACKPINK_(%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%94%E0%B8%99%E0%B8%95%E0%B8%A3%E0%B8%B5)',
        state: {
          comment: '',
          vote: '',
        },

      }, {
        create_date: '',
        user: {
          name: '',
          profileLink: 'https://pantip.com/tag/%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B9%8C%E0%B8%AA%E0%B8%94',
          avatar: '',
        },
        image: null,
        text: 'เชียร์สด',
        link: 'https://pantip.com/tag/%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B9%8C%E0%B8%AA%E0%B8%94',
        state: {
          comment: '',
          vote: '',
        },

      }, {
        create_date: '',
        user: {
          name: '',
          profileLink: 'https://pantip.com/tag/3_HD_(BEC)',
          avatar: '',
        },
        image: null,
        text: '3 HD (BEC)',
        link: 'https://pantip.com/tag/3_HD_(BEC)',
        state: {
          comment: '',
          vote: '',
        },

      }, {
        create_date: '',
        user: {
          name: '',
          profileLink: 'https://pantip.com/tag/%E0%B8%9F%E0%B8%B8%E0%B8%95%E0%B8%9A%E0%B8%AD%E0%B8%A5%E0%B9%84%E0%B8%97%E0%B8%A2',
          avatar: '',
        },
        image: null,
        text: 'ฟุตบอลไทย',
        link: 'https://pantip.com/tag/%E0%B8%9F%E0%B8%B8%E0%B8%95%E0%B8%9A%E0%B8%AD%E0%B8%A5%E0%B9%84%E0%B8%97%E0%B8%A2',
        state: {
          comment: '',
          vote: '',
        },

      }, {
        create_date: '',
        user: {
          name: '',
          profileLink: 'https://pantip.com/tag/BTS_(%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%94%E0%B8%99%E0%B8%95%E0%B8%A3%E0%B8%B5)',
          avatar: '',
        },
        image: null,
        text: 'BTS (นักร้องนักดนตรี)',
        link: 'https://pantip.com/tag/BTS_(%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%94%E0%B8%99%E0%B8%95%E0%B8%A3%E0%B8%B5)',
        state: {
          comment: '',
          vote: '',
        },

      }, {
        create_date: '',
        user: {
          name: '',
          profileLink: 'https://pantip.com/tag/One31',
          avatar: '',
        },
        image: null,
        text: 'One31',
        link: 'https://pantip.com/tag/One31',
        state: {
          comment: '',
          vote: '',
        },

      }, {
        create_date: '',
        user: {
          name: '',
          profileLink: 'https://pantip.com/tag/LE_SSERAFIM_(%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%94%E0%B8%99%E0%B8%95%E0%B8%A3%E0%B8%B5)',
          avatar: '',
        },
        image: null,
        text: 'LE SSERAFIM (นักร้องนักดนตรี)',
        link: 'https://pantip.com/tag/LE_SSERAFIM_(%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%94%E0%B8%99%E0%B8%95%E0%B8%A3%E0%B8%B5)',
        state: {
          comment: '',
          vote: '',
        },

      }, {
        create_date: '',
        user: {
          name: '',
          profileLink: 'https://pantip.com/tag/BEC_(%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87_3)',
          avatar: '',
        },
        image: null,
        text: 'BEC (ช่อง 3)',
        link: 'https://pantip.com/tag/BEC_(%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87_3)',
        state: {
          comment: '',
          vote: '',
        },

      }];
      setData(newData);
      setLoading(false);
    };

    fetchData();
    const Time = setTimeout(() => {
      setLoading(false);
      return () => {
        clearTimeout(Time);
      };
    }, 4000);
  }, []);
  if (loading) {
    return null;
  }
  return (
    <ContentLists data={data} HeadContainer="Hittag" muteFooter />
  );
};

export default Hittag;

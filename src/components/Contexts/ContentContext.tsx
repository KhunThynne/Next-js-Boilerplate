import * as cheerio from 'cheerio';
import React, { createContext, type ReactNode, useContext, useEffect, useMemo, useState } from 'react';

import { CachedFetchXML } from '@/actions/fetch/FetchXML';

type ContextContentsProps = {

  captionItem: any;
  CotentsData: any;
  RoomChoiceContent: any;
  SideItemsContent: ListItem[];
};

export const ContentsContext = createContext<ContextContentsProps | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useContents = () => {
  const context = useContext(ContentsContext);
  if (!context) {
    throw new Error('ContentsProvider must be used within a ContentsProvider');
  }
  return context;
};

export type ListItem = {
  label: string;
  url: string;
  icon: string;
};

const ContentsProvider = ({ children }: { children: ReactNode }) => {
  const [captionItem, setCaptionItem] = useState<any>(null);
  const [CotentsData, setCotentsData] = useState<any | any[] | null>(null);
  const [RoomChoiceContent, setRoomChoiceContent] = useState<any | any[] | null>(null);
  const [SideItemsContent, setSideItemsContent] = useState<ListItem[]>([]);

  const RoomLists = ($: cheerio.CheerioAPI) => {
    const next_Data = $('#__NEXT_DATA__').text();
    setRoomChoiceContent(JSON.parse(next_Data)?.props?.initialState.header.roomLists);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const xml = await CachedFetchXML(process.env.NEXT_PUBLIC_PANTHIP_API_URL!);
        if (!xml) {
          return;
        }

        const $ = cheerio.load(xml);

        RoomLists($);

        const targetElement = $('.pt-beta-sidenav .pt-lists .pt-lists-item');
        const formattedItems = targetElement.map((_, element) => {
          const label = $(element).find('.pt-lists-item__text').text().trim();
          const url = $(element).find('a').attr('href') || '';
          const icon = $(element).find('.pt-lists-item__graphic').attr('class') || '';

          return { label, url, icon };
        }).get();
        setSideItemsContent(formattedItems);

        const formattedItemsCaption = $('ul.caption li');
        const items_caption = formattedItemsCaption.map((_, element) => {
          const url = $(element).find('a').attr('href');
          const text = $(element).find('a').text();
          return {
            url: url || 'no-url',
            text: text || 'no-text',
          };
        }).get();

        const findS = $('.pt-block');
        console.log(findS);
        setCaptionItem(items_caption);
        setCotentsData(findS);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const contextValue = useMemo(() => ({
    RoomChoiceContent,
    captionItem,
    CotentsData,
    SideItemsContent,
  }), [captionItem, CotentsData, RoomChoiceContent, SideItemsContent]);

  return (
    <ContentsContext.Provider value={contextValue}>
      {children}
    </ContentsContext.Provider>
  );
};

export default ContentsProvider;

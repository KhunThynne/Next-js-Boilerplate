import * as cheerio from 'cheerio';
import React, { createContext, type ReactNode, useContext, useEffect, useMemo, useState } from 'react';

import { CachedFetchXML } from '@/actions/fetch/FetchXML';

import { ItemContentFilter, type PantipContent } from './untils';

type ContextContentsProps = {

  captionItem: [];
  CotentsData: [];
  RoomChoiceContent: [];
  SideItemsContent: ListItem[];
  ContentBox: [];
  PantipPickContent?: PantipContent ;
  PantipHitzContent?: PantipContent;
  PantipRealtimeContent?: PantipContent;
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

  const [PantipPickContent, setPantipPickContent] = useState<PantipContent>();
  const [PantipHitzContent, setPantipHitzContent] = useState<PantipContent>();

  const [PantipRealtimeContent, setPantipRealtimeContent] = useState<PantipContent>();
  const [ContentBox, setContentBox] = useState<any>({});

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
        const parser = new DOMParser();
        parser.parseFromString(xml, 'application/xml');
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

        const Block = $('.pt-block');
        console.log($().html());
        const pantipRealtime = ItemContentFilter($, Block, 'Pantip Realtime');
        const pantipPick = ItemContentFilter($, Block, 'Pantip Pick');
        const pantipHitz = ItemContentFilter($, Block, 'Pantip Hitz');
        setPantipPickContent(pantipPick);

        setPantipRealtimeContent(pantipRealtime);

        setPantipHitzContent(pantipHitz);
        setContentBox({ PantipRealtime: pantipRealtime, PantipPick: pantipPick, PantipHitz: pantipHitz });
        setCaptionItem(items_caption);
        setCotentsData(Block);
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
    ContentBox,
    PantipPickContent,
    PantipRealtimeContent,
    PantipHitzContent,
  }), [captionItem, PantipHitzContent, CotentsData, RoomChoiceContent, SideItemsContent, ContentBox, PantipPickContent, PantipRealtimeContent]);

  return (
    <ContentsContext.Provider value={contextValue}>
      {children}
    </ContentsContext.Provider>
  );
};

export default ContentsProvider;

import React, { createContext, type ReactNode, useContext, useEffect, useMemo, useState } from 'react';

import { CachedFetchXML } from '@/actions/fetch/FetchXML';

type ContextContentsProps = {
  next_Data: any;
  captionItem: any;
};

export const ContentsContext = createContext<ContextContentsProps | null>(null);

export const useContents = () => {
  const context = useContext(ContentsContext);
  if (!context) {
    throw new Error('ContentsProvider must be used within a ContentsProvider');
  }
  return context;
};

const GetDocument = (htmlStr: string | null) => {
  const parser = new DOMParser();
  const document = parser.parseFromString(htmlStr!, 'text/html');
  return document;
};

const SelectorAndJson = (document: any) => {
  const listItems = document.querySelectorAll('ul.caption > li > a');
  const jsonData = Array.from(listItems).map((item: any) => ({
    text: item.textContent,
    url: item.href,
  }));

  return jsonData;
};

const ContentsProvider = ({ children }: { children: ReactNode }) => {
  const [next_Data, setNext_Data] = useState<JSON | null>(null);
  // const [navbar_Item, setNavbar_Item] = useState<JSON | null>(null);
  const [captionItem, setCaptionItem] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const htmlStr = await CachedFetchXML();

        const document = GetDocument(htmlStr);

        const next_Data = document.getElementById('__NEXT_DATA__');

        // const navbar_Item: any = document.getElementsByClassName('pt-beta-right-nav');

        setCaptionItem(SelectorAndJson(document));

        const jsonString = next_Data ? next_Data.textContent : '{}';

        setNext_Data(JSON.parse(jsonString!));

        // setNext_Data(next_Data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const contextValue = useMemo(() => ({ next_Data, captionItem }), [captionItem, next_Data]);

  return (
    <ContentsContext.Provider value={contextValue}>
      {children}
    </ContentsContext.Provider>
  );
};

export default ContentsProvider;

// 1import * as cheerio from 'cheerio';

'use server';
import { cache } from 'react';

async function FetchXML(url: string) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/html',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const htmlString = await response.text();

    return htmlString;
  } catch (error) {
    console.error('Error fetching Pantip page:', error);
    return null;
  }
}

export const CachedFetchXML = cache(FetchXML);

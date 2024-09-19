'use server';
import { cache } from 'react';

async function FetchXML(): Promise<string | null> {
  try {
    const response = await fetch(process.env.NEXT_PANTHIP_API_URL!, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/html',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.text();

    return data;
  } catch (error) {
    console.error('Error fetching Pantip page:', error);
    return null;
  }
}

export const CachedFetchXML = cache(FetchXML);

// app/api/pantip/route.tsx
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(process.env.NEXT_PANTHIP_API_URL!, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/html',
      },
    });

    if (!res.ok) {
      return NextResponse.json({ message: 'Failed to fetch Pantip' }, { status: 500 });
    }

    const html = await res.text();
    return NextResponse.json({ html });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching Pantip', error }, { status: 500 });
  }
}

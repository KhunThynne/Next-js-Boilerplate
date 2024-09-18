// app/pantip/page.tsx

import React from 'react';

const PantipPage = async () => {
  let html: string | null = null;

  try {
    const response = await fetch('http://localhost:3000/api/pantip');
    const data = await response.json();
    html = data.html || null;
  } catch (error) {
    console.error('Error fetching Pantip page:', error);
  }

  return (
    <div>
      <h1 className="text-sm">Pantip Home Page</h1>

      {html
        ? (
            // eslint-disable-next-line react-dom/no-dangerously-set-innerhtml
            <div className="" dangerouslySetInnerHTML={{ __html: html! }} />
          )
        : (
            <p>Loading...</p>
          )}
    </div>
  );
};

export default PantipPage;

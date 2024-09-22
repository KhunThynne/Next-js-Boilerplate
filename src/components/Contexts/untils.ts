export const GetDocument = (htmlStr: string | null) => {
  const parser = new DOMParser();
  const document = parser.parseFromString(htmlStr!, 'text/html');
  return document;
};

export const createSelector = (document: any) => {
  return {
    document,

    toJSON(query: string) {
      const listItems = document.querySelectorAll(query);
      const jsonData = Array.from(listItems).map((item: any) => ({
        text: item.textContent,
        url: item.href,
      }));

      return jsonData;
    },

    toDocument(query: string) {
      const listItems = document.querySelectorAll(query);

      return listItems;
    },
    convertHtmlToJson(this, selector: any) {
      const elements = document.querySelectorAll(selector);
      return Array.from(elements).map(element => this.elementToJson(element));
    },
    elementToJson(element: any) {
      return {
        element: element.tagName.toLowerCase(),
        class: element.className,
        innerHTML: element.innerHTML.trim(),
      };
    },

  };
};

export const ItemContentFilter = ($: any, xml: any, head: string) => {
  const FilterHead = xml.filter((_: any, element: any) => {
    return $(element).find('.h6.txt-yellow-700').text().trim() === head;
  });

  const Data = FilterHead.map((_: any, element: any) => {
    const headTitle = $(element).find('.h6.txt-yellow-700').text().trim();
    const headCaption = $(element).find('.caption').text().trim();

    const content: any = $(element).find('ul').map((_: any, ulElement: any) => {
      return [
        ...$(ulElement).find('li').map((_: any, liElement: any) => {
          const userProfileLink = $(liElement).find('.pt-list-item__info a').attr('href');
          const userName = $(liElement).find('.pt-list-item__info h5 a').text().trim();
          const userAvatar = $(liElement).find('.pt-list-item__info .img-thumbnail').css('background-image').replace(/url\(["']?/, '').replace(/["']?\)/, '');
          const userDate = $(liElement).find('.pt-list-item__info span').attr('title');

          return {
            create_date: userDate || '',
            user: {
              name: userName || '',
              profileLink: userProfileLink || '',
              avatar: userAvatar || null,
            },
            image: $(liElement).find('.pt-list-item__img').data('bg') || null,
            text: $(liElement).find('.pt-list-item__title').text().trim(),
            link: $(liElement).find('a').attr('href') || null,
            state: { comment: $(liElement).find('.pt-li_stats-comment').text().match(/\d+/g)[0], vote: $(liElement).find('.pt-list-item__stats .pt-li_stats-vote').text().match(/\d+/g)[0] },
          };
        }).get(),
      ];
    }).get();

    return {
      headTitle,
      headCaption,
      content,
    };
  }).get();
  const [data] = Data;

  return data;
};

export type User = {
  name: string;
  profileLink: string;
  avatar: string;
};

export type ContentItem = {
  create_date: string;
  user: User;
  image: string | null;
  text: string;
  link: string;
  state: { comment: string; vote: string };
};

export type PantipContent = {
  headTitle: string;
  headCaption: string;
  content: ContentItem[];
};

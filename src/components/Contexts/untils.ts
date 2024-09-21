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

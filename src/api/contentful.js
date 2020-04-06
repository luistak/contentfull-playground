

import { createClient } from 'contentful';

const CONTENTFUL_SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
const CONTENTFUL_ACCESS_TOKEN = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;

const CONTENTFUL_CLIENT = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});

class ContentfulApi {
  static async getEntries(query) {
    const response = await CONTENTFUL_CLIENT.getEntries(query);

    console.info({ response });

    return response.items;
  }
}

export default ContentfulApi;
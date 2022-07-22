import * as Common from './common.json';
import * as Complicated from './complicated.json';
import * as Person from './person.json';

const itLocale = {
  language: 'it',
  translations: {
    ...Common,
    resources: {
      Complicated,
      Person,
      products: {
        properties: {
          categoryId: 'Categoria',
        },
      },
    },
  },
};

export default itLocale;

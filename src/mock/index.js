
import { createServer } from 'miragejs';

import data from './data.json';

createServer({

  routes() {

    this.namespace = 'api';
    this.get('/post/:id/', (schema, request) => {
      const id = request.params.id;
      return data.find(post => post.id === id);
    })

    this.get('/posts', () => {

      // return data;
      return data;
    })
  },
});







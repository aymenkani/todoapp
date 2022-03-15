/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';

import graphqlSchema from './graphql/schema';
import graphqlResolvers from './graphql/resolvers';

const app = express();

app.use('/', graphqlHTTP({
  schema: graphqlSchema,
  rootValue: graphqlResolvers,
  graphiql: true,
  formatError(err) {
    if (!err.originalError) return err;
    const message = err.message || 'An error occurred';
    return { message };
  },
}));

mongoose.connect('mongodb://localhost:37017/todolist')
  .then(() => {
    app.listen(8080, () => console.log('server is up and running | localhost |8080'));
  }).catch((err) => console.error(err));

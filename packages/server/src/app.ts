import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import dotenv from 'dotenv';
import path from 'path';
import mongoose from 'mongoose';

//FIXME: remove to config file
//TODO: find better solution for ENV variables
dotenv.config({ path: path.join(__dirname, `../.env.${process.env.NODE_ENV}`.trim()) });

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
};

const app = express();

//mongo conection
mongoose
  .connect('mongodb://mongo:27017/exdl-evnts', { useNewUrlParser: true })
  .then(() => console.log('Mongooooose!!!'))
  .catch((err) => console.log(`Smth went wrong... ${err}`));

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.listen(process.env.PORT, () => {
  console.log(`application is running on port ${process.env.PORT}.`);
});

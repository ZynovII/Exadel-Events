import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const eventService = (input) => {
  return null;
};

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  input EventInput {
    title: String!
    date: String!
  }
  type Event {
    id: ID
    tite: String
    date: String
  }
  type Query {
    events: [Event]
    eventById: Event
  }
  type Mutation {
    create(data: EventInput): Event
    clear(id: String): String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  events: () => {
    return eventService({ type: 1 });
  },
  create: (data: any) => {
    return eventService({ type: 2, data });
  },
  eventById: (id: string) => {
    return eventService({ type: 2, id });
  },
  clear: (id: string) => {
    return eventService({ type: 4, id });
  },
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
);

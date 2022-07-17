import { Client } from 'faunadb';

const fauna = new Client({
  secret: process.env.FAUNADB_KEY,
});
export default fauna;

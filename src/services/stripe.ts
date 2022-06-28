import Stripe from 'stripe';
import { version } from '../../package.json';

const stripe = new Stripe(process.env.STRIPI_API_KEY, {
  apiVersion: '2020-08-27',
  appInfo: {
    name: 'Dev News',
    version,
  },
});
export default stripe;

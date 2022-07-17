/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';

import { Readable } from 'stream';
import Stripe from 'stripe';
import { stripe } from '@/services';
import saveSubscription from './_lib/managerSubscription';

async function buffer(readable: Readable) {
  const chucks = [];
  for await (const chuck of readable) {
    chucks.push(typeof chuck === 'string' ? Buffer.from(chuck) : chuck);
  }
  return Buffer.concat(chucks);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const relevantEvent = new Set(['checkout.session.completed']);
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const buf = await buffer(req);
    const secret = req.headers['stripe-signature'];

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
      res.status(400).send(`webhook error: ${err.message}`);
    }

    const { type } = event;

    if (relevantEvent.has(type)) {
      try {
        const checkoutSession = event.data.object as Stripe.Checkout.Session;
        switch (type) {
          case 'checkout.session.completed':
            await saveSubscription(checkoutSession.subscription.toString(), checkoutSession.customer.toString());
            break;
          default:
            throw new Error('unhandled event');
        }
      } catch (err) {
        return res.json({ error: 'webhook handle failed ' });
      }
    }
    return res.json({ received: true });
  }
  return res.setHeader('Allow', 'POST').status(405).end('Method not allowed');
};

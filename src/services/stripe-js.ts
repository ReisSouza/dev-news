import { loadStripe } from '@stripe/stripe-js';

const getStripeJs = async () => {
  const stripeJs = await loadStripe(process.env.NEXT_PUBLIC_STRIPI_PUBLIC_KEY);
  return stripeJs;
};
export default getStripeJs;

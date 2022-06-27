export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
declare global {
  interface Window {
    fbq: any;
  }
}

export const pageview = () => {
  window.fbq('track', 'PageView');
};

import umami from '@umami/node';

umami.init({
    websiteId: process.env.UMAMI_WEBSITE_ID, // Your website id
    hostUrl: process.env.UMAMI_HOST_URL, // URL to your Umami instance
});

export const umamiTrackCheckoutSuccessEvent = async (payload: {
    [key: string]: string | number | Date
}) => {
    await umami.track('checkout_success', payload);
}
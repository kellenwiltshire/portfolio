/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
export const GA_TRACKING_ID = 'G-TRH5TXHZ1E';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
	window.gtag('config', GA_TRACKING_ID, {
		page_path: url,
	});
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value: value,
	});
};

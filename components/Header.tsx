import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export default function Header() {
	const title = 'Kellen Wiltshire Web Development';
	const desc = 'Web Development Services for Brochure and Shopify sites as well as Web Apps.';
	const siteURL = 'https://kellenwiltshire.com';
	const pathName = useRouter().pathname;
	const pageURL = pathName === '/' ? siteURL : siteURL + pathName;
	const siteName = 'KellenWiltshire.com';

	return (
		<NextSeo
			title={title}
			description={desc}
			canonical={pageURL}
			openGraph={{
				type: 'website',
				locale: 'en_US',
				url: pageURL,
				title,
				description: desc,

				site_name: siteName,
			}}
			additionalLinkTags={[
				{
					rel: 'icon',
					href: `${siteURL}/favicon.ico`,
				},
			]}
		/>
	);
}

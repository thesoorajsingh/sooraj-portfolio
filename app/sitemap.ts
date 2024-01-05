import { getBlogPosts } from 'app/db/blog';

export default async function sitemap() {
	let routes = ['', '/blog', '/guestbook', '/uses', '/work'].map((route) => ({
		url: `https://leerob.io${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));

	return [...routes];
}

export default async function sitemap() {
	let routes = ['', '/blog', '/work', '/people'].map((route) => ({
		url: `https://thesoorajsingh.me${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));

	return [...routes];
}

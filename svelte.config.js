import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Adapter configuration for static build
		adapter: adapter({
			// Output directory for the static build
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		// Ensure all routes are prerendered at build time
		prerender: {
			entries: ['*']
		}
	}
};

export default config;

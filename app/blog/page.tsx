import Link from 'next/link';
import { Suspense } from 'react';
import ViewCounter from './view-counter';
import { getViewsCount } from 'app/db/queries';
import { getBlogPosts } from 'app/db/blog';

export const metadata = {
	title: 'Blog',
	description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage() {
	let allBlogs = getBlogPosts();

	return (
		<section>
			<h1 className='font-medium text-2xl mb-8 tracking-tighter'>
				i'm still working on this part.
				<br /> sign up on my{' '}
				<Link
					href={'https://soorajsingh.substack.com'}
					target='_blank'
					rel='noopener noreferrer'
					className={
						'underline hover:text-orange-600 dark:hover:text-orange-400'
					}
				>
					substack
				</Link>{' '}
				to get updates on when I post new blogs!
			</h1>
			{allBlogs
				.sort((a, b) => {
					if (
						new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
					) {
						return -1;
					}
					return 1;
				})
				.map((post) => (
					<Link
						key={post.slug}
						className='flex flex-col space-y-1 mb-4'
						href={`/blog/${post.slug}`}
					>
						<div className='w-full flex flex-col'>
							<p className='text-neutral-900 dark:text-neutral-100 tracking-tight'>
								{post.metadata.title}
							</p>
							<Suspense fallback={<p className='h-6' />}>
								<Views slug={post.slug} />
							</Suspense>
						</div>
					</Link>
				))}
		</section>
	);
}

async function Views({ slug }: { slug: string }) {
	let views = await getViewsCount();

	return <ViewCounter allViews={views} slug={slug} />;
}

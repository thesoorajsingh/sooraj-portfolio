import Link from 'next/link';

export const metadata = {
	title: 'Blog',
	description: 'Read my thoughts on engineering, design and product.',
};

export default function BlogPage() {
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
		</section>
	);
}

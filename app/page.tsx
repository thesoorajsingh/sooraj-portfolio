import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ViewCounter from 'app/blog/view-counter';
import capx from 'public/capxico.png';
import nothing from 'public/nothingico.webp';
import tap from 'public/tapico.png';
import { getViewsCount } from 'app/db/queries';

function Badge(props) {
	return (
		<a
			{...props}
			target='_blank'
			className='border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline'
		/>
	);
}

function ArrowIcon() {
	return (
		<svg
			width='12'
			height='12'
			viewBox='0 0 12 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z'
				fill='currentColor'
			/>
		</svg>
	);
}

function ChannelLink({ img, link, name }) {
	return (
		<div className='group flex w-full'>
			<a
				href={link}
				target='_blank'
				className='border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full'
			>
				<div className='flex items-center space-x-3'>
					<div className='relative h-16'>
						<Image
							alt={name}
							src={img}
							height={64}
							width={64}
							sizes='33vw'
							className='border border-neutral-200 dark:border-neutral-700 rounded-full h-16 w-16'
							priority
						/>
						<div className='border border-neutral-200 dark:border-neutral-700 rounded-full bg-white inline-flex p-1 relative h-6 w-6 items-center -top-6 -right-10'>
							<svg width='15' height='11' role='img' aria-label='YouTube logo'>
								<use href='/sprite.svg#youtube' />
							</svg>
						</div>
					</div>
					<div className='flex flex-col'>
						<p className='font-medium text-neutral-900 dark:text-neutral-100'>
							{name}
						</p>
						<Suspense fallback={<p className='h-6' />}></Suspense>
					</div>
				</div>
				<div className='text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12'>
					<ArrowIcon />
				</div>
			</a>
		</div>
	);
}

function BlogLink({ slug, name }) {
	return (
		<div className='group'>
			<a
				href={`/blog/${slug}`}
				className='border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full'
			>
				<div className='flex flex-col'>
					<p className='font-medium text-neutral-900 dark:text-neutral-100'>
						{name}
					</p>
					<Suspense fallback={<p className='h-6' />}>
						<Views slug={slug} />
					</Suspense>
				</div>
				<div className='text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12'>
					<ArrowIcon />
				</div>
			</a>
		</div>
	);
}

async function Views({ slug }: { slug: string }) {
	let views = await getViewsCount();
	return <ViewCounter allViews={views} slug={slug} />;
}

export default function Page() {
	return (
		<section>
			<h1 className='font-medium text-2xl mb-8 tracking-tight font-["monospace"]'>
				sup, i'm sooraj 👋
			</h1>
			<p className='prose prose-neutral dark:prose-invert'>
				{`I'm a frontend engineer, optimist, and a coffee enthusiast. I currently `}
				<Link href='/work'>work</Link>
				{` at `}
				<span className='not-prose'>
					<Badge href='https://tapinvest.in'>
						<Image
							src={tap}
							alt='Tap Invest'
							height={16}
							width={16}
							className={'pr-1'}
						/>
						Tap Invest
					</Badge>
				</span>
				{`, where we're democratising alternate investment methods. Before this, I've helped brands like `}
				<span className='not-prose'>
					<Badge href='https://capx.fi'>
						<Image
							src={capx}
							alt='CapXFi'
							height={16}
							width={16}
							className={'pr-1'}
						/>
						CapXFi
					</Badge>
				</span>
				{` and `}
				<span className='not-prose'>
					<Badge href='https://nothing.tech'>
						<Image
							src={nothing}
							alt='Nothing'
							height={16}
							width={16}
							className={'pr-1'}
						/>
						Nothing
					</Badge>
				</span>
				{` build scalable products, fast.`}
			</p>

			<div className='prose prose-neutral dark:prose-invert'>
				<p>
					I've been trying my hand at <Link href='/blog'>writing</Link> articles
					that aim at helping people be better engineers regardless of their
					career choices. I'll probably publish them soon enough
				</p>
			</div>

			<div className='prose prose-neutral dark:prose-invert'>
				<article className={'text-xs'}>
					This page is served statically using{' '}
					<Link href={'https://www.nextjs.org'} target={'_blank'}>
						Next.js
					</Link>{' '}
					and{' '}
					<Link href={'https://www.vercel.com'} target={'_blank'}>
						Vercel
					</Link>
					.
				</article>
				<article className={'text-xs sm:hidden lg:block'}>
					Press ⌘+K to navigate with your keyboard
				</article>
			</div>

			<ul className='flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300'>
				<li>
					<a
						className='flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all'
						rel='noopener noreferrer'
						target='_blank'
						href='https://twitter.com/whotooksooraj'
					>
						<ArrowIcon />
						<p className='h-7 ml-2'>follow me</p>
					</a>
				</li>
				<li>
					<a
						className='flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all'
						rel='noopener noreferrer'
						target='_blank'
						href='https://soorajsingh.substack.com'
					>
						<ArrowIcon />
						<p className='h-7 ml-2'>get email updates</p>
					</a>
				</li>
			</ul>
		</section>
	);
}

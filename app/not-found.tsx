import Link from 'next/link';
import React from 'react';

function NotFound() {
	return (
		<div className={'tracking-loose text-2xl'}>
			<span className={'font-mono text-[64px]'}>404</span>
			<br />
			<br />
			looks like you're a little lost.
			<br /> <br />{' '}
			<span className='mt-8'>
				head{' '}
				<Link href={'/'} className='underline'>
					home
				</Link>
				? or feel free to check out some stuff i{' '}
				<Link href={'/blog'} className='underline'>
					wrote
				</Link>
				!
			</span>
		</div>
	);
}

export default NotFound;

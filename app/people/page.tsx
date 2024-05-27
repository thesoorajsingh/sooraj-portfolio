import Link from 'next/link';
import React from 'react';

function People() {
	return (
		<div>
			<h1 className='text-3xl font-mono'>people i work with.</h1>
			<p className='mt-8 text-lg'>
				I have some extremely talented and passionate friends who are always
				looking to solve the next big problem!
				<br />
				<br /> if you're looking for awesome people on your team, you can find
				out more about them{' '}
				<Link
					href={
						'https://soorajsingh.notion.site/2e5480094a844fc5b6e5d56557a9aecb?v=1c18dba9f65c4460bb1b8929567e5691&pvs=4'
					}
					target='_blank'
					className='underline hover:text-blue-500 transition-all duration-500 ease-in-out'
				>
					here
				</Link>
				!
			</p>
		</div>
	);
}

export default People;

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Work',
	description: 'A summary of my work and contributions.',
};

async function Stars() {
	let res = await fetch('https://api.github.com/repos/vercel/next.js');
	let json = await res.json();
	let count = Math.round(json.stargazers_count / 1000);
	return `${count}k stars`;
}

export default function WorkPage() {
	return (
		<section>
			<h1 className='font-medium text-2xl mb-8 tracking-tighter'>my work</h1>
			<div className='prose prose-neutral dark:prose-invert'>
				<p>
					I enjoy building products that make a difference to people's lives.
					I've worked with startups as well as scaled organisations and helped
					them build experiences that are fast, scalable and delightful.
				</p>
				<hr className='my-6 border-neutral-100 dark:border-neutral-800' />
				<h2 className='font-medium text-xl mb-1 tracking-tighter'>
					Tap Invest
				</h2>
				<p className='text-neutral-600 dark:text-neutral-400 text-sm'>
					Software Engineer - Frontend
				</p>
				<ul>
					<li>
						Architected and built key UI elements for Tap Invest's Investor
						Facing App, driving smooth user interactions and reliable growth.
					</li>
					<li>
						Unified codebase across web and native Android using Capacitor JS,
						slashing development time by 30%.
					</li>
					<li>
						Integrated critical third-party services like payment gateways and
						e-signature tools, ensuring secure and streamlined user journeys.
					</li>
					<li>
						Led the rehaul of internal dashboards, boosting operational
						efficiency (15x!) and data accessibility.
					</li>
					<li>
						Ensured good code quality through comprehensive code reviews,
						minimizing technical debt and maintaining a clean codebase.
					</li>
					<li>
						Mentor fellow engineers and share architectural expertise, fostering
						team growth and knowledge transfer.
					</li>
					<li>
						Collaborate closely with cross-functional teams to define technical
						requirements, implement best practices, and deliver
						high-performance, user-focused solutions.
					</li>
				</ul>
				<hr className='my-6 border-neutral-100 dark:border-neutral-800' />
				<h2 className='font-medium text-xl mb-1 tracking-tighter'>
					Nothing, India
				</h2>
				<p className='text-neutral-600 dark:text-neutral-400 text-sm'>
					Freelance Consultant / Lead Frontend Engineer, 2022
				</p>
				<p>
					I was the solo frontend engineer for building Nothing India's Student
					Program chapter. I worked with a single backend engineer and we
					shipped a fully functional registration, proof upload and leaderboard
					system in 3 weeks. <br />
					<Link
						href={
							'https://soorajsingh.notion.site/Nothing-Student-Program-09e3e0dbecaf4dbcbd264feca6e652c4?pvs=74'
						}
						target='_blank'
					>
						Read more about this project here
					</Link>
				</p>
				<hr className='my-6 border-neutral-100 dark:border-neutral-800' />
				<h2 className='font-medium text-xl mb-1 tracking-tighter'>Capx Fi</h2>
				<p className='text-neutral-600 dark:text-neutral-400 text-sm'>
					Software Engineer Intern, 2022
				</p>
				<p>
					Built, documented, tested and deployed 2 functional dApps of Capx
					along with one other engineer that allow users to trade their tokens
					in a secondary market. <br />
					Please{' '}
					<Link href={'mailto:soorajsingh.work@gmail.com'} target='_blank'>
						reach out
					</Link>{' '}
					to know more about these projects {':)'}
				</p>
				<hr className='my-6 border-neutral-100 dark:border-neutral-800' />
				<h2 className='font-medium text-xl mb-1 tracking-tighter'>
					Sarci, India
				</h2>
				<p className='text-neutral-600 dark:text-neutral-400 text-sm'>
					Automation Engineer Intern, 2021
				</p>
				<p>
					Built, Deployed and Documented Azure serverless functions both code
					and no-code using Python and Logic Apps™ to integrate and build
					Microsoft Teams enabled workflow systems for large userbases
				</p>
			</div>
		</section>
	);
}

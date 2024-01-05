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
					Software Engineer / Frontend, 2022 - Present
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Exercitationem cupiditate dolorum inventore, recusandae vero beatae,
					consequuntur magnam nobis architecto sequi neque sapiente impedit illo
					voluptatem rerum quae molestias, veritatis quidem? Vel, libero dolorem
					repellat, eum optio, laudantium maxime odio amet quidem fuga facere.
					Eius cupiditate ipsum eveniet sed eos harum autem consequuntur magni,
					earum exercitationem fugiat commodi soluta porro eum! Natus architecto
					eveniet dolorem iure exercitationem saepe rerum, neque expedita.
					Labore velit explicabo eligendi, neque, doloribus amet necessitatibus
					laboriosam dolor error autem nam recusandae vel excepturi praesentium,
					ipsa cum atque?
				</p>
				<hr className='my-6 border-neutral-100 dark:border-neutral-800' />
				<h2 className='font-medium text-xl mb-1 tracking-tighter'>
					Nothing, India
				</h2>
				<p className='text-neutral-600 dark:text-neutral-400 text-sm'>
					Freelance Consultant / Lead Frontend Engineer, 2022
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quaerat
					suscipit vitae molestiae ullam, cum corrupti iste dolore corporis
					alias amet repellat cumque recusandae, molestias ad nam error illum
					eligendi? Repellat perferendis quaerat illum eaque quod laboriosam
					inventore illo perspiciatis, eveniet officiis repudiandae unde,
					praesentium aliquam magni! Excepturi sint hic, laborum numquam
					officiis cupiditate nisi saepe possimus. Aliquam, molestias delectus?
					Temporibus, qui! Exercitationem excepturi eum, dolor numquam aut est
					fuga nihil recusandae soluta consequatur? Atque, ipsa dignissimos
					exercitationem sequi temporibus quisquam nemo aperiam ipsum sapiente?
					Laboriosam, optio delectus? Voluptate, dolore!
				</p>
				<hr className='my-6 border-neutral-100 dark:border-neutral-800' />
				<h2 className='font-medium text-xl mb-1 tracking-tighter'>Capx Fi</h2>
				<p className='text-neutral-600 dark:text-neutral-400 text-sm'>
					Software Engineer, 2022
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Exercitationem cupiditate dolorum inventore, recusandae vero beatae,
					consequuntur magnam nobis architecto sequi neque sapiente impedit illo
					voluptatem rerum quae molestias, veritatis quidem? Vel, libero dolorem
					repellat, eum optio, laudantium maxime odio amet quidem fuga facere.
					Eius cupiditate ipsum eveniet sed eos harum autem consequuntur magni,
					earum exercitationem fugiat commodi soluta porro eum! Natus architecto
					eveniet dolorem iure exercitationem saepe rerum, neque expedita.
					Labore velit explicabo eligendi, neque, doloribus amet necessitatibus
					laboriosam dolor error autem nam recusandae vel excepturi praesentium,
					ipsa cum atque?
				</p>
				<hr className='my-6 border-neutral-100 dark:border-neutral-800' />
				<h2 className='font-medium text-xl mb-1 tracking-tighter'>
					Sarci, India
				</h2>
				<p className='text-neutral-600 dark:text-neutral-400 text-sm'>
					Automation Engineer, 2021
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Exercitationem cupiditate dolorum inventore, recusandae vero beatae,
					consequuntur magnam nobis architecto sequi neque sapiente impedit illo
					voluptatem rerum quae molestias, veritatis quidem? Vel, libero dolorem
					repellat, eum optio, laudantium maxime odio amet quidem fuga facere.
					Eius cupiditate ipsum eveniet sed eos harum autem consequuntur magni,
					earum exercitationem fugiat commodi soluta porro eum! Natus architecto
					eveniet dolorem iure exercitationem saepe rerum, neque expedita.
					Labore velit explicabo eligendi, neque, doloribus amet necessitatibus
					laboriosam dolor error autem nam recusandae vel excepturi praesentium,
					ipsa cum atque?
				</p>
			</div>
		</section>
	);
}

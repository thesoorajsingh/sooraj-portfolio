import { Reveal } from "components/reveal";
import Link from "next/link";

async function Followers() {
  let res = await fetch(
    "https://api.github.com/users/thesoorajsingh/followers"
  );
  let json = await res.json();
  let count = json.length;
  return `${count} followers`;
}

export default function WorkPage() {
  return (
    <Reveal>
      <section className="!lowercase">
        <h1 className="font-medium text-3xl mb-8 tracking-tighter font-mono">
          my work
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          {Followers()} on github
        </p>
        <div className="prose prose-neutral dark:prose-invert">
          <p>
            I enjoy building products that make a difference to people's lives.
            I've worked with startups as well as scaled organisations and helped
            them build experiences that are fast, scalable and delightful.
          </p>
          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
          <h2 className="font-medium text-xl mb-1 tracking-tighter font-mono">
            Plum
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Software Engineer 2 / jun 2024 - present
          </p>
          <p>
            helping make insurance, easy, accesible and inclusive for the best
            startups and enterprises in india :)
          </p>
          <h2 className="font-medium text-xl mb-1 tracking-tighter font-mono">
            Thena AI
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Software Engineer 2 / Mar 2024 - July 2024
          </p>
          <p>
            Worked towards a complete rewrite of the product over a single
            sprint.
          </p>
          <ul>
            <li>
              Increased performance and efficiency of newer version of the
              application by 5x.
            </li>
            <li>
              Handled data fetching and updating optimistically using IndexedDB
              and efficient in-memory caching.
            </li>
            <li>
              Rebuilt and re-architected UI components across the board from Ant
              Design to ShadcnUI with Tailwind, along with react-hook-form and
              zod validations.
            </li>
          </ul>
          <h2 className="font-medium text-xl mb-1 tracking-tighter font-mono">
            Tap Invest
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            founding engineer / Sept 2022 - Mar 2024
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
              Mentor fellow engineers and share architectural expertise,
              fostering team growth and knowledge transfer.
            </li>
            <li>
              Collaborate closely with cross-functional teams to define
              technical requirements, implement best practices, and deliver
              high-performance, user-focused solutions.
            </li>
          </ul>
          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
          <h2 className="font-medium text-xl mb-1 tracking-tighter font-mono">
            Nothing, India
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Freelance Consultant // Lead Frontend Engineer / 2022
          </p>
          <p>
            I was the solo frontend engineer for building Nothing India's
            Student Program chapter. I worked with a single backend engineer and
            we shipped a fully functional registration, proof upload and
            leaderboard system in 3 weeks. <br />
            <Link
              href={
                "https://soorajsingh.notion.site/Nothing-Student-Program-09e3e0dbecaf4dbcbd264feca6e652c4?pvs=74"
              }
              target="_blank"
            >
              Read more about this project here
            </Link>
          </p>
          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
          <h2 className="font-medium text-xl mb-1 tracking-tighter font-mono">
            CapxFi
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Software Engineer Intern / 2022
          </p>
          <p>
            Built, documented, tested and deployed 2 functional dApps of Capx
            along with one other engineer that allow users to trade their tokens
            in a secondary market. <br />
            Please{" "}
            <Link href={"mailto:soorajsingh.work@gmail.com"} target="_blank">
              reach out
            </Link>{" "}
            to know more about these projects {":)"}
          </p>
          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
          <h2 className="font-medium text-xl mb-1 tracking-tighter font-mono">
            Sarci, India
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Automation Engineer Intern / 2021
          </p>
          <p>
            Built, Deployed and Documented Azure serverless functions both code
            and no-code using Python and Logic Apps™ to integrate and build
            Microsoft Teams enabled workflow systems for large userbases
          </p>
        </div>
      </section>
    </Reveal>
  );
}

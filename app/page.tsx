import { BuildrLogo } from "@/components/BuildrLogo/BuildrLogo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-zinc-200">
      <div className="p-9 py-9 sm:py-16">
        <Center>
          <header className="rounded-md rounded-t-none  border-t-0 border-zinc-500 flex flex-row items-center gap-5 ">
            <BuildrLogo
              style={{ width: "2rem", height: "auto" }}
              className="text-teal-500 flex-shrink-0"
            />
            <h2
              style={{
                animation: "logoTextIn 1s ease-in-out both",
                animationDelay: "0.1s",
              }}
              className="text-4xl font-extralight tracking-wide flex flex-col"
            >
              buildr labs
              <p
                style={{
                  animation: "logoTextIn 1s ease-in-out both",
                  animationDelay: "1.6s",
                }}
                className="text-sm font-light ml-1 text-zinc-300 opacity-80"
              >
                Building software & brewing ideas since 2023.
              </p>
            </h2>
          </header>
        </Center>
      </div>
      <div className="_main-content px-9 py-5 text-l">
        <Center>
          <h2 className="text-2xl md:text-4xl font-light mb-0 text-zinc-200">
            Who we are
          </h2>
          <div className="text-zinc-200 font-light rounded-md border-zinc-500 my-7 mt-5 max-w-xl md:text-xl flex flex-col gap-5">
            <p className="[text-wrap:balance;]">
              After years of working together as a part of larger
              teams, we have decided to branch off and start our
              own company.
            </p>
            <p className="[text-wrap:balance;]">
              Our team comprises dedicated developers boasting
              extensive experience across various industries.
              What sets us apart is our collective expertise in
              product management, product development, and
              design.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-5 mt-14 justify-between">
            <Person img="/morten.jpg" name="Morten Hauge" />
            <Person
              img="/jahnthomas.jpg"
              name="Jahn Thomas Fidje"
            />
            <Person img="/hakon.jpg" name="Håkon Underbakke" />
          </div>

          {/*           <ul className=" rounded-md border-zinc-500 p-5 justify-between flex flex-wrap gap-5 mt-5 text-zinc-200 text-l font-semibold">
            <li className="bg-zinc-900 p-2 rounded-md">
              Artificial Intelligence
            </li>
            <li className="bg-zinc-900 p-2 rounded-md">
              Backend
            </li>
            <li className="bg-zinc-900 p-2 rounded-md">
              Devops
            </li>
            <li className="bg-zinc-900 p-2 rounded-md">
              Frontend
            </li>
            <li className="bg-zinc-900 p-2 rounded-md">
              UI & UX
            </li>
          </ul> */}
          <div className="mt-9 sm:mt-16" />
          <h2 className="text-2xl md:text-4xl font-light mb-7 text-zinc-200">
            Projects
          </h2>
          <a
            href="https://newbringer.com"
            className="relative group sm:max-w-xs block border-zinc-700 shadow-sm  shadow-teal-100 rounded-md overflow-hidden"
          >
            <Image
              src="/newbringer.jpeg"
              width={300}
              height={300}
              alt="Newbringer"
              className="w-full h-full object-cover group-hover:opacity-80 group-hover:scale-105 group-hover:rotate-2 duration-700 transition-all"
            />
            <span
              style={{
                backdropFilter:
                  "blur(4px) saturate(46%) contrast(109%) brightness(85%)",
              }}
              className="absolute group-hover:opacity-90 text-center text-teal-200 hover:text-teal-400 transition-all duration-700 inset-0 flex tracking-widest items-center justify-center text-xl font-semibold"
            >
              <div>
                NEWBRINGER
                <br />
                <span className="text-xs">IRL GAMING</span>
              </div>
            </span>
          </a>
        </Center>
      </div>
    </main>
  );
}

function Center(props: { children: React.ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto">{props.children}</div>
  );
}

function Person(props: { img: string; name: string }) {
  return (
    <div
      title={props.name}
      className="rounded-md group relative shadow-sm shadow-zinc-700 border  border-zinc-900 flex-1 overflow-hidden aspect-[1/2] max-h-[280px] sm:max-h-screen sm:aspect-[1/0.9] object-cover flex flex-col min-w-[150px]"
    >
      <div className="h-full overflow-hidden flex items-center justify-center">
        <Image
          width={300}
          alt={props.name}
          height={300}
          src={props.img}
          className="select-none object-center object-cover transition-transform pointer-events-none w-full h-full group-hover:translate-y-[-1rem]"
        />
      </div>
      <p className="bg-zinc-900 absolute bottom-0 left-0 right-0 transition-opacity opacity-0 group-hover:opacity-100 text-zinc-200 p-2 text-xs text-center">
        {props.name}
      </p>
    </div>
  );
}

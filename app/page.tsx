import { BuildrLogo } from "@/components/BuildrLogo/BuildrLogo";
import { Button } from "@/components/Button";
import { Chain } from "@/components/Chain";
import { FloatingBitBackground } from "@/components/FloatingBitBackground";
import Image from "next/image";
import { CSSProperties } from "react";

const i18n = {
  no: {
    subTitle:
      "Utvikler programvare og brygger ideer siden 2023.",
    heading: "Klar for å bygge ditt neste prosjekt?",
    p1: "Etter å ha jobbet sammen i flere år som en del av større team, har vi bestemt oss for å starte vårt eget selskap.",
    p2: "Vårt team består av dedikerte utviklere med omfattende erfaring fra ulike bransjer. Det som skiller oss ut er vår kollektive ekspertise innen produktledelse, produktutvikling, kunstig intelligens og design.",
    p3: "La oss hjelpe deg med å realisere ditt neste prosjekt.",
    cto: "Ta kontakt",
  },
  en: {
    subTitle: "Building software & brewing ideas since 2023.",
    heading: "Ready to build your next project?",
    p1: "After years of working together as a part of larger teams, we have decided to branch off and start our own company.",
    p2: "Our team comprises dedicated developers boasting extensive experience across various industries. What sets us apart is our collective expertise in product management, product development, artificial intelligence, and design.",
    p3: "Let us help you realize your next project.",
    cto: "Let's talk",
  },
};

export default function Home(props: {
  searchParams: { l: "no" | "en" };
}) {
  const { l = "en" } = props.searchParams;
  return (
    <>
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
                    animationDelay: "0.2s",
                  }}
                  className="text-sm font-light ml-1 text-zinc-300 opacity-80"
                >
                  {i18n[l].subTitle}
                </p>
              </h2>
            </header>
          </Center>
        </div>
        <div className="_main-content px-9 py-5 text-l ">
          <Center className="relative">
            <Chain />
            <h2 className="text-3xl md:text-5xl font-light mb-9 text-zinc-200">
              {i18n[l].heading}
            </h2>
            <div className="text-zinc-200 font-light rounded-md border-zinc-500 my-9 mt-9 max-w-xl md:text-xl flex flex-col gap-5">
              <p className="[text-wrap:balance;] text-zinc-400">
                {i18n[l].p1}
              </p>
              <p className="[text-wrap:balance;] text-zinc-400">
                {i18n[l].p2}
              </p>

              <p className="[text-wrap:balance;] text-zinc-400">
                {i18n[l].p3}
              </p>
            </div>
            <div className="flex gap-3 mb-24">
              <Button
                as="a"
                href="mailto:hakon@ryfylke.dev"
                animate
              >
                {i18n[l].cto}
              </Button>
              <Button
                as="a"
                href={"?l=" + (l === "no" ? "en" : "no")}
                className="hover:bg-blue-900"
                innerClassName="hover:bg-blue-950"
              >
                <Image
                  src={`/${l === "no" ? "en" : "no"}.png`}
                  width={32}
                  height={32}
                  style={{
                    width: "1rem",
                    height: "1rem",
                    display: "block",
                    margin: "0",
                  }}
                  alt={`Flag of ${l === "no" ? "UK" : "Norway"}`}
                />
              </Button>
            </div>
            <div className="flex  mx-auto flex-wrap flex-row gap-5 justify-center">
              <Person
                i={0}
                img="/morten.jpg"
                name="Morten Hauge"
                title="AI & Backend"
              />
              <Person
                i={1}
                img="/jahnthomas.jpg"
                name="Jahn Thomas Fidje"
                title="AI & Backend"
              />
              <Person
                i={2}
                img="/hakon.jpeg"
                name="Håkon Underbakke"
                title="Frontend"
              />
              <Person
                i={3}
                img="/christian.jpg"
                name="Christian Kråkevik"
                title="Backend"
              />
            </div>
            <div className="mt-9 sm:mt-16" />
          </Center>
        </div>
      </main>
      <FloatingBitBackground />
    </>
  );
}

function Center(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={"max-w-4xl mx-auto " + props.className}>
      {props.children}
    </div>
  );
}

function Person(props: {
  img: string;
  name: string;
  title: string;
  i: number;
}) {
  return (
    <div
      style={
        {
          "--i": props.i,
        } as CSSProperties
      }
      className="person rounded-full aspect-square group relative shadow-sm shadow-zinc-700 border  border-zinc-900 flex-1 overflow-hidden  max-h-[200px] sm:max-h-screen  object-cover flex flex-col max-w-[200px] min-w-[150px]"
    >
      <div className="h-full bg-zinc-900 overflow-hidden flex items-center justify-center">
        <Image
          width={300}
          alt={props.name}
          height={300}
          src={props.img}
          className="select-none object-cover transition-transform duration-1000 pointer-events-none w-full h-full  group-hover:-rotate-2 group-hover:scale-110 grayscale"
        />
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-orange-700 opacity-20" />
      <p className="bg-[rgba(0,0,0,0.8)] absolute font-semibold bottom-0 left-0 right-0 transition-all duration-1000 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-20%] translate-y-[100%] text-zinc-200 p-2 text-sm text-center">
        {props.name}
        <br />
        <span className="text-teal-300 text-xs font-normal">
          {props.title}
        </span>
      </p>
    </div>
  );
}

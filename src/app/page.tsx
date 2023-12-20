import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-xl md:text-2xl text-zinc-700 font-semibold">
        Welcome to dzakirozaan.com !
      </h1>
      <Image
        className="mt-2"
        src="/development.svg"
        alt="Under Construction"
        width={250}
        height={100}
        priority
      />
      <h1 className="text-lg md:text:xl text-zinc-700 font-bold mt-2">Ups, Sorry...</h1>
      <p className="text-sm md:tex-base text-zinc-500 text-center">
        This website is still under development, please come back later. Thank
        you !
      </p>
      <a
        className="text-blue-600 underline"
        href="https://wa.me/6283154641298"
        target="_blank"
      >
        button
      </a>
    </main>
  )
}

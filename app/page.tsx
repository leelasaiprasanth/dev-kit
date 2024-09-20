import ConnectLinks from "@/app/_utils/ConnectionLinks";
import DevKit from "@/public/image.png";
import DevKitLogo from "@/public/logo/favicon.ico";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const lastEditedDate = format(new Date(), "MMMM dd, yyyy");

  return (
    <>
      <main className="relative isolate h-screen w-screen overflow-hidden">
        {/* Background Pattern */}
        <svg
          className="absolute inset-0 -z-10 w-full h-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="pattern"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>

        {/* Blurred Gradient */}
        {/* <div
          className="absolute inset-0 -z-20 flex justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="w-[69.25rem] bg-gradient-to-r from-[#5e5e5e14] to-[#ffffff4f] opacity-20"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div> */}

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-6 pt-10 lg:flex lg:px-4 lg:pt-20 space-y-6">
          <div className="flex flex-col items-start space-y-6 p-4 max-w-8xl mx-auto">
            <Image src={DevKitLogo} width={40} height={40} alt="Icon" />
            <h1 className="text-5xl font-bold text-white">DevKit</h1>
            <h3 className="text-3xl font-bold text-white">
              Essential tools for Developers.
              <p className="text-lg text-gray-400 mt-2 max-w-lg">
                A toolkit for miscellaneous tools at a glance.
              </p>
            </h3>
            <p className="text-base text-gray-500 mt-2 max-w-lg">
              Get access to 5+ tools including QR Code generator, JSON
              validator, time converter, regex matcher, YouTube URL checker, and
              more.
            </p>
            <Link
              href="/tools"
              className="rounded-md bg-purple-700 px-4 py-2 text-lg font-semibold text-white shadow-sm hover:bg-purple-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-900"
            >
              DevKit 🚀
            </Link>
          </div>

          <div className="relative mx-auto mt-16 flex max-w-1xl shadow-lg">
            <div className="relative flex-none max-w-2xl">
              <Image
                src={DevKit}
                alt="App screenshot"
                width={1280}
                height={720}
                className="hidden lg:block w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-50" />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        aria-labelledby="footer-heading"
        className="absolute bottom-0 w-full text-white"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-4 lg:px-8">
          <div className="flex flex-row items-center justify-between border-t border-white/10 pt-8">
            <p className="text-xs leading-5 text-gray-400">
              📅 {lastEditedDate}
            </p>
            <div className="flex space-x-4">
              {ConnectLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

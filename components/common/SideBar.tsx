"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathName = usePathname();

  return (
    <header className="py-[20px] fixed top-0 w-[262px] h-screen justify-between flex flex-col shadow-[1px_0px_5px_0px_#00000024] z-[20]">
      <section className="flex flex-col justify-between h-[380px]">
        <h1 className="text-center text-2xl font-semibold">Digi Dreams</h1>

        <nav className="w-full px-[30px]">
          <ul className="gap-[10px] flex flex-col w-full">
            <li className="w-full">
              <Link
                className={`py-[10px] font-semibold justify-center items-center rounded-md flex w-full ${
                  pathName === "/"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-300"
                } active:scale-[0.96] transition-[0.3s]`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="w-full">
              <Link
                className={`py-[10px] font-semibold justify-center items-center rounded-md flex w-full ${
                  pathName === "/internship"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-300"
                } active:scale-[0.96] transition-[0.3s]`}
                href="/internship"
              >
                Internship
              </Link>
            </li>
            <li className="w-full">
              <Link
                className={`py-[10px] font-semibold justify-center items-center rounded-md flex w-full ${
                  pathName === "/blog"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-300"
                } active:scale-[0.96] transition-[0.3s]`}
                href="/blog"
              >
                Blog
              </Link>
            </li>
            <li className="w-full">
              <Link
                className={`py-[10px] font-semibold justify-center items-center rounded-md flex w-full ${
                  pathName === "/testimonial"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-300"
                } active:scale-[0.96] transition-[0.3s]`}
                href="/testimonial"
              >
                Testimonial
              </Link>
            </li>
            <li className="w-full">
              <Link
                className={`py-[10px] font-semibold justify-center items-center rounded-md flex w-full ${
                  pathName === "/certificate"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-300"
                } active:scale-[0.96] transition-[0.3s]`}
                href="/certificate"
              >
                Certificate
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <h1 className="text-xl text-center font-semibold border-t-[1px] border-solid border-black pt-[15px]">
        Dashboard V1
      </h1>
    </header>
  );
}

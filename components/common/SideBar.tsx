"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathName = usePathname();

  return (
    <header className="py-[20px] px-[10px] bg-black w-[220px] h-screen justify-between flex flex-col">
      <section className="flex flex-col justify-between h-[380px]">
        <h1 className="text-center text-xl text-white font-semibold">
          Digi Dreams Dashboard
        </h1>

        <nav className="w-full">
          <ul className="gap-[10px] flex flex-col w-full">
            <li className="w-full">
              <Link
                className={`font-semibold py-[10px] pl-[20px] rounded-md flex text-white w-full ${
                  pathName === "/" ? "bg-blue-500" : "hover:bg-gray-600"
                } active:scale-[0.96] transition-[0.3s]`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="w-full">
              <Link
                className={`font-semibold py-[10px] pl-[20px] rounded-md flex text-white w-full ${
                  pathName === "/internship"
                    ? "bg-blue-500"
                    : "hover:bg-gray-600"
                } active:scale-[0.96] transition-[0.3s]`}
                href="/internship"
              >
                Internship
              </Link>
            </li>
            <li className="w-full">
              <Link
                className={`font-semibold py-[10px] pl-[20px] rounded-md flex text-white w-full ${
                  pathName === "/blog" ? "bg-blue-500" : "hover:bg-gray-600"
                } active:scale-[0.96] transition-[0.3s]`}
                href="/blog"
              >
                Blog
              </Link>
            </li>
            <li className="w-full">
              <Link
                className={`font-semibold py-[10px] pl-[20px] rounded-md flex text-white w-full ${
                  pathName === "/testimonial"
                    ? "bg-blue-500"
                    : "hover:bg-gray-600"
                } active:scale-[0.96] transition-[0.3s]`}
                href="/testimonial"
              >
                Testimonial
              </Link>
            </li>
            <li className="w-full">
              <Link
                className={`font-semibold py-[10px] pl-[20px] rounded-md flex text-white w-full ${
                  pathName === "/certificate"
                    ? "bg-blue-500"
                    : "hover:bg-gray-600"
                } active:scale-[0.96] transition-[0.3s]`}
                href="/certificate"
              >
                Certificate
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <h1 className="text-xl text-center text-white font-semibold">
        Dashboard V1
      </h1>
    </header>
  );
}

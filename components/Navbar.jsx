"use client";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import ThemeLink from "./ThemeLink";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Loading from "@/app/loading";
import { signOut, useSession } from "next-auth/react";
export default function Navbar() {
  const { data: session, status } = useSession();
  // console.log(session);
  const [show, setShow] = useState(false);
  if (status === "loading") {
    return <Loading />;
  }
  function getInitials(fullName) {
    const words = fullName.split(" ");
    let initials = "";
    for (let i = 0; i < words.length; i++) {
      initials += words[i][0];
    }
    initials = initials.toUpperCase();
    return initials;
  }

  const initials = getInitials(session?.user?.name ?? "John Doe");

  return (
    <>
      <header className="bg-violet-700 fixed top-0 right-0 w-full left-0 h-16 flex items-center justify-between lg:px-12 px-8 text-slate-50 z-50">
        <Link className="font-bold text-2xl lg:text-4xl" href="/">
          Invoicer
        </Link>

        <nav className="hidden lg:flex items-center gap-3">
          <Link href="/">Features</Link>
          <Link href="/">Pricing</Link>
          {status === "authenticated" && <a href="/invoice">View Invoices</a>}
        </nav>
        {status === "authenticated" ? (
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center space-x-4">
              <div className=" relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full ">
                <span className="font-medium text-gray-600 ">{initials}</span>
              </div>

              <div className=" font-medium ">
                <div>{session.user.name}</div>
                <div className="text-sm text-slate-50 ">{session.user.email}</div>
              </div>
            </div>
            <button
              onClick={() => signOut()}
              type="button"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg  px-8 py-2.5 text-center "
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/login">Login</Link>
            <ThemeLink
              className="bg-rose-600 hover:bg-rose-700 focus:ring-rose-300"
              name="Register"
              toLink="/register"
            />
          </div>
        )}
        {/* Humberg menu */}
        <button onClick={() => setShow(true)} className="lg:hidden">
          <BiMenu className="text-3xl" />
        </button>
      </header>
      <div
        className={
          show
            ? "lg:hidden text-center fixed w-52 bg-slate-800 bg-opacity-90 h-screen right-0  z-50 top-0 p-4 text-slate-50"
            : "hidden lg:hidden fixed w-52 bg-slate-800 bg-opacity-90 h-screen right-0  z-50 top-0 p-4 text-slate-50"
        }
      >
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-bold">Invoicer</h2>
          <button onClick={() => setShow(false)}>
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>
        <nav className="flex flex-col  gap-3 mb-10">
          <Link href="/">Features</Link>
          <Link href="/">Pricing</Link>
          {status === "authenticated" && <a href="/invoice">View Invoices</a>}
        </nav>
        {status === "authenticated" ? (
          <div className="lg:hidden flex justify-center items-center gap-4">
            {/* <div className="flex items-center space-x-4">
              <div className=" relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full ">
                <span className="font-medium text-gray-600 ">{initials}</span>
              </div>

              <div className=" font-medium ">
                <div>{session.user.name}</div>
                <div className="text-lg text-slate-50 ">{session.user.email}</div>
              </div>
            </div> */}
            <button
              onClick={() => signOut()}
              type="button"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-lg px-8 py-2.5 text-center mr-2 mb-2"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="lg:hidden flex flex-col text-left items-center gap-4">
            <Link href="/login">Login</Link>
            <ThemeLink
              className="bg-rose-600 hover:bg-rose-700 focus:ring-rose-300"
              name="Register"
              toLink="/register"
            />
          </div>
        )}
      </div>
    </>
  );
}

import React from "react";
import Link from "next/link";
import ThemeLink from "./ThemeLink";

const Navbar = () => {
    return (
        <header className="bg-violet-600 fixed top-0 right-0 left-0 w-full h-14 flex items-center justify-between py-4 px-16 text-slate-50">
            <Link className="font-bold text-2xl md:text-4xl" href="/">
                Invoicer
            </Link>

            <nav className="flex items-center gap-3">
                <Link href="/">Features</Link>
                <Link href="/">Pricing</Link>
                <Link href="/">Free Tools</Link>
            </nav>
            <div className="flex items-center gap-4">
                <Link href="/login">Login</Link>
                <ThemeLink className="bg-red-500 hover:bg-red-600 focus:ring-pink-300" title="Register" href="/register" />
            </div>
        </header>
    )
};

export default Navbar;

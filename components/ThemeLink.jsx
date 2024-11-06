import React from "react";
import Link from "next/link";

const ThemeLink = ({ className, href, title }) => {
    return (
        <Link href={href} className={`text-white focus:ring-4 focus:outline-none dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-8 py-2.5 text-center ${className}`}>
            {title}
        </Link>
    )
};

export default ThemeLink;

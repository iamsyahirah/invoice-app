import React from "react";
import ThemeLink from "./ThemeLink";
import Image from "next/image";
import invoiceImage from "../public/images/invoice.webp";

const Hero = () => {
    return (
        <div className="mt-16 bg-violet-600 grid grid-cols-1 md:grid-cols-2 py-8 md:py-16 px-4 md:px-16 text-slate-50 items-center gap-6">
            <div className="flex flex-col space-y-8 items-start">
                <h2 className="text-3xl md:text-5xl font-bold">Free Invoice Generator - Invoice Maker</h2>
                <p className="text-base md:text-xl">Create, Manage and Track Recurring Invoices<br></br>Download as PDF, Email and Print Invoices</p>
                <ThemeLink className="bg-red-500 hover:bg-red-600 focus:ring-pink-300" title="Create Your First Invoice" href="/invoice/new" />
            </div>
            <div className="">
                <Image src={invoiceImage} alt="invoice img" />
            </div>

        </div>
    )
};

export default Hero;

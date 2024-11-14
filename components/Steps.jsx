import React from "react";

const Steps = () => {
    return (
        <div className="py-8 md:py-16 px-4 md:px-16 bg-slate-50 mx-auto flex items-center justify-center">
            <div>
                <h2 className="text-2xl md:text-4xl font-semibold mb-6">Create Your Invoice in Less that 2 Minutes</h2>
                <div className="flex">
                    <div className="flex items-center gap-3">
                        <p className="border-2 rounded-full p-2 h-8 w-8 flex items-center justify-center border-slate-400">1</p>
                        <p>Invoice Details</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="border-2 rounded-full p-2 h-8 w-8 flex items-center justify-center border-slate-400">2</p>
                        <p>Your Bank Details (Optional)</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="border-2 rounded-full p-2 h-8 w-8 flex items-center justify-center border-slate-400">3</p>
                        <p>Select Design & Colors (Download or Email Invoice)</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Steps;


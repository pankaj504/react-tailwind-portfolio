import React from "react";

export const Logo = () => {
    return (
        <div className="fixed top-6 left-6 z-50">
            <div className="relative group cursor-pointer">
                {/* Glass background pill */}
                <div className="absolute -inset-2 bg-background/80 backdrop-blur-md rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Text Container */}
                <div className="relative flex items-center gap-1 font-black text-2xl tracking-tighter">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-white hover:to-violet-500 transition-all duration-300">
                        PP
                    </span>
                    {/* Decorative Dot */}
                    <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 animate-pulse" />
                </div>
            </div>
        </div>
    );
};

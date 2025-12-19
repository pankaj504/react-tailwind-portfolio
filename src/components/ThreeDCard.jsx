import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const ThreeDCard = ({ children, className, containerClassName }) => {
    const ref = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        setRotation({ x: xPct, y: yPct });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
            }}
            animate={{
                rotateX: rotation.y * -20,
                rotateY: rotation.x * 20,
            }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
            className={cn(
                "relative transition-all duration-200 ease-linear",
                containerClassName
            )}
        >
            {/* Background/Glass layer */}
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-0 glass rounded-xl pointer-events-none"
            />
            <div
                style={{
                    transform: "translateZ(75px)",
                }}
                className={cn("relative h-full w-full z-10", className)}
            >
                {children}
            </div>
        </motion.div>
    );
};

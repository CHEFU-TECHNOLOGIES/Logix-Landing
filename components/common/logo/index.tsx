import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
    className?: string;
    imageClassName?: string;
    textClassName?: string;
}

export default function Logo({ className, imageClassName, textClassName }: LogoProps) {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            <Image
                src="/logo.png"
                alt="Logix"
                width={52}
                height={52}
                className={cn("w-[52px] h-[52px] object-contain", imageClassName)}
                priority // Add priority if the logo is above-the-fold in the header
            />
            <div className="flex flex-col justify-center">
                <span
                    className={cn(
                        "text-[26px] font-bold tracking-tighter text-slate-100 font-satoshi leading-none",
                        textClassName
                    )}
                >
                    Logix
                </span>
            </div>
        </div>
    );
}
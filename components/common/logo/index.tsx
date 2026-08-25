import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
    className?: string;
    imageClassName?: string;
    textClassName?: string;
}

export default function Logo({ className, imageClassName, textClassName }: LogoProps) {
    return (
        <div className={cn("inline-flex items-center gap-1.5", className)}>
            <Image
                src="/logo.png"
                alt="Logix"
                width={40}
                height={40}
                className={cn("w-9 h-9 object-contain scale-110 shrink-0", imageClassName)}
                priority
            />
            <span
                className={cn(
                    "text-[32px] font-bold tracking-tight text-slate-100 font-satoshi leading-none select-none",
                    textClassName
                )}
            >
                Logix
            </span>
        </div>
    );
}
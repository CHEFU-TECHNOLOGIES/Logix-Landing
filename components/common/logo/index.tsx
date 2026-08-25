import { cn } from "@/lib/utils"; // Assuming 'cn' is a utility for merging class names
import Image from "next/image";

export default function Logo({ className, textClassName }: { className?: string; textClassName?: string }) {
    return (
        <>
            <Image
                src="/logo.png"
                alt="Company Logo"
                width={42}
                height={42}
                className={cn("w-12 h-12", className)}
            />
            <div className="flex flex-col justify-center">
                <span className={cn("text-[26px] tracking-tighter text-slate-100 font-satoshi", textClassName)}>
                    Logix
                </span>
            </div>
        </>
    );
}





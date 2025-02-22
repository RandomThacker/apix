import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <nav className="absolute container mx-auto px-4 py-6 flex items-center justify-between w-full z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
            <div className="flex items-center gap-2">
                <Image src="/placeholder.svg?height=32&width=32" alt="Logo" width={32} height={32} className="rounded-lg" />
                <span className="text-white font-semibold">Fitela</span>
            </div>
            <div className="flex items-center gap-4">
                <Button variant="ghost" className="text-gray-400 hover:text-white">
                    Docs
                </Button>
                <Button variant="ghost" className="text-gray-400 hover:text-white">
                    Blog
                </Button>
                <Button className="bg-gradient-to-r from-[#db2c21] to-[#ff6a00] text-black font-semibold hover:brightness-110 transition-all duration-300">
                    Try Now
                </Button>

            </div>
        </nav>
    );
}

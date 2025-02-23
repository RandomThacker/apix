import { Pixelify_Sans } from "next/font/google";
import Link from "next/link";

const pixelifySans = Pixelify_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

export default function Footer() {
    return (
        <>
            {/* <div className="h-24 w-full bg-transparent z-[40]"></div> */}
            <div className="w-full bg-[#0d0c0c]">
                <footer className="container mx-auto flex flex-col justify-between items-center rounded-t-2xl shadow-lg bg-black text-white font-semibold hover:brightness-110 transition-all duration-300 border border-gray-800">
                    {/* Logo Section */}
                    <div className="container mx-auto px-6 py-4 flex flex-row justify-between items-center">
                        <div className="flex items-center gap-3">
                            <p
                                className={`text-4xl mb-4 sm:text-3xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-[#db2c21] to-[#ff6a00] ${pixelifySans.className}`}

                            >
                                Api-X
                            </p>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex gap-6 text-sm mt-4 md:mt-0">
                            <Link href="#" className="hover:text-white transition duration-300">Terms</Link>
                            <Link href="#" className="hover:text-white transition duration-300">Privacy</Link>
                            <Link href="#" className="hover:text-white transition duration-300">Contact</Link>
                        </nav>
                    </div>
                    <div className="border-t border-gray-800 w-full text-center py-4">
                        © 2024 Team Apix. All rights reserved. | Built with ❤️ by Shubham, Shivam, Nikhit, and Aryan.
                    </div>
                </footer>
            </div>
        </>
    );
}

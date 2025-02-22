import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-12 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image src="/placeholder.svg?height=32&width=32" alt="Logo" width={32} height={32} className="rounded-lg" />
        <span className="text-white font-semibold">Fitela</span>
      </div>
      <div className="flex gap-8 text-gray-400">
        <Link href="#" className="hover:text-white">Terms</Link>
        <Link href="#" className="hover:text-white">Privacy</Link>
        <Link href="#" className="hover:text-white">Contact</Link>
      </div>
    </footer>
  );
}

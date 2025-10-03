"use client"
import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="w-full flex items-center gap-5 p-4 bg-white border-b border-gray-300">
            <Link href="/" className="font-semibold">Picture Gallery</Link>
            <ul className="flex items-center text-center gap-3">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/images">Pictures</Link></li>
            </ul>
        </nav>
    )
}
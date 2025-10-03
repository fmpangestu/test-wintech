import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto  items-center justify-between p-24 flex flex-col gap-2 mt-20">
      <div className="text-center">
      <h1 className="font-bold text-5xl">Wellcome to Picture Gallery</h1>
      <p className="text-gray-500">Discover and beautiful images from arround the world. Browse our curated collection of stunning photographs.</p>
      </div>
      <div className="flex gap-4 mt-4">
        <Link href="/images" className="bg-black text-white px-4 py-2 rounded-md">View Gallery</Link>
        <Link href="/#" className="bg-gray-300 text-black px-4 py-2 rounded-md">Learn More</Link>
      </div>
    </main>
  );
}

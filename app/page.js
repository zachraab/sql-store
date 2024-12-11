import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
		<Link href="/users" className="bg-red-500">Users</Link>
		<Link href="/products" className="bg-blue-500">Products</Link>
    </main>
  );
}

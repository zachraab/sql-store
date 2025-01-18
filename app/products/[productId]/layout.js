import Link from 'next/link';

export default function ProductDetailsLayout({children}) {
	return (
		<>
			{children}
			<div className="text-center p-5 bg-red-300">
				<Link href='/products' className='hover:underline'>All Products</Link>
			</div>
		</>
	)
}
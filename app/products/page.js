import Link from "next/link";

export default function ProductList() {
	let productArray = ["apple", "banana", "orange"]
	
	return (
		<div className="m-16">
			<h1 className="text-xl font-bold">Product List:</h1>
			<div className="flex flex-col">
			{productArray.map((product, index) => (
				<Link className="hover:underline max-w-max" href={`/products/${index + 1}`}>{product}</Link>
			))}
			</div>
		</div>
	)
}
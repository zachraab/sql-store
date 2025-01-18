export const generateMetadata = async ({ params }) => {
	return {
		title: `Product ${(await params).productId}`
	}
}
export default async function ProductDetails({ params }) {
	const { productId } = params;

	const res = await fetch(`${process.env.PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products/${productId}`)

	if (!res.ok) {
		return <div>Product not found</div>;
	}

	const product = await res.json();
console.log(product)
	return (
		<div className="text-center">
			<h1>{product[0].product_name}</h1>
			<h2>Price: ${product[0].price}.00</h2>
			<h3>Remaining items in stock: {product[0].stock}</h3>
		</div>
	)
}
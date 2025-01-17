export const generateMetadata = async ({ params }) => {
	return {
		title: `Product ${(await params).productId}`
	}
}
export default async function ProductDetails({ params }) {
	return (
		<>
			<h1>Details about product {(await params).productId}</h1>
		</>
	)
}
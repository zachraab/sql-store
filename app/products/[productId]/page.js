export const generateMetadata = ({ params }) => {
	return {
		title: `Product ${params.productId}`
	}
}
export default function ProductDetails({ params }) {
	return <h1>Details about product {params.productId}</h1>
}
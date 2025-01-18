'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ProductsPage() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
  
	useEffect(() => {
		// Fetch the products from the API route
		async function fetchProducts() {
			try {
				const response = await fetch('/api/products');
					if (!response.ok) {
					throw new Error('Failed to fetch products');
				}
				const data = await response.json();
				setProducts(data);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching products:', error);
				setLoading(false);
			}
		}
	
		fetchProducts();
	}, []);
	
	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className='text-center'>
			<h1>Products List</h1>
			<ul>
				{products.map((product) => (
					<li key={product.product_id}>
						<Link className="hover:underline" href={`/products/${product.product_id}`}>{product.product_name} - Stock: {product.stock} - Price: {product.price}</Link>
					</li>
				))}
			</ul>
			<Link href='/api/products' className='bg-green-300 hover:underline'>Product API</Link>
		</div>
	);
}
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function UsersPage() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
  
	useEffect(() => {
		// Fetch the users from the API route
		async function fetchUsers() {
			try {
				const response = await fetch('/api/users');
				if (!response.ok) {
					throw new Error('Failed to fetch users');
				}
				const data = await response.json();
				setUsers(data);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching users:', error);
				setLoading(false);
			}
		}
	
		fetchUsers();
	}, []);
	
	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className='text-center'>
			<h1>Users List</h1>
			<ul>
				{users.map((user) => (
					<li key={user.user_id}>
						{user.first_name} {user.last_name} - {user.email}
					</li>
				))}
			</ul>
			<Link href='/api/users' className='bg-green-300 hover:underline'>User API</Link>
		</div>
	);
}
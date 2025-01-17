export default async function UsersPage() {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await response.json();
	return (
			<>
				<h1>UsersPage</h1>
				{users.map((user, index) => (
					<div key={index}>
						<p>{user.name}</p>
						<h3>{user.email}</h3>
					</div>
				))}
			</>
	);
}
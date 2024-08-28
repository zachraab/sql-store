import mysql from "mysql2/promise";

export async function GET() {
	return new Response("Zachs response")
}

export async function POST() {
	const body = await req.json()
	console.log(body)

	return new Response(JSON.stringify({ hello: 'world' }))
}
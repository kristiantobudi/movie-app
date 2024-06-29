export async function GET() {
    const res = await fetch('https://fakestoreapi.com/products', {
        headers: {
            'Content-Type': 'application/json',
        }
    })

    if(!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = await res.json()

    return Response.json({ data })
}
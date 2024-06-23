export async function GET() {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
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
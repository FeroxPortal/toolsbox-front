import { PUBLIC_API_URL } from '$env/static/public'

export async function load(tool){
    const res = await fetch(PUBLIC_API_URL+"/tools/"+tool, {
        method: "GET"
    })
    const response = await res.json()
    return response
}
import { PUBLIC_API_URL } from '$env/static/public'

export async function load(){
    const res = await fetch(PUBLIC_API_URL+"/tools", {
        method: "GET"
    })
    const response = await res.json()
    return response
}
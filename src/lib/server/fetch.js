import { PUBLIC_API_URL } from '$env/static/public'

export async function load(path){
    const res = await fetch(PUBLIC_API_URL+"/"+path, {
        method: "GET"
    })
    const response = await res.json()
    return response
}
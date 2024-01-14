import { API_URL } from '$env/static/private'

export async function load(tool){
    const res = await fetch(API_URL+"/tools/"+tool, {
        method: "GET"
    })
    const response = await res.json()
    return response
}
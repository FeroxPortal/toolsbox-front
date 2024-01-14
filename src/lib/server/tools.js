import { API_URL } from '$env/static/private'

export async function load(){
    const res = await fetch(API_URL+"/tools ", {
        method: "GET"
    })
    const response = await res.json()
    return response
}
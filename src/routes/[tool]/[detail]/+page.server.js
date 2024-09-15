import * as fetch from '$lib/server/fetch'
import { error } from '@sveltejs/kit'

export async function load({params}){
    console.log(params)
    let data = await fetch.load(params.tool+"/"+params.detail)
    if(data.status !== 200 && data.status !== 206){
        error(data.status, {
            message: data.data
        })
    }
    return data.data
}
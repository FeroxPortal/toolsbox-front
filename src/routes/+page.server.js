import * as tools from '$lib/server/tools'
import { error } from '@sveltejs/kit'

export async function load(){
    let data = await tools.load()
    if(data.status !== 200){
        error(data.status, {
            message: data.data
        })
    }
    return {
        tools: data.data
    }
}
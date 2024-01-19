import * as tool from '$lib/server/tool'
import { error } from '@sveltejs/kit'

export async function load({params}){
    let data = await tool.load(params.tool)
    if(data.status !== 200){
        error(data.status, {
            message: data.data
        })
    }
    return data.data
}


export const actions = {
	default: async (event) => {
        const formElement = event.currentTarget;

        const data = await event.request.formData();
        console.log("Event",formElement)
        console.log("Request", data)
	}
};
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { PUBLIC_API_URL } from '$env/static/public'

export async function load(data){
  const form = data.currentTarget
  try{
    const apiURL = form.getAttribute("data-path")
    const target = document.getElementById(form.getAttribute("data-target"))
    const response = await fetch(PUBLIC_API_URL+"/"+apiURL, {
      method: "POST",
      body: new FormData(form),
      redirect: 'follow',
    })
    const result = await response.json()
    if(!response.ok) {
      toast(result.data)
      return
    }
    target.value = result.data

  }catch(error) {
    toast(error.message)
    console.log("Erreur FETCH", error)
  }
}

function toast(message, duration=3000){
  Toastify({
    text: message,
    duration: duration,
    className: "bg-danger",
    close: true,
    gravity: "bottom",
    position: "left",
    stopOnFocus: true,
  }).showToast();
}
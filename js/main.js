import { SearchPatter } from "./SearchPatter.js";

const btn = document.getElementById('btn')

btn.addEventListener('click', (e) => {
    
    const txt   = document.getElementById('txt').value
    const path  = document.getElementById('path').value

    const kpm = new SearchPatter(txt, path)
    kpm.search()
    console.log(kpm.totalSearch())

    e.preventDefault()
})

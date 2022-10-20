import { SearchPatter } from "./SearchPatter.js";

const btn = document.getElementById('btn')
const file  = document.getElementById('file-input')

function mostrarContenido(contenido) {
        let elemento        = document.getElementById('root');
        elemento.innerHTML  = contenido;
      }

const leerArchivo = (e) => {
    let archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    let lector = new FileReader();
    lector.onload = function(e) {
        let contenido = e.target.result;
        console.log(contenido.length)
        mostrarContenido(contenido);
    };
    lector.readAsText(archivo);
} 

file.addEventListener('change', leerArchivo, false)

btn.addEventListener('click', (e) => {
    
    const txt   = document.getElementById('txt').value
    const path  = document.getElementById('path').value
    
    

    const kpm = new SearchPatter(txt, path)
    // function leerArchivo(e) {
    //     var archivo = e.target.files[0];
    //     if (!archivo) {
    //       return;
    //     }
    //     var lector = new FileReader();
    //     lector.onload = function(e) {
    //       var contenido = e.target.result;
    //       mostrarContenido(contenido);
    //     };
    //     lector.readAsText(archivo);
    //   }
      
    //   function mostrarContenido(contenido) {
    //     var elemento = document.getElementById('contenido-archivo');
    //     elemento.innerHTML = contenido;
    //   }
    kpm.search()
    console.log(kpm.totalSearch())

    e.preventDefault()
})

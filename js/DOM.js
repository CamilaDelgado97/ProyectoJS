const menu = [ 
    {nombre: 'Café Macchiato', importe: 350},
    {nombre: 'Café Latte', importe: 340},
    {nombre: 'Café Mocha', importe: 380},
    {nombre: 'Expreso simple', importe: 300},
    {nombre: 'Café con leche', importe: 320},
    {nombre: 'Lágrima', importe: 310}
]

const lista = document.getElementById("lista")

function crearLista() {
    menu.forEach(producto => {
        const li = document.createElement("li")
              li.innerText = producto
              lista.append(li)
    })
}


function cambiarEncabezado() {
    titulo.innerText = "DOM con JavaScript"
}
cambiarEncabezado()
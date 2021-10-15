const { ipcRenderer } = require('electron');



const product_form = document.querySelector('#product_form');

product_form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.querySelector('#name');
    const price = document.querySelector('#price');
    const description = document.querySelector('#description');
    

    console.log(name.value, price.value, description.value);
    const newProduct = {
        name: name.value,
        price: price.value,
        description:description.value
    }

    //ejemplo de envio sincrono
    ipcRenderer.send('pruebaChanel', newProduct);
    
    ipcRenderer.on('prueba2',(event, arg)=>{
        console.log(arg);
    })

    //ejemplo de envio asincrono
    let msj = ipcRenderer.sendSync('msjsync', newProduct);
    console.log(msj);

    ipcRenderer.send('insertar', newProduct);

})
// In main process.
//proceso principal tiene acceso a todo el sistema operativo
//base de datos etc
const { BrowserWindow } = require("electron"); //pintar una ventana por pantalla
const { ipcMain } = require('electron');
const { getConexion } = require('./datatabase');

//ejemplo sincrono
ipcMain.on('pruebaChanel',(event, args)=>{
    console.log(args);
    event.sender.send('prueba2', 'si fue recopilado');
})

ipcMain.on('msjsync',(event, arg)=>{
    console.log(arg);
    arg.recibido = 'si señor';
    event.returnValue = arg;
})

ipcMain.on('insertar',(event,arg)=>{
    createProduct(arg);
})

async function createProduct(producto) {
    const con = await getConexion();
    producto.price= parseFloat(producto.price);
    let valor = await con.query('INSERT INTO product SET ?', producto);
    console.log(valor);
}

let window

function createWindow() {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            contextIsolation: false,
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            enableRemoteModule: true},
    })
    window.loadFile('src/ui/index.html');
}

module.exports = {
    createWindow
}

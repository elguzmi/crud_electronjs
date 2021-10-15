//este archivo arranca todo
const {createWindow } = require('./main');
const { app } = require('electron'); 

require('./datatabase');
require('electron-reload')(__dirname);

/* app.allowRendererProcessReuse = false; */

app.whenReady().then(createWindow);
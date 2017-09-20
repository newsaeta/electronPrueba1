"use strict"

import { app , BrowserWindow } from 'electron'
import devtools from './devtools' // modulo que hemos creado

// comprobamos si la variable node_env es igual
if(process.env.NODE_EVN === 'development'){
    devtools();
}

app.on('ready', () =>{
    // Creamos un objeto de ventana
    let win = new BrowserWindow({
        width: 900,
        height:600,
        title: "Hola mundo",
        center: false,
        resizable: true,
        show: false
    });
    // Esto es para cargar url de forma remota, no abre ventana hasta que no este cargada la url
    // para que no se note que es remoto
    win.once('ready-to-show', () => {
        win.show();
    })

    

    // Al cerrar la ventan, vaciamos la variable y cerramos la aplicación.
    win.on('closed', () => {
        win = null;
        app.quit();        
    });

    // carga la url
    //win.loadURL('http://devdocs.io/');
    win.loadURL(`file://${__dirname}/render/index.html`);


});



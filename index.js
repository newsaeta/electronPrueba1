"use strict"

const { app , BrowserWindow } = require('electron');

app.on('ready', () =>{
    // Creamos un objeto de ventana
    let win = new BrowserWindow();

    win.on('closed', () => {
        win = null;
        app.quit();        
    });
});



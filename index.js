'use strict';

const {app, BrowserWindow, ipcMain} = require('electron');
let mainWindow = null; // keep reference to prevent GC.

/**
 * Create Render window
 */
function createWindow() {
    const url = `file://${__dirname}/index.html`;
    mainWindow = new BrowserWindow({ show: true });
    !process.env.production && mainWindow.webContents.openDevTools(); // only show development.
    mainWindow.loadURL(url);
}

app.on('ready', createWindow);

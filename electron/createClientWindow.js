const { BrowserWindow } = require('electron');
const path = require('path');
const uuidv4 = require('uuid/v4');

const openDevTool = require('./helpers/devtools');

let clientWindow = null;
const RENDERER_PATH = path.join(__dirname, 'client');

function createClientWindow(globalUUIDList) {  

  const uuidClient = uuidv4();
  clientWindow = new BrowserWindow({
    x: 0,
    y: 0,
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      sandbox: true,
      // contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'), //path.join(RENDERER_PATH, 'preload-extended.js')
      additionalArguments: [ '--uuid-renderer='.concat(uuidClient) ]
    }
  })
  clientWindow.loadURL('file://' + path.join(RENDERER_PATH, 'index.html'));

  // @TODO: Use 'ready-to-show' event
  //        https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
  clientWindow.webContents.on('did-finish-load', () => {
    if (!clientWindow) {
      throw new Error('"clientWindow" is not defined');
    }
    clientWindow.show();
    clientWindow.focus();
  });

  clientWindow.on('closed', () => {
    clientWindow = null;
  });

  openDevTool(clientWindow, true);
  
  rendererObj = {
    id: uuidClient,
    status: 'client',
    winId: clientWindow.id,
    name: 'clientname128729'
  };
  globalUUIDList.push(rendererObj);

  return clientWindow;
}

module.exports = createClientWindow;
/*
  Informative comments provided by https://www.blackhat.com/docs/us-17/thursday/us-17-Carettoni-Electronegativity-A-Study-Of-Electron-Security-wp.pdf
  Uses process.stdout.write instead of console.log so we can cleanly catch the output in the parent process.
*/

const { app, BrowserWindow, BrowserView } = require('electron');
const path = require('path');
// import configureStore from './store/configureStore';
// import createMainWindow from './createMainWindow';
// import createBrowserView from './createBrowserView';

const CLIENT_PATH = path.join(__dirname, '..', 'client');
const DAPPS_PATH = path.join(__dirname, '..', 'dapps');

let win, view, view2;
let bounds = {
  x: 300,
  y: 0,
  width: 600,
  height: 600
};

app.on('ready', () => {
  win = new BrowserWindow({
    x: 0,
    y: 0,
    webPreferences: {
      nodeIntegration: false,
      sandbox: true,
      contextIsolation: true,
      preload: path.join(CLIENT_PATH, 'preload.js')
    }
  })
  win.loadURL('file://' + path.join(CLIENT_PATH, 'index.html'));

  // create multiple view and keep them around the memory, detached from the window
  // then switching workspaces is just and additional call to setBrowserView
  view = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      sandbox: true,
      contextIsolation: true,
      preload: path.join(DAPPS_PATH, 'preload.prod.js')
      // [ 
        // path.join(VIEW_PATH, 'test.js')
      // ]
    }
  });

  // win.setBrowserView(view);
  // view.setBounds(bounds);
  view.webContents.loadURL('file://' + path.join(DAPPS_PATH, 'dappBrowserView1', 'index.html'));

  view2 = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      sandbox: true,
      contextIsolation: true,
      preload: path.join(DAPPS_PATH, 'preload.prod.js')
      //   path.join(VIEW_PATH, 'test.js') 
      // ]
    }
  });
  view2.webContents.loadURL('file://' + path.join(DAPPS_PATH, 'dappBrowserView2', 'index2.html'));
  process.stdout.write("BrowserView identificators: " + view.id + ", " + view2.id);
});

process.stdout.write("Main initialized");

// In main process.
const ipcMain = require('electron').ipcMain;

ipcMain.on('rpc-communicate', function (event, rpc, arg) {
  process.stdout.write("RPC REQUEST: " + rpc + " " + arg);
  view.webContents.send('rpc-communicate', arg);
});

ipcMain.on('rpc-switch', function (event, rpc, arg) {
  process.stdout.write("RPC REQUEST: " + rpc);
  switch (+rpc) {
    case 1:
      // win.setBrowserView(view);
      // view.setBounds(bounds);
      break;
    case 2:
      // win.setBrowserView(view2);
      // view2.setBounds(bounds);
      break;
    default:
      alert("No such browserview");
  }
});

ipcMain.on('rpc-start', function (event, rpc, arg) {
  process.stdout.write("other-value: " + rpc + " " + arg);
  event.returnValue =
    `
  {
   "status": "started rpc succesfully"
  }
  `;
});

ipcMain.on('rpc-request', function (event, rpc, arg) {
  process.stdout.write("RPC REQUEST: " + rpc + " " + arg);
  event.returnValue =
    `
  {
   "address": "pUYofdfsgasdpsdpfsaddressrofl"
  }
  `;
});

const electron = require('electron');
const ipcRenderer = electron.ipcRenderer;

 
window.onload = () => {
  ipcRenderer.send('answer', process.argv);
};


class ElectronManager {
  constructor() {
    
    const uuidRendererParam = process.argv.filter(function(param) {
      return param.indexOf('--uuid-renderer') >= 0;
    });  
    const uuidRenderer = uuidRendererParam[0].split('=')[1];
    console.log(uuidRenderer);

    console.log(electron.remote.getGlobal('getReduxState')());

    const replayActionRenderer = (store) => { 
      ipcRenderer.on('redux-action', (event, payload) => {
        store.dispatch(payload);
      });
    }

    const getGlobalState = () => {
      const globalState = electron.remote.getGlobal('getReduxState'); 
      return globalState;
    }

    const sendActionMain = (action) => {
      console.log(uuidRenderer);
      ipcRenderer.send('redux-action', uuidRenderer, action);
    }
  
    this.replayActionRenderer = replayActionRenderer;
    this.getGlobalState = getGlobalState;
    this.sendActionMain = sendActionMain;

    // this.send = ipcRenderer.send; // for switch
  }
}

window.ipc = new ElectronManager();

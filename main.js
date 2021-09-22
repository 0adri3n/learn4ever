const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const {Menu, Tray } = require('electron');
const path = require('path');  


let mainWindow;

function createWindow () {

  var iconPath = path.join(__dirname, 'assets', 'icon.png');

  mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        maxWidth: 1000,
        minWidth: 1000,
        maxHeight: 700,
        minHeight: 700,
        icon: iconPath,
        title: 'learn4ever',
        autoHideMenuBar: true,
        webPreferences: {
          devTools: false,
          nodeIntegration: true,
          contextIsolation: false,
        }
    });

  mainWindow.loadURL(`file://${__dirname}/index.html`); 

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.on('minimize',function(event){
    event.preventDefault();
    mainWindow.hide();
  });

  mainWindow.on('close', function (event) {
    if(!app.isQuiting){
        event.preventDefault();
        mainWindow.hide();
    }

    return false;
  });
  tray = new Tray(iconPath);
  var contextMenu = Menu.buildFromTemplate([
    { label: 'Open app', click:  function(){
        mainWindow.show();
    } },
    { label: 'Quit', click:  function(){
        app.isQuiting = true;
        app.quit();
    } }
  ]);
  tray.setToolTip('learn4ever')
  tray.setContextMenu(contextMenu)
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

app.on('activate', () => {
if (mainWindow === null) {
    createWindow();
}
});
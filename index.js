const {app, BrowserWindow} = require('electron')
const electron = require('electron')
const path = require('path')
const Tray = electron.Tray
const Menu = electron.Menu
const iconPath = path.join(__dirname,'images/btn_slideR.png')
let appIcon = null;

function createWindow () {
<<<<<<< HEAD
  window = new BrowserWindow({width: 960, height: 590})
  window.loadFile('index.html')
  appIcon = new Tray(iconPath)
  appIcon.setToolTip('electron app')
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Restore app',
      click: () => {
        window.show()
      }
    },
    {
      label: 'Quit app',
      click: () => {
        window.close()
      }
    }
  ])
  appIcon.setContextMenu(contextMenu)
  appIcon.on('click', () => {
    window.isVisible() ? window.hide() : window.show()
=======

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 960,
    height: 590,
    frame: false,
      })

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
>>>>>>> 7dc84babec54c5ff547d276b1deb4a4c8f347464
  })
  
// var PythonShell=  require('python-shell');
//
// PythonShell.run('opencam.py',  function  (err, results)  {
//  if  (err)  throw err;
//  console.log('opencam.py finished.');
//  console.log('results', results);
// });

   window.on('close', (event) => {
       windows = null
   })

   window.on('minimize',function(event){
       event.preventDefault()
       window.hide()
   })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})

app.on('activate', () => { window.show() })

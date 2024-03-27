const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    //das skript preload wird vor der eigentlichen app gestartet
    webPreferences: {
        //_dirname sagt das er im aktuellen home verzeichnis sucht
        preload: path.join(__dirname, 'preload.js')
      }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
    //damit kann man massages vom renderer zum main process sen den durch den ping channel
  ipcMain.handle('ping', () => 'pong')
  createWindow()

  //falls kein Window offen, create ein neues (für MAC, da die da gerne im Hitergund laufen))
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
 
//wenn alle Fenster geschlossen soll die App beendet werden (wichtig für MAC)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })


  
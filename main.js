const { app, BrowserWindow, shell, ipcMain } = require("electron");

let win;
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) { app.quit(); }

function createWindow() {
  win = new BrowserWindow({
    width: 360,
    height: 480,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  win.loadFile("index.html");
}

app.whenReady().then(() => {
  app.setLoginItemSettings({ openAtLogin: true });
  createWindow();
});

app.on("second-instance", () => { if (win) { win.show(); win.focus(); } });
app.on("window-all-closed", () => app.quit());
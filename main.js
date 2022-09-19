const { Menu, app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const electron = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

const globalShortcut = electron.globalShortcut

const createWindow = () => {
    // set timeout to render the window not until the Angular 
    // compiler is ready to show the project
    setTimeout(() => {
  
        // console.log(Menu.getApplicationMenu())
        // console.log(Menu.getApplicationMenu().items().)

        // electron.Menu.getApplicationMenu().items
        // electron.Menu.getApplicationMenu().getMenuItemById('File').enabled = false
        // Create the browser window.

        win = new BrowserWindow({
            autoHideMenuBar: true,
            width: 1500,
            height: 800,
            icon: `${__dirname}/dist/project/assets/images/logo.png`
        });

        globalShortcut.register('f5', function() {
            // console.log('f5 is pressed')
            // win.reload()
            win.loadURL(url.format({
                //__dirname is the current working dir
                pathname: path.join(__dirname, 'dist/project', 'index.html'),
                protocol: 'file:',
                slashes: true
            }));
        });

        // and load the app.
        win.loadURL(url.format({
            //__dirname is the current working dir
            pathname: path.join(__dirname, 'dist/project', 'index.html'),
            protocol: 'file:',
            slashes: true
        }));

        // Emitted when the window is closed.
        win.on('closed', () => {
            // Dereference the window object, usually you would store windows
            // in an array if your app supports multi windows, this is the time
            // when you should delete the corresponding element.
            win = null;
        });
    }, 10000);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});
const { app, BrowserWindow } = require("electron");

let mainWindow;

const onclosed = () => {
    mainWindow = null;
};

const createWondow = () => {
    mainWindow = new BrowserWindow({
        resizable: false,
        fullscreen: true,
        titleBarStyle: "hidden"
    });
    mainWindow.loadURL(`${__dirname}/build/index.html`);
    mainWindow.on("closed", onclosed);
    mainWindow.setMenu(null);
};

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (!mainWindow) {
        createWondow();
    }
});

app.on("ready", () => {
    createWondow();
});

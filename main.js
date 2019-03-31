const{app,BrowserWindow}= require('electron');
const path= require('path');
const url= require('url');

let win;

function createWindow()
{
  //create browser windo
win =new BrowserWindow({width:800, height:600, icon:__dirname+'/img/logo.png'});
// load index.html
win.loadURL(url.format({
  pathname: path.join(__dirname, 'index.html'),
  protocol: 'file:',
  slashes: true
}));

//open devtools

win.webContents.openDevTools();

win.on('closed', ()=> {
  win= null;
});
}
app.on('ready',createWindow);

app.on('windows-all-closed', ()=> {
if(process.platform !=='darwin'){
  app.quit();
}});

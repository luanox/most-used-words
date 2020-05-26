const { ipcMain } = require('electron')

ipcMain.on('process-subtitles', (event, paths) => {
    console.log(paths);
    
    event.reply('process-subtitles', [
        { name: "you", amount: 900 },
        { name: "he", amount: 459 },
        { name: "the", amount: 265 },
        { name: "my", amount: 566 },
        { name: "i", amount: 678 }
    ])
})
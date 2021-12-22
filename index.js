require('dotenv').config();


const TelegramBot = require('node-telegram-bot-api')
const token = "5043926979:AAHKAn1EQctkn7H1kOYoQL7AA43Yw-IzUeo"
const bot = new TelegramBot(token, { polling: true })
const exec = require('child_process').exec;

function shutdown(callback){
    exec('shutdown now', function(error, stdout, stderr){ callback(stdout); });
}

function reboot(callback){
    exec('shutdown -r now', function(error, stdout, stderr){ callback(stdout); });
}



bot.onText(/\/start/, (msg, match) => {
    const chatId = msg.chat.id
  
    bot.sendMessage(chatId, 'привет,этим ботом я управляю компом на работе,для продолжения введите пароль:')
    bot.onText(/\/275206/,(msg,match)=>{
        init()
    })
    
  })
function init(){
    bot.onText(/\/shutdown/,(msg,match)=>{
        shutdown(function(output){
            console.log(output);
        });
    })
    bot.onText(/\/reboot/,(msg,match)=>{
        reboot((out)=>{
            console.log(out)
        })
    })

}
require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TG_TOKEN
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log(msg);
  bot.sendMessage(chatId, 'Mesaj qəbul edildi');
});
console.log("run\n");
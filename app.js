var TelegramBot = require('node-telegram-bot-api');

var token = '248303247:AAFGYhIwTttrno20uOlXP2_--RVfpYI-gz8';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});

// Matches /echo [whatever]
bot.onText(/\/echo (.+)/, function (msg, match) {
  var fromId = msg.from.id;
  var resp = match[1];
  bot.sendMessage(fromId, resp + '\r\n Reply from OpenShift hosted app.');
});
/*
bot.onText(/\/echo2 (.+)/, function (msg, match) {
  var fromId = msg.from.id;
  var resp = match[1];
  bot.sendMessage(fromId, resp + '\r\n From Jalal');
});
// Any kind of message
bot.on('message', function (msg) {
//   var chatId = msg.chat.id;
//   // photo can be: a file path, a stream or a Telegram file_id
//   var photo = 'cats.png';
//   bot.sendPhoto(chatId, photo, {caption: 'Lovely kittens'});
var fromId = msg.from.id;
  bot.sendMessage(fromId, "write with /echo");
});
*/
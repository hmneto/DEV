const nodeTelegramBotApi = require('node-telegram-bot-api');
const TelegramBot = require('node-telegram-bot-api');   //Api bot do Telegram

const token = '5026042055:AAEq78WIj75IObknSEJYNB0LrOWZfG5dcvQ';
const bot = new TelegramBot(token, {polling: true});

class MxlogBot {
  constructor(){
    bot.onText(/\Bom dia/i, (msg, match) => {
      const chatId = msg.chat.id;
      bot.sendMessage(chatId, "Bom dia")
      
    });

    bot.onText(/\Quero relatar um problema no chamado (.+)/i, (msg, match) => {
      const chatId = msg.chat.id;
      const idChamado = match[1]; // o numero do chamado
      const opts = {
        reply_markup:{
          force_reply: true
        }
      };
      bot.sendMessage(chatId, "Descreva o problema que teve no chamado:", opts)
      .then(function (msg){
        bot.onReplyToMessage(msg.chat.id, msg.message_id, function(reply){
          bot.sendMessage(chatId,"Ok, encaminharemos sua mensagem até um de nossos operadores");
          console.log(reply.text);
        })
      })
    });

    bot.onText(/\/Sobre/i, (msg, match) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId,"Bot da Mxlog");
    });

    // Aqui vem todas as mensagens recebidas pelo bot independente do conteudo.
    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        console.log("Recebeu a mensagem:");
        console.log(msg.text);
        //bot.sendMessage(chatId, 'Recebi sua mensagem');
    });
  }
}

module.exports = MxlogBot;
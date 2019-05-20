/*CMD
  command: /check
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// telegramid - it is telegram id for another user
let res = Libs.ResourcesLib.anotherUserRes("doge", 683905191);
Bot.sendMessage("Hes Doge : " + res.value());

/*CMD
  command: /balance
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: balance 💰
CMD*/

var refUserBonus = Libs.ResourcesLib.userRes("doge");
var res = Libs.ResourcesLib.userRes("doge");
var totalBalance = res.value() + refUserBonus.value()
Bot.sendMessage("You're Balance : " + totalBalance) 

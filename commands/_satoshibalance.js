/*CMD
  command: /satoshibalance
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: referral satoshi
CMD*/

let res = Libs.ResourcesLib.userRes("satoshi");
Bot.sendMessage("Balance, Satoshi: " + res.value());

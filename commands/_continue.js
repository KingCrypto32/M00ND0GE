/*CMD
  command: /continue
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Please Send The Amount You Want to Withdraw!.




  ANSWER
  keyboard: 
  aliases: continue ✅
CMD*/

User.setProperty("amount" , data.message , "text");
var res = Libs.ResourcesLib.userRes("doge");
res.set(0)

Bot.runCommand("/freedogereply");

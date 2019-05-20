/*CMD
  command: /free
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Please Verify that You're A Human. 

Send The Code Below

#FREEDOGE

CLAIM ONCE A DAY ONLY OR YOU WILL BE BAN. 
  ANSWER
  keyboard: 
  aliases: claim now 🔥
CMD*/

var last_run_at = User.getProperty("last_run_at");
if(last_run_at){
   duration_in_hours = ((new Date) - last_run_at) / 1000/60/60;
}else{
   // It is the first time!
   duration_in_hours = 99;
}
if(duration_in_hours>=24){
   User.setProperty("last_run_at", (new Date), "datetime")
   Bot.sendMessage("You Can Now Claim");
   // add your code
var res = Libs.ResourcesLib.userRes("doge");
res.add(0.5)
Bot.sendMessage("You're Balance : " + res.value())
Bot.sendMessage("You Claim Free 0.5 DOGE");

}else{
   Bot.sendMessage("Please claim after 24 hours. ")
}

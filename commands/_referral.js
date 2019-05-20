/*CMD
  command: /referral
  help: 
  need_reply: 
  auto_retry_time: 
  answer: The reward is still in Maintenance, but it will be recorded once our dev is done developing it. 
  keyboard: Back 🔙 , \n My Invites 👩‍👩‍👧‍👦
  aliases: referral 📡
CMD*/

let parther_link=Libs.ReferralLib.currentUser.getRefLink("M00ND0GE_BOT");
Bot.sendMessage("Invite You're Friends \n\nEvery One New Friend is 1 DOGE, \n\n" + parther_link);

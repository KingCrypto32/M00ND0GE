/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 

  <<ANSWER
Welcome To Moon Doge Bot, 

We Have A Plan For 60 Hour's Investment Only. 

To see The Contract Information Click Contract Button. 

OWNER : @MOOND0GE

DEVELOPER : @Amirhhs0

STARTED : 5/20/19 📆
  ANSWER
  keyboard: CONTRACTS 🗒 , INVEST 💸 , INFO 📰 , \n WITHDRAW 💳 , SETWALLET 💼, \n MY ACTIVE INVESTMENT , \n Referral 📡 , Claim 💰
  aliases: 
CMD*/

function doAttracted(refUser){
  // access to Bonus Res of refUser
  let refUserBonus = Libs.ResourcesLib.anotherUserRes("doge", refUser.telegramid);
  refUserBonus.add(1);  // add 100 bonus for friend
}

Libs.ReferralLib.currentUser.track({
   doAtractedByUser: doAttracted
});

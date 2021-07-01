// This code will read a mailinator inbox for emails.
// The goal was to open the email so it would register
// as an open email at sendgrid but the read doesn't
// seem to trigger the open event - damn!
// 21-apr-2021
//
// run as: node getMailinatorEmails.js
//
var mailinator = require ("mailinator-inbox")

async function showEmails() {
for (var j=1; j<=4; j++) {
   const inbox = new mailinator.Inbox("bmh2"+j);
   await inbox.refresh();
   console.log("\n***** Processing mailbox bmh2"+j);
   console.log("# of emails is " + inbox.emailHeaders.length);
   for (var i = 0; i < inbox.emailHeaders.length; i++) {
       console.log("Email # "+i);
       const firstEmailHeader = inbox.emailHeaders[i];
       const firstEmail = await inbox.getEmail(firstEmailHeader.id);
       console.log("Subject: "+firstEmail.mailinatorMail.subject);
       console.log("From:    "+firstEmail.mailinatorMail.from);
       console.log("To:      "+firstEmail.mailinatorMail.to+"\n");
      }
   }
}

showEmails();

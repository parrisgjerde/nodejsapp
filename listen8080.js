const http = require('http');

http.createServer((request, response) => {
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', (err) => {
    console.error(err);
  });
  let data = '';
  request.on('data', chunk => {
    data += chunk;
  });
  request.on('end', () => {
    var emails = JSON.parse(data);
    var dateMilliNow = new Date(Date.now());
    var currDateTime = dateMilliNow.toLocaleString();
    var subCampaign = "";
    var campaignName = "";
    var campaignType = "";
    emails.forEach(function(email) {
       const unixTimestamp = email.timestamp;
       const milliseconds = unixTimestamp * 1000 ;
       const dateObject = new Date(milliseconds);
       const humanDateFormat = dateObject.toLocaleString(); //2019-12-9 10:30:15

       var categories = email.category;
       // Make sure there is a category property before assigning to variables.
       // Configured an email within the design editor and assigned categories
       // but for some reason the were not sent.
       if (email.hasOwnProperty('category')) {
          subCampaign = categories[0];
          campaignName = categories[1];
          campaignType = categories[2];
       } else {
          subCampaign = "na";
          campaignName = "na";
          campaignType = "na";
       };

       var eventName = email.event;
       var messageID = email.sg_message_id;
       console.log(currDateTime+"|"+humanDateFormat+"|"+eventName + "|" + subCampaign +"|"+campaignName+"|"+campaignType+"|"+ email.email+"|"+messageID);
    });
    //console.log(JSON.parse(data)); 
    response.end();
  });
}).listen(8080);

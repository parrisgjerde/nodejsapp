var emails = 
[
  {
    category: [ 'A000037-TT00036', 'TT00036', 'TNT' ],
    email: 'bmh33@mailinator.com',
    event: 'delivered',
    ip: '149.72.232.105',
    response: '250 Ok',
    sg_event_id: 'ZGVsaXZlcmVkLTAtMjEzOTM2NzItdTFqMnNoT2tSM3FJbHU2UHBqQ0xwZy0w',
    sg_message_id: 'u1j2shOkR3qIlu6PpjCLpg.filterdrecv-canary-855b569b5-klfgg-14-6080957A-5.0',
    'smtp-id': '<u1j2shOkR3qIlu6PpjCLpg@geopod-ismtpd-4-1>',
    timestamp: 1619039610,
    tls: 1
  },
  {
    category: [ 'A000037-TT00036', 'TT00036', 'TNT' ],
    email: 'bmh34@mailinator.com',
    event: 'processed',
    send_at: 0,
    sg_event_id: 'cHJvY2Vzc2VkLTIxMzkzNjcyLVBWdndqOVA1VENHN3JlS0V4VjdXX0EtMA',
    sg_message_id: 'PVvwj9P5TCG7reKExV7W_A.filterdrecv-7bbb56ff7b-dk7zf-14-6080957A-2B.0',
    'smtp-id': '<PVvwj9P5TCG7reKExV7W_A@ismtpd0133p1iad2.sendgrid.net>',
    timestamp: 1619039610
  },
  {
    category: [ 'A000037-TT00036', 'TT00036', 'TNT' ],
    email: 'bmh34@mailinator.com',
    event: 'delivered',
    ip: '149.72.232.105',
    response: '250 Ok',
    sg_event_id: 'ZGVsaXZlcmVkLTAtMjEzOTM2NzItUFZ2d2o5UDVUQ0c3cmVLRXhWN1dfQS0w',
    sg_message_id: 'PVvwj9P5TCG7reKExV7W_A.filterdrecv-7bbb56ff7b-dk7zf-14-6080957A-2B.0',
    'smtp-id': '<PVvwj9P5TCG7reKExV7W_A@ismtpd0133p1iad2.sendgrid.net>',
    timestamp: 1619039611,
    tls: 1
  },
  {
    category: [ 'A000037-TT00036', 'TT00036', 'TNT' ],
    email: 'bmh36@mailinator.com',
    event: 'delivered',
    ip: '149.72.166.43',
    response: '250 Ok',
    sg_event_id: 'ZGVsaXZlcmVkLTAtMjEzOTM2NzItcURLMFJ1VnBSc09uaWdrMFRZaFQ4QS0w',
    sg_message_id: 'qDK0RuVpRsOnigk0TYhT8A.filterdrecv-7bbb56ff7b-69td5-14-6080957B-2A.0',
    'smtp-id': '<qDK0RuVpRsOnigk0TYhT8A@geopod-ismtpd-6-2>',
    timestamp: 1619039612,
    tls: 1
  }
];

emails.forEach(function(email) {
    var categories = email.category;
    var subCampaign = categories[0];
    var campaignName = categories[1];
    var campaignType = categories[2];
    var eventName = email.event;
    console.log(eventName + "|" + subCampaign +"|"+campaignName+"|"+campaignType+"|"+ email.email);
});

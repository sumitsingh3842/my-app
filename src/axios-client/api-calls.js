const axios=require('axios');
var request = require("request");

var options = { method: 'POST',
  url: 'https://dev-e8ngvuo2ygnrkkuq.us.auth0.com/oauth/token',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  form:
   { grant_type: 'BeyHZMmOHSxeR1OTtVdRhH4Rgg4k6cJOk05vozGF0P83G',
     client_id: 'PNjOJHf22DLmXJ9wVAbxpNwfotMtqmVr',
     client_secret: 'Caoxfbk5WbDNhnhIPT-31Xaryjpsghkdayy3-7VuFgFzAoI0BbaD-USBPjlh7zXp',
     code: 'BeyHZMmOHSxeR1OTtVdRhH4Rgg4k6cJOk05vozGF0P83G',
     redirect_uri: "http://localhost:3000/dashboard" }
   };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
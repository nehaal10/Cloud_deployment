// const express = require('express');
// const app = express();
// app.listen(3000, function() {
//     console.log('server is running on port 3000');
//   }); 
// app.get('/', (req, res) => {
//     res.send('<h1>SMS</h1>');
// });
module.exports = {
    serviceID:"VAd1a3e043b00030f386652b63d7a44e2e",
    accountSID:"AC5246d67bde6e3083d8e30306b0961799",
    authToken: "5816c3a89acddc9ba07b65b64fc11f9d"

}
// const client = require('twilio')(
//     process.env.TWILIO_ACCOUNT_SID,
//     process.env.TWILIO_AUTH_TOKEN
//   );
  
//   client.messages.create({
//     from: process.env.TWILIO_PHONE_NUMBER,
//     to: process.env.CELL_PHONE_NUMBER,
//     body: "You just sent an SMS from Node.js using Twilio!"
//   }).then((messsage) => console.log(message.sid));


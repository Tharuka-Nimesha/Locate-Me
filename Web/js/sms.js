const accountSid = "";
const authToken = "";
const client = require("twilio")(accountSid, authToken);
const bodytext = "Truck is 500m away";

exports.sendSMS = (bodytext, number) => {
  client.messages
    .create({
      body: bodytext,
      from: "+16623378515",
      to: number
    })
    .then(message => console.log(message.sid))
    .done();
};

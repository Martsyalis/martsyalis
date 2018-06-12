const AWS = require('aws-sdk');

AWS.config.region = 'us-west-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-west-2:8327d16c-1b2c-419c-95e0-20f5bec47cb5',
});

let lexRunTime = new AWS.LexRuntime();
let lexUserId = 'mediumBot' + Date.now();

const postToLex = (message) => new Promise((resolve, reject) => {
  console.log('we are sending to lex', message);
  let params = {
    botAlias: '$LATEST',
    botName: 'test',
    inputText: message,
    userId: lexUserId,
  };
  lexRunTime.postText(params, (err, data) => {
    if (err) {
      console.log('error is', err);
      reject(err);
    }
    if (data) {
      console.log('data is', data);
      resolve(data);
    }
  });
});

module.exports = {
  postToLex
};
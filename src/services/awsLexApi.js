const AWS = require('aws-sdk');

AWS.config.region = 'us-west-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.IDENTITY_POOL_ID
});

let lexRunTime = new AWS.LexRuntime();
let lexUserId = 'mediumBot' + Date.now();

const postToLex = message =>
  new Promise((resolve, reject) => {
    let params = {
      botAlias: '$LATEST',
      botName: 'test',
      inputText: message,
      userId: lexUserId
    };
    lexRunTime.postText(params, (err, data) => {
      if (err) {
        reject(err);
      }
      if (data) {
        resolve(data);
      }
    });
  });

module.exports = {
  postToLex
};

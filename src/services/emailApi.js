const LambdaUrl =
  'https://3qgukogaod.execute-api.us-west-2.amazonaws.com/dev/message';

export default {
  postMessage(message) {
    return fetch(LambdaUrl, {
      body: JSON.stringify(message),
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(
        () =>
          'Thank you for getting in touch, looking forward to talking to you!'
      )
      .catch(err => {
        console.log('error in postMessage:', err);
        return 'There was an error sending the message. if you still want to get in touch with Maryus please email him at Martsyalis@gmail.com. Thanks!';
      });
  }
};

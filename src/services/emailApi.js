const LambdaUrl = 'https://3qgukogaod.execute-api.us-west-2.amazonaws.com/dev/message';


export default {

  postMessage(message) {
    return fetch('https://3qgukogaod.execute-api.us-west-2.amazonaws.com/dev/message', {
      body: JSON.stringify(message),
      method: 'POST'
    })
      .then(response => response)
      .catch(err => {
        console.log('error in postMessage:', err);
        return 'There was an error sending the message. if you still to get in touch with Maryus please email him at Martsyalis@gmail.com. Thanks!';
      });
  },
 
};
import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '817553072112-kl47j3ivu56tkvpvbd6ip2k32chhjcvl.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }
  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;

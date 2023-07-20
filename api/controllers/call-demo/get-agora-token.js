module.exports = {


  friendlyName: 'Get agora token',


  description: 'Get agora token',

  inputs: {
    uid: {
      type: 'string'
    },
    channelName: {
      type: 'string'
    }
  },

  exits: {

  },

  fn: async function (inputs, exits) {
    const { RtcTokenBuilder, RtcRole } = require('agora-token');

    console.log({ inputs });
    console.log(this.req.params);

    const appID = '13696f494c8441f8b3f88fe0afcd940e';
    const appCertificate = 'af0a2aae202d49e297a8f5e15d78b52d';
    const channelName = inputs.channelName;
    const uid = inputs.uid;
    const role = RtcRole.PUBLISHER;

    const expirationTimeInSeconds = 3600;

    const currentTimestamp = Math.floor(Date.now() / 1000);

    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

    // IMPORTANT! Build token with either the uid or with the user account. Comment out the option you do not want to use below.

    // Build token with uid
    const token = RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channelName, uid, role, privilegeExpiredTs);
    // console.log("Token With Integer Number Uid: " + token);

    // Build token with user account
    // const tokenB = RtcTokenBuilder.buildTokenWithAccount(appID, appCertificate, channelName, account, role, privilegeExpiredTs);
    // console.log("Token With UserAccount: " + tokenB);

    return exits.success({
      status: true,
      token
    });
  }
};

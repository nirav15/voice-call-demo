module.exports = {


  friendlyName: 'subscribe',


  description: 'subscribe',

  exits: {

  },

  fn: async function (inputs, exits) {
    User.subscribe(this.req, ['admin']);

    return exits.success({
      status: true
    });
  }
};

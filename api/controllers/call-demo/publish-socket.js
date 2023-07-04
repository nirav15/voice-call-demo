module.exports = {


  friendlyName: 'subscribe',


  description: 'subscribe',

  inputs: {
    data: {
      type: 'ref'
    }
  },

  exits: {

  },

  fn: async function (inputs, exits) {
    console.log("inputs", inputs);
    User.publish(['admin'], inputs.data);

    return {};
  }
};

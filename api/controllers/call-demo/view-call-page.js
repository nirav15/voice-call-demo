module.exports = {


  friendlyName: 'View call demo page',


  description: 'Display the dashboard "call demo" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/call-demo/index',
      description: 'Display demo page'
    },

  },


  fn: async function () {

    console.log(this.req.params);
    return {
      userId: this.req.params.userType
    };

  }


};

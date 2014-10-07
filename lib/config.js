var config = {};

module.exports = function() {

  var env = process.env;

  if (!env) {
    throw new Error('I need environment variables');
  }

  if (!env.MONGOLAB_URI) {
    throw new Error('I need a MONGOLAB_URI');
  }

  return {
    port: env.PORT || 1339,
    db: {
      url: env.DB_URL
    }
  };

};
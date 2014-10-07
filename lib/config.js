var config = {};

module.exports = function() {

  var env = process.env;

  if (!env) {
    throw new Error('I need environment variables');
  }

  if (!env.DB_URL) {
    throw new Error('I need a DB_URL');
  }

  return {
    port: 1339,
    db: {
      url: env.DB_URL
    }
  };

};
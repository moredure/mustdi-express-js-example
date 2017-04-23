const nconf = require('nconf');
const path = require('path');
const dotenv = require('dotenv');

/**
 * Config class
 */
class Config {
  /**
   * Config
   * @singleton
   */
  constructor() {
    dotenv.load();
    nconf.env(['NODE_ENV', 'SECRET']); // secret from dotenv file in app root
    nconf.defaults({NODE_ENV: 'development'});
    const NODE_ENV = nconf.get('NODE_ENV');
    if (NODE_ENV === 'production') {
      nconf.file('production', {
        file: path.join(__dirname, 'config.prod.json'),
      });
    } else if (NODE_ENV === 'testing') {
      nconf.file('testing', {
        file: path.join(__dirname, 'config.test.json'),
      });
    }
    nconf.file('default', {
      file: path.join(__dirname, 'config.dev.json'),
    });
    console.log(nconf.get());
    return nconf;
  }
}

module.exports = Config;

/**
 * Config class
 */
class Config {
  /**
   * Config
   * @singleton
   * @param {DiExternalDependency} nconf nconf
   * @param {DiExternalDependency} path path
   * @param {DiExternalDependency} dotenv dotenv
   */
  constructor(nconf, path, dotenv) {
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
    return nconf;
  }
}

module.exports = Config;

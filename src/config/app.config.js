/**
 * Config class
 */
class Config {
  /**
   * Config
   * @singleton
   * @method createConfig
   * @param {DiExternalDependency} nconf nconf
   * @param {DiExternalDependency} path path
   * @param {DiExternalDependency} dotenv dotenv
   */
  constructor(nconf, path, dotenv) {
    this._nconf = nconf;
    this._path = path;
    this._dotenv = dotenv;
  }
  /**
   * Creates configuration
   * @return {Object} nconf object
   */
  createConfig() {
    this._dotenv.load();
    this._nconf.env(['NODE_ENV', 'SECRET']); // secret from dotenv file in app root
    this._nconf.defaults({NODE_ENV: 'development'});
    const NODE_ENV = this._nconf.get('NODE_ENV');
    if (NODE_ENV === 'production') {
      this._nconf.file('production', {
        file: this._path.join(__dirname, 'config.prod.json'),
      });
    } else if (NODE_ENV === 'testing') {
      this._nconf.file('testing', {
        file: this._path.join(__dirname, 'config.test.json'),
      });
    }
    this._nconf.file('default', {
      file: this._path.join(__dirname, 'config.dev.json'),
    });
    return this._nconf;
  }
}

module.exports = Config;

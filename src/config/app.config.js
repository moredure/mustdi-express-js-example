/**
 * Config class
 */
class Config {
  /**
   * Config
   * @singleton
   * @param {DiExternalDependency} nconf nconf
   * @param {DiExternalDependency} path path
   */
  constructor(nconf, path) {
    nconf.env(['NODE_ENV']);
    nconf.defaults({NODE_ENV: 'development'});
    nconf.file('default', {file: path.join(__dirname, 'config.dev.json')});
    return nconf;
  }
}

module.exports = Config;

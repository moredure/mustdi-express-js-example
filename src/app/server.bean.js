const $ = require('react-autobind');

/**
 * Server class
 */
class Server {
  /**
   * Server
   * @singleton
   * @param {ServerCloser} serverCloser event emmiter object
   * @param {MongoDb} mongodb
   * @param {Logger} logger
   * @param {ExpressApplication} app
   * @param {Config} config
   * @param {Object} server server
   */
  constructor(serverCloser, mongodb, logger, app, config, server) {
    this._serverCloser = serverCloser;
    this._mongodb = mongodb;
    this._logger = logger;
    this._app = app;
    this._config = config;
    this._server = server;
    $(this);
  }
  /**
   * Start server
   */
  start() {
    const app = this._app.build();
    const PORT = this._config.get('port');
    this._server = app.listen(PORT, this._onListen);
    this._serverCloser.onClose(this._onClose);
  }
  /**
   * On closing
   */
  _onClose() {
    this._server.close();
    this._mongodb.close();
    this._logger.log('App Closed');
  }
  /**
   * On server listening
   */
  _onListen() {
    const PORT = this._config.get('port');
    this._logger.log('App is listening on port:', PORT);
  }
}

module.exports = Server;

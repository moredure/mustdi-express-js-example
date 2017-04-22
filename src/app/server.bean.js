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
   */
  constructor(serverCloser, mongodb, logger, app) {
    this._serverCloser = serverCloser;
    this._mongodb = mongodb;
    this._logger = logger;
    this._app = app;
  }
  /**
   * Start server
   */
  start() {
    const app = this._app.build();
    const PORT = app.get('port');
    const server = app.listen(PORT, () => {
      this._logger.log('App is listening on port:', PORT);
    });

    this._serverCloser.onClose(() => {
      server.close();
      this._mongodb.close();
      this._logger.log('App Closed');
    });
  }
}

module.exports = Server;

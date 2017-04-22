/**
 * Server class
 */
class Server {
  /**
   * Server
   * @param {DiExternalDependency} express express
   * @param {DiExternalDependency} http http
   * @param {Router} router some router
   * @param {ServerCloser} serverCloser event emmiter object
   * @param {MongoDb} mongodb
   * @param {Config} config
   * @param {Logger} logger
   */
  constructor(express, http, router, serverCloser, mongodb, config, logger) {
    this._express = express;
    this._router = router;
    this._serverCloser = serverCloser;
    this._http = http;
    this._mongodb = mongodb;
    this._config = config;
    this._logger = logger;
  }
  /**
   * Start server
   */
  start() {
    const PORT = this._config.get('port');
    const app = this._express();
    const server = app.use('/', this._router.build())
      .listen(PORT, () => {
        this._logger.log('App is listening on port:', PORT);
      });
    this._serverCloser.on('close', () => {
      server.close();
      this._mongodb.close();
      this._logger.log('App Closed');
    });
  }
}

module.exports = Server;

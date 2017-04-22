/**
 * Server class
 */
class Server {
  /**
   * Server
   * @param {DiExternalDependency} express express
   * @param {Router} router some router
   * @param {ServerCloser} router some router
   * @param {DiExternalDependency} http http
   * @param {MongoDb} mongodb
   */
  constructor(express, router, serverCloser, http, mongodb) {
    this._express = express;
    this._router = router;
    this._serverCloser = serverCloser;
    this._http = http;
    this._mongodb = mongodb;
  }
  /**
   * Start server
   */
  start() {
    const app = this._express();
    app.use('/', this._router.build());
    const server = this._http.createServer(app);
    server.listen(3000);
    this._serverCloser.on('close', () => {
      server.close();
      this._mongodb.close();
      console.log('App Closed');
    });
  }
}

module.exports = Server;

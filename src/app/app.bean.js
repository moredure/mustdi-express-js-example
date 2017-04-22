/**
 * ExpressApplication class
 */
class ExpressApplication {
  /**
   * ExpressApplication
   * @singleton
   * @param {DiExternalDependency} express express
   * @param {Router} router some router
   * @param {Config} config
   */
  constructor(express, router, config) {
    this._express = express;
    this._router = router;
    this._config = config;
  }
  /**
   * Start server
   */
  build() {
    const app = this._express();

    app.set('port', this._config.get('port'));

    app.use('/', this._router.build());

    if (app.get('env') === 'production') {
      const helmet = require('helmet');
      app.use(helmet());
    }

    return app;
  }
}

module.exports = ExpressApplication;

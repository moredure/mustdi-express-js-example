const express = require('express');

/**
 * ExpressApplication class
 */
class ExpressApplication {
  /**
   * ExpressApplication
   * @singleton
   * @param {Router} router some router
   */
  constructor(router) {
    this._router = router;
  }
  /**
   * Start server
   */
  build() {
    const app = express();
    app.use('/', this._router.build());
    if (app.get('env') === 'production') {
      const helmet = require('helmet');
      app.use(helmet());
    }
    return app;
  }
}

module.exports = ExpressApplication;

const Di = require('mustdi');

class ExpressTestApplication {
  /**
   * Main method as main in java ;)
   * With Js and mustdi nothing is impossible
   */
  static main() {
    const container = new Di.DefaultContainer(__dirname, [
      './app/*.js',
      './events/*.bean.js',
      './controllers/*.ctrl.js',
      './db-adapters/*.db.js',
      './models/*.model.js',
      './routers/*.router.js',
      './config/*.config.js',
      './loggers/*.logger.js',
    ]);
    container.getBean('Server').start();
  }
}

if (module === require.main) {
  ExpressTestApplication.main();
}
